import React from 'react'

class SignUpPage extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then( res => res.json())
    .then(newUser => {
      if (newUser.username){
        this.props.newUserSignIn(this.state)
      }
    })
  }

  handleClick = () => {
    this.props.history.push('/login')
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <h5 className="card-header">Sign Up!</h5>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label for="exampleInputEmail1">username</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Enter username" name="username" onChange={this.handleChange} />
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
          <div className="right">
          <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Back</button>
          </div>
        </div>
    )

  }
}

export default SignUpPage;
