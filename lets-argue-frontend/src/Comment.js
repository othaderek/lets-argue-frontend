import React from 'react'

class Comment extends React.Component {
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
            </small>
            <br />
          </div>
        </div>
      </div>
    )

  }
}

export default Comment;
