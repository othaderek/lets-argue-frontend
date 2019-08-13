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

  handleClick = (e) => {
    this.props.redirect("signup")
  }

  render () {
    return(
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Let's Argue!</h1>
          <p class="lead">Let's Argue is an online community where you can practiice your argument skills, earn cool badges and interact with others you disagree (and agree) with!</p>
          <hr class="my-4"/>
          <p>Sign up below to get started!</p>
          <p class="lead">
            <a class="btn btn-secondary btn-lg" href="#" role="button" onClick={this.handleClick}>Sign Up!</a>
          </p>
        </div>

        <div className="col-4">
        <div className="card">
          <div className="card-body">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Enter username" name="username" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChange}/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
    </div>
    </div>
    )

  }
}

export default LoginPage;

// <form onSubmit={this.handleSubmit}>
//   <div class="form-group">
//     <label for="exampleInputEmail1">username</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Enter username" onChange={this.handleChange}>
//     <small id="usernameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
