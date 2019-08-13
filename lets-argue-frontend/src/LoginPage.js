import React from 'react'
import PropTypes from 'prop-types'

class LoginPage extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.token = data.token
    })

  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>username</div>
        <input type="text"
        name="username"
        onChange={this.handleChange}
         />
        <div>password</div>
        <input type="password"
        name="password"
        onChange={this.handleChange}
        />
      <input type="submit"/>
      </form>
    )

  }
}

export default LoginPage;
