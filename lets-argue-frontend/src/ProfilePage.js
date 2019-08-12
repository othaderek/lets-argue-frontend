import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'
import Header from './Layouts/Header'

class ProfilePage extends React.Component {

  state = {
    currentUser: [],
    postsFeed: [],
    filterTerm: ""
  }

  componentDidMount(){
      fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then( res => res.json())
    .then( profileData => {
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

  postFilter = (e) => {
    this.setState({filterTerm: e.target.value})
  }

  render () {
    const filteredList = this.state.postsFeed.filter( post => post.title.toLowerCase().includes(this.state.filterTerm))

    const posts = filteredList.map( post => {
      return(
        <PostCard {...post} />
      )
    })


    return(
      <div>
        <Header {...this.state.currentUser} postFilter={this.postFilter} />
        {posts}
      </div>
    )

  }
}

export default ProfilePage;
