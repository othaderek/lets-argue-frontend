import React from 'react'
import Comment from './Comment'


class PostCard extends React.Component {

  createComment = (e) => {
    console.log(e.target.value);
  }
  render () {
    // console.log(this.props);
    const comments = this.props.comments.map( comment => {
      return(
        <Comment {...comment}/>
      )
    })
    return(
      <div className="container" style={{"max-width" : "50%"}}>
        <div className="card" >
        <h5 className="card-header">{this.props.title}</h5>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">by ≈ @{this.props.user.username}</h6>
            <p className="card-text">{this.props.body}</p>
            {comments}
            <div className="card-footer">
              <small className="text-muted">
                <a href="#" className="card-link text-muted">by ≈ @{this.props.user.username}</a>
                <a href="#" className="card-link text-muted">channel ≈ #{this.props.channel.name}</a>
                <a href="#" className="card-link text-muted">points: {this.props.user.points}</a>
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
