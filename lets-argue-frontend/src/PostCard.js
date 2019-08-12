import React from 'react'
import PropTypes from 'prop-types'
import CommentModal from './Modals/CommentModal'


class PostCard extends React.Component {

  render () {
    console.log(this.props);
    return(
      <div className="container" style={{"max-width" : "50%"}}>
        <div className="card" >
        <h5 className="card-header">{this.props.title}</h5>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">by ≈ @{this.props.user.username}</h6>
            <p className="card-text">{this.props.body}</p>
            <div class="card-footer">
              <small class="text-muted">
                <a href="#" className="card-link text-muted">by ≈ @{this.props.user.username}</a>
                <a href="#" className="card-link text-muted">channel ≈ #{this.props.channel.name}</a>
                <a href="#" className="card-link text-muted">votes:</a>
              </small>
              <br />
              <CommentModal />
            </div>
          </div>
        </div>
      </div>

    )

  }
}

export default PostCard;
