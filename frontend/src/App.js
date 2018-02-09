import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  _loginAttempt() {
    const data = {
      email: this.refs.username.value,
      password: this.refs.password.value
    }

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/Users/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
    .then((response) => console.log(response))
  }


  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => {e.preventDefault(); this._loginAttempt()}}>
          <input type="text" placeholder="Email" ref="username"/>
          <input type="password" placeholder="Password" ref="password"/>
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }
}

export default App;