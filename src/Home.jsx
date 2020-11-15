import React from 'react';
import './Home.css'

class Home extends React.Component {
  constructor() {
    super();
    this.state = { Users: [] };
  }

  componentDidMount() {

    console.log(this.props.auth);
    const accessToken = this.props.auth.getAccessToken();

    fetch("/api/Users/GetInnitialData", {
      headers: new Headers({
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
      })
    })
      .then(response => response.json())
      .then(user => this.setState({ Users: user }))
      .catch(error => console.log(error))
  }

  render() {
    let UsreList = this.state.Users.map((user) =>
      <li><i>{user.First_Name}</i> - <h3>{user.Last_Name}</h3></li>);

    return <ul>
      {UsreList}
    </ul>;
  }
}

export default Home;