import React, {PropTypes} from 'react';


const numberToGuess = Math.ceil((Math.random() * 100));

class GuessTheNumber extends React.Component{
  propTypes = {
    numberToGuess: PropTypes.number.isRequired
  }

  _handleButtonClick() {
    if(this.refs.userGuess.value > numberToGuess){
      alert("Guess is too high");
    }else if (this.refs.userGuess.value < numberToGuess) {
      alert("Guess is too low");
    }else{
      alert("You are correct");
    }
  }

    render(numberToGuess){
      return(
    <div>
      <p>Guess a number between 1 and 100</p>
      <input type="text" ref="userGuess">

      </input>
      <button type="button" onClick={this._handleButtonClick.bind(this)}>
        GUESS
      </button>
    </div>
    )
    }
}

export default GuessTheNumber;
