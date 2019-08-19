import React from 'react'
import PostCard from './PostCard'
import Header from './Layouts/Header'
import CommentModal from './Modals/CommentModal'

class ProfilePage extends React.Component {

  state = {
    currentUser: [],
    postsFeed: [],
    filterTerm: "",
    body: "",
    user_id: "",
    commentable_type: "",
    commentable_id: ""
  }

  componentDidMount(){

    if (!localStorage.token){
      this.props.history.push('/login')
      return
    }
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

  createComment = (e, postObj) => {
    this.setState({
      body: e.target.value,
      user_id: this.state.currentUser.id,
      commentable_type: e.target.attributes.type.value,
      commentable_id: postObj.id
    })
  }

  submitComment = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/comments", {
      method: 'POST',
      headers: {
        'Authorization': localStorage.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: this.state.body,
        user_id: this.state.user_id,
        commentable_type: this.state.commentable_type,
        commentable_id: this.state.commentable_id
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

  handleEditPage = (e) => {
    this.props.editPage(this.state.currentUser)
  }

  refreshFetch = () => {
    if (!localStorage.token){
      this.props.history.push('/login')
      return
    }
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

  handlePostClick = (postObj) => {
    // console.log(postObj);
    this.props.postHandle(postObj)
  }

  render () {
    console.log(this.state.currentUser);
    const filteredList = this.state.postsFeed.filter( post => post.title.toLowerCase().includes(this.state.filterTerm))

    const posts = filteredList.map( (post, index) => {
      return(
        <div>
          <PostCard {...post} handlePostClick={this.handlePostClick} />
          <CommentModal {...post} type="Post" createComment={this.createComment} submitComment={this.submitComment}/>
        </div>
      )
    })

    return(
      <div>
        <Header {...this.state.currentUser} postFilter={this.postFilter} handleEditPage={this.handleEditPage} />
        {posts}
      </div>
    )

  }
}

export default ProfilePage;
