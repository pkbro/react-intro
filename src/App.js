import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js';
import YouClicked from './YouClicked.js';
import CharacterCounter from './CharacterCounter.js';
import CharacterLimit from './CharacterLimit.js';
import NumberGuessing from './NumberGuessing.js';
import GithubProfile from './GithubProfile.js';
import GithubSearch from './GithubSearch.js';
import GithubSearchForm from './GithubSearchForm.js';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
  renderImage(img){
    return <ImageCaption source={img.source} text={img.text} key={img.id}/>
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
          <h2>testing ImageCaption</h2>
          <ImageCaption source ="http://placekitten.com/g/210/210" text="This is a kitten"></ImageCaption>

        <hr/>

          <div>
            {imageList.map(this.renderImage)}
          </div>
          <hr/>
          <h2>Testing Layout</h2>
          <Layout>
            <h2>About us</h2>
            <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
          </Layout>
          <hr/>
            <GuessTheNumber></GuessTheNumber>
          <hr/>
            <YouClicked></YouClicked>
          <hr/>
            <CharacterCounter></CharacterCounter>
          <hr/>
            <CharacterLimit limit={15}></CharacterLimit>
          <hr/>
            <NumberGuessing></NumberGuessing>
          <hr/>
            <GithubProfile username="harrisrobin"></GithubProfile>
          <hr/>
            <GithubSearch></GithubSearch>
            
      </div>
    );
  }
}

export default App;
