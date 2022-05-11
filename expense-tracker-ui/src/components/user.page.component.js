import React from "react";
import axios from "axios";

export default class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost3000/users/:id`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.users
            .map(user =>
              <li key={user.id}>{user.firstname}{user.lastname}{user.email}{user.password}</li>
            )
        }
      </ul>
    )
  }
}