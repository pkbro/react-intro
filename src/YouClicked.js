import React from 'react';

class YouClicked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
      timesReset: 0
    }
  }

  _handleButtonClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  _handleReset = () => {
    this.setState({
      timesClicked: this.state.timesClicked = 0,
      timesReset: this.state.timesReset + 1
    })
  }

  render() {

    return (
      <div>
        <button type='button' onClick={this._handleButtonClick}>
          Click me
        </button>
        <button type='button' onClick={this._handleReset}>
          RESET</button>
        {this.state.timesClicked == 0
          ? <p>You have not clicked the button</p>
          : <p>You have clicked the button  {this.state.timesClicked} times</p>}


        {this.state.timesReset >= 1
          ? <p>You reset {this.state.timesReset}
              times</p>
          : <p>You have not reset</p>}
      </div>
    )
  }
}

export default YouClicked;
