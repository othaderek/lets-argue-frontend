import React from 'react'
import PropTypes from 'prop-types'

class LoginPage extends React.Component {

  state = {
    username: "",
    password: ""
  }
  render () {
    return(
      <form>
        <div>username</div>
        <input type="text" />
        <div>password</div>
        <input type="password"/>
        <input type="submit"/>
      </form>
    )

  }
}

export default LoginPage;
