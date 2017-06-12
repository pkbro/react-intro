import React from 'react';


class CharacterLimit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      charsRemaining: this.props.limit
    }
  }


  _handleInput(event){
    var value = event.target.value;
    // this.setState({
    //   currentInput: this.props.limit
    // })
    if(value.length <= this.props.limit){
      this.setState({
      charsRemaining: this.props.limit - value.length
      })
    }

  }
  render(){
    return(
      <div>
        <input type="text" onInput={this._handleInput.bind(this)} maxLength={this.props.limit}></input>
        <p>{this.state.charsRemaining} Characters Remaining</p>
      </div>
    )
  }

}

export default CharacterLimit;
