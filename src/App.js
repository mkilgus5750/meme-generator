import React, { Component } from 'react';
import './App.css';
import Meme from './Meme.js';
import CreateMeme from './CreateMeme';
import MemeList from './MemeList';
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    memes: [
     {
        caption: "When the code compiles without warnings",
        image: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2020/02/baby-yoda-the-mandalorian.jpg",
        id: uuidv4(),
      }, 
       {
        caption: "Stack smashing error. Core dumped.",
        image: "https://cdn.mos.cms.futurecdn.net/LGoEDSKPxnLjMpJv4VaEK5.jpg",
        id: uuidv4(),
      },
      {
        caption: "When you write about 10 lines of code without googling anything",
        image: "https://cdn.vox-cdn.com/thumbor/e0Z6QaSF8Exvglg7fn1kd6Z6QfY=/0x0:1920x1080/1200x800/filters:focal(391x323:697x629)/cdn.vox-cdn.com/uploads/chorus_image/image/66208405/cute-success-kid-1920x1080.0.0.jpg",
        id: uuidv4(),
      },
    ],
  };

  createMeme = ({ caption, image }) => {
    this.setState({
      memes: [
        {
          caption,
          image,
          id: uuidv4()
        },
        ...this.state.memes,
      ],
    });
  }

  destroyMeme = (id) => {
    this.setState({
      memes: this.state.memes.filter((meme) => meme.id !== id),
    })
  }


 updateMemeCaption = (id, updatedCaption) => {
    const updatedMemes = this.state.memes.map(meme => {
    if (meme.id === id) {
      return {...meme, caption: updatedCaption};
    }
    return meme;
  });
  this.setState({ memes: updatedMemes });
 }

 updateMemeImage = (id, updatedImage) => {
  const updatedMemes = this.state.memes.map(meme => {
    if (meme.id === id) {
      return {...meme, image: updatedImage};
    }
    return meme;
  });
  this.setState({ memes: updatedMemes });
 }

 toggleCaption = () => {
    this.setState({isEditingCaption: !this.state.isEditingCaption})
 }

toggleImage = () => {
    this.setState({isEditingImage: !this.state.isEditingImage})
 }

  render(){
    return (
      <div className="App">
        <CreateMeme createMeme={this.createMeme}
        destroyMeme={this.destroyMeme}
        updateMemeCaption={this.updateMemeCaption}
        toggleCaption={this.toggleCaption}
        updateMemeImage={this.updateMemeImage}
        toggleImage={this.toggleImage}
        />
        {/* <MemeList /> */}
          <MemeList>

          {this.state.memes.map((meme) => (
            <Meme
            caption={meme.caption}
            key={meme.id}
            id={meme.id}
            name={meme.caption}
            image={meme.image}
            destroyMeme={this.destroyMeme}
            updateMemeCaption={this.updateMemeCaption}
            toggleCaption={this.toggleCaption}
            updateMemeImage={this.updateMemeImage}
            toggleImage={this.toggleImage}
            />
          ))}

          </MemeList>


      </div>

    );
  }
}

