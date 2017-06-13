import React from 'react';


class GithubSearchForm extends React.Component{

  _handleSubmit = (e) =>{
    this.props.onSearch(this.refs.userInput.value)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput"/>
        <button onClick={this._handleSubmit} >Go!</button>
      </div>
    );
  }
};

export default GithubSearchForm;
