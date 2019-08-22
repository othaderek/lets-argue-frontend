import React from 'react'
import Comment from './Comment'


class PostCard extends React.Component {

  createComment = (e) => {
    console.log(e.target.value);
  }

  handleClick = (e) => {
    let clickedPost = this.props
    this.props.handlePostClick(clickedPost)

  }

  deleteComment = (id) => {

    fetch(`http://localhost:3000/api/v1/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": localStorage.token,
        "Content-Type": "application/json"
      }
    })

    this.props.postsFetch()
  }

  deletePost = (e) => {
    debugger
  }

  render () {
    const comments = this.props.comments.map( comment => {
      return(
        <Comment {...comment} currentUser={this.props.currentUser} deleteComment={this.deleteComment}/>
      )
    })
    return(
      <div className="container" style={{"max-width" : "50%"}}>
        <div className="card" >
        <h5 className="card-header"><a href="javascript:;" onClick={this.handleClick}>{this.props.title}</a></h5>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">by ≈ @{this.props.user.username}</h6>
            <p className="card-text">{this.props.body}</p>
            {comments}
            <div className="card-footer">
              <small className="text-muted">
                <a href="#" className="card-link text-muted">by ≈ @{this.props.user.username}</a>
                <a href="#" className="card-link text-muted">channel ≈ #{this.props.channel.name}</a>
                <a href="#" className="card-link text-muted">points: {this.props.user.points}</a>
                  {
                    this.props.user.username === this.props.currentUser.username
                    ? <button type="button" className="close" aria-label="Close" onClick={this.deletePost}>x</button>
                    : null
                  }
              </small>
              <br />

            </div>
          </div>
        </div>
      </div>

    )

  }
}

export default PostCard;
