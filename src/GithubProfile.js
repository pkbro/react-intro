import React from 'react';


class GithubProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
}
    componentDidMount() {

      fetch("https://api.github.com/users/" + this.props.username).then(function(res) {
        console.log(res);
        return res.json()
      }).then((data) => {
        console.log(data);
        this.setState({
          user: data,
          img_url: data.avatar_url,
          name: data.name,
          bio: data.bio
        })
      })
    }

    // componentDidMount() {
    //   this.fetchData();
    // }

    // componentDidUpdate(){
    //   if(this.prevProps.username != this.props.username){
    //     this.fetchData();
    //   }
    // }

    render(){
      if(this.props.username != null){
      return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src={this.state.img_url} style={{borderRadius: 500, width: 60, height: 60, marginRight: 20}}></img>
          <div>
            <p>{this.props.username} ({this.state.name})</p>
            <p>{this.state.bio}</p>
          </div>
        </div>
      )
    }else{
      return(
        <div>LOADING</div>
      )
    }
    }
  }


export default GithubProfile;
