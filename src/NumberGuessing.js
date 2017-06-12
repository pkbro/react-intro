import React, {PropTypes} from 'react';

const numberToGuess = Math.ceil((Math.random() * 100));

class NumberGuessing extends React.Component{
  propTypes = {
    numberToGuess: PropTypes.number.isRequired
  }
  constructor(props){
    super(props);
    this.state ={
      numberToGuess: Math.ceil(Math.random() * 100),
      guesses: [],
      gameStatus: ""
    }
  }

  _handleButtonClick = (event) => {
    console.log(this.refs.userGuess.value);
    this.setState({
      guesses: this.state.guesses.concat([this.refs.userGuess.value])
    }, function() {
      if(this.state.guesses.length >= 5){
        gameStatus: "You lose"
        this._handleReset();
      }
    })
    if (this.refs.userGuess.value == numberToGuess){
      this.setState({
        gameStatus: "You win"
      })
    }else if (this.refs.userGuess.value < numberToGuess){
      this.setState({
        gameStatus: "too low"
      })
    }else{
      this.setState({
        gameStatus: "too high"
      })
    }


    console.log(this.state.guesses);

  }

  _handleReset(){
    this.setState({
      gameStatus: "",
      numberToGuess: numberToGuess,
      guesses: []
    })

  }

  render(){
    return(
      <div>
      <p>Guess a number between 1 and 100</p>
      {this.state.guesses.length == 0 ? null : <p>Your guesses: {this.state.guesses}</p>}
      <p>{this.state.gameStatus}</p>
      {this.state.gameStatus == 'You win' || this.state.gameStatus == 'You lose' ? <button>New Game</button> : null}
      <p>Remaining tries: {5- this.state.guesses.length}</p>
      <input type="text" ref="userGuess"></input>
      <button onClick={this._handleButtonClick}>GUESS</button>
      </div>
    )
  }

}

export default NumberGuessing;
