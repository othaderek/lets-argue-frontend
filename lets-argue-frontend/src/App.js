import React from 'react'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import ProfilePage from './ProfilePage'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  state={
    username: "",
    password: ""
  }

  newUserSignIn = (newUser) => {
    this.setState({newUser})
    // debugger
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token){
        localStorage.token = data.token
        this.props.history.push('/profile')
      }
    })

  }

  render () {
    return(

    <div>
      <Switch>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/login" render={(routerProps) => <LoginPage {...routerProps} newUser={this.state}/>} />
        <Route path="/signup" render={(routerProps) => <SignUpPage {...routerProps} newUserSignIn={this.newUserSignIn} />} />
      </Switch>
    </div>
  )
  }
}

export default App;


// render={(routerProps) => <MessagesPage {...routerProps} username={this.state.username} />}
