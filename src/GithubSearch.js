import React from 'react';
import GithubProfile from './GithubProfile';
import GithubSearchForm from './GithubSearchForm';

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  _handleSearch = (searchTerm) => {
    console.log(searchTerm)
    this.setState({
      user: this.refs.userInput.value
    })
  }
  render() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch}/>
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}

      </div>
    );
  }
};

export default GithubSearch;
