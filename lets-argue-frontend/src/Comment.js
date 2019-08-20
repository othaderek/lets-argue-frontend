import React from 'react'

class Comment extends React.Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.deleteComment(this.props.id)
    return false;
  }
  // Conditionally renders a delete button if the logged in user name matches name on the comment instance
  render () {
    return(
      <div className="card" >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted"></h6>
          <p className="card-text">{this.props.body}</p>
          <div className="card-footer">
            <small className="text-muted">
              <a href="#" className="card-link text-muted">by ≈ @{this.props.user.username}</a>
              <a href="#" className="card-link text-muted">points ≈ {this.props.user.points}</a>
              <a href="#" className="card-link text-muted">votes:</a>
              {
                this.props.user.username === this.props.currentUser.username
                ? <a href="javascript:;" className="card-link" onClick={this.handleClick}>delete</a>
                : null
              }
            </small>
            <br />
          </div>
        </div>
      </div>
    )

  }
}

export default Comment;
