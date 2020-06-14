import React, { Component } from 'react';
import './Meme.css'

export default class Meme extends Component {
    state = {
        isEditingCaption: false,
        caption: this.props.caption,
        image: this.props.image
    }

    handleToggleCaption = () => {
        this.setState({isEditingCaption: !this.state.isEditingCaption})
     }

    handleToggleImage = () => {
        this.setState({isEditingImage: !this.state.isEditingImage})
    }

    onDestroyMeme = () => {
        this.props.destroyMeme(this.props.id)
    };

    handleChangeCaption = (event) => {
        this.setState({caption: event.target.value});
    }

    handleChangeImage = (event) => {
        this.setState({image: event.target.value});
    }

    onUpdateMemeCaption = (event) => {
        event.preventDefault();
        this.props.updateMemeCaption(this.props.id, this.state.caption)
        this.setState({isEditingCaption: false});
    }

    onUpdatedMemeImage = (event) => {
        event.preventDefault();
        this.props.updateMemeImage(this.props.id, this.state.image)
        this.setState({isEditingImage: false})
    }

    render(){
    let result;
    if (this.state.isEditingCaption) {
      result = (
          <div>
           <form className='Meme-caption-edit-form'>
            <input
              type='text'
              value={this.state.caption}
              name='caption'
              onChange={this.handleChangeCaption}
            />
            <button onClick={this.onUpdateMemeCaption}>Save</button>
          </form>
          <img src={this.props.image} />
          </div>
      );
    }
    else if(this.state.isEditingImage){
        result = (
            <div>
             <form className='Meme-image-edit-form'>
              <input
                type='text'
                value={this.state.image}
                name='image'
                onChange={this.handleChangeImage}
              />
              <button onClick={this.onUpdatedMemeImage}>Save</button>
            </form>
            <img src={this.props.image} />
            </div>
        );
    }
    else {
      result = (
        <div>
                <span className="Caption">{this.props.caption}</span>
                <img src={this.props.image}  alt={this.props.name}/>
                <button onClick={this.onDestroyMeme}>❌</button>
                <button onClick={this.handleToggleCaption}>Edit Caption</button>
                <button onClick={this.handleToggleImage}>Edit Image</button>
            </div>
      );
    }

        return(
            <div className="Meme">
                {result}

            </div>
        )
    }
}