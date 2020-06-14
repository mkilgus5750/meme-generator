import React, { Component } from 'react';
import "./CreateMeme.css";

export default class NewMeme extends Component {
    state = {
        caption: "",
        image: "",
    }

    handleChangeCaption = (event) => {
        this.setState({caption: event.target.value});
    }

    handleChangeImage = (event) => {
        this.setState({image: event.target.value});
    }
    
    onCreateMeme = () => {
        this.props.createMeme({
            caption: this.state.caption,
            image: this.state.image
        });
        this.setState({
            caption: "",
            image: ""
        });
    };

    render(){
       return(
           <div className="CreateMeme">
                <form>
                    <label htmlFor="Caption">Caption</label>
                    <input 
                    id="caption"
                    type="text"
                    name="caption"
                    value={this.state.caption}
                    onChange={this.handleChangeCaption}
                    />
                </form>


                <form>
                    <label htmlFor="Image">Image</label>
                    <input 
                    id="image"
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={this.handleChangeImage}
                    />
                </form>

                <button onClick={this.onCreateMeme}>Create Meme!</button>
            </div>
       )
   }
}