import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'
import Header from './Layouts/Header'

class ProfilePage extends React.Component {

  state = {
    currentUser: [],
    postsFeed: []
  }

  componentDidMount(){
      fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then( res => res.json())
    .then( profileData => {
      console.log(profileData);
      this.setState({
        currentUser: profileData
      })
    })

    fetch("http://localhost:3000/api/v1/posts", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then( res => res.json())
    .then(postsData => {
      this.setState({postsFeed: postsData})
    })

  }

  render () {
    const posts = this.state.postsFeed.map( post => {
      return(
        <PostCard {...post} />
      )
    })

    return(
      <div>
        <Header {...this.state.currentUser}/>
        {posts}
      </div>
    )

  }
}

export default ProfilePage;
