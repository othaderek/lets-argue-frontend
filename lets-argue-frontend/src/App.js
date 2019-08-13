import React from 'react'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import ProfilePage from './ProfilePage'

class App extends React.Component {

  state = {
    posts: [],
    page: 'login'
  }

  redirect = (page) => {
    this.setState({ page: page })
  }

  componentDidMount(){
    if (localStorage.token) {
      this.redirect('profile')
    }
  }

  render () {
    switch (this.state.page) {
      case "login":
        return <LoginPage />
      case "signup":
        return <SignUpPage />
      case "profile":
        return <ProfilePage />
      default:
        return <LoginPage />
    }

  }
}

export default App;
