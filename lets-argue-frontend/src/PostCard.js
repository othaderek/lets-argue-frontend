import React from 'react'
import PropTypes from 'prop-types'

class PostCard extends React.Component {

  render () {
    console.log(this.props);
    return(
      <div className="container">
        <div className="card" style={{"max-width" : "50%"}}>
        <h5 className="card-header">{this.props.title}</h5>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">by ≈ @{this.props.user.username}</h6>
            <p className="card-text">{this.props.body}</p>
            <div class="card-footer">
              <small class="text-muted">
                <h6 className="text-muted">votes: {this.props.user.username}</h6>
                <a href="#" className="card-link text-muted">by ≈ @{this.props.user.username}</a>
                <a href="#" className="card-link text-muted">channel ≈ #{this.props.channel.name}</a>
              </small>
            </div>
          </div>
        </div>
      </div>

    )

  }
}

export default PostCard;
