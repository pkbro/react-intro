import React from 'react';


class CharacterCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentInput : ""
    }
  }

_handleInput(event){
  var value = event.target.value;
  console.log(value);
  this.setState({
    currentInput: value
  })
}


render(){
  return(
    <div>
      <input type="text" onInput= {this._handleInput.bind(this)}></input>
      <p>Character Count: {this.state.currentInput.length}</p>
    </div>
  )
}

}

export default CharacterCounter;
