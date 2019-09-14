import React from 'react'

class LoginPage extends React.Component {

  state = {
    username: "",
    password: ""
  }
  // Controlled form setState function.
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
      if (data.token){
        localStorage.token = data.token
        this.props.history.push('/profile')
      }
    })
  }

  handleClick = (e) => {
    this.props.history.push("/signup")
  }

  render () {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Let's Argue!</h1>
          <p className="lead">Let's Argue is an online community where you can practiice your argument skills, earn cool badges and interact with others you disagree (and agree) with!</p>
          <hr className="my-4"/>
          <p>Sign up below to get started!</p>
          <p className="lead">
            <a className="btn btn-secondary btn-lg" href="#" role="button" onClick={this.handleClick}>Sign Up!</a>
          </p>
        </div>

        <div className="col-4">
        <div className="card">
          <div className="card-body">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Enter username" name="username" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
    </div>
    </div>
    )

  }
}

export default LoginPage;
