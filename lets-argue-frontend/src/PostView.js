import React from 'react'
import PropTypes from 'prop-types'
import Header from './Layouts/Header'

export default class PostView extends React.Component {

  state = {
    currentPost: []
  }

  componentDidMount(){
    this.setState({currentPost: this.props.currentPost})
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.history.push('/profile')
  }

  render () {

    if (this.state.currentPost.length !== 0){
      const postComments = this.props.currentPost.comments.map( comment => {
        return(

          <div className="card" >
          <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted"></h6>
          <p className="card-text">{comment.body}</p>
          <div className="card-footer">
          <small className="text-muted">
          <a href="#" className="card-link text-muted">by ≈ @{comment.user.username}</a>
          <a href="#" className="card-link text-muted">points ≈ {comment.user.points}</a>
          <a href="#" className="card-link text-muted">votes:</a>
          </small>
          <br />
          </div>
          </div>
          </div>
        )
      })
    }

    return(
      <div>
        <Header/>
          <div className="container" style={{"max-width" : "50%"}}>
            <div className="card" >
            <h5 className="card-header"><a href="javascript:;" onClick={""}>{this.state.currentPost.title}</a></h5>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">by ≈ @{this.props.currentPost.user.username}</h6>
                <p className="card-text">{this.state.currentPost.body}</p>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#" className="card-link text-muted">by ≈ @{this.props.currentPost.user.username}</a>
                    <a href="#" className="card-link text-muted">channel ≈ #{this.props.currentPost.channel.name}</a>
                    <a href="#" className="card-link text-muted">points: {this.props.currentPost.user.points}</a>
                  </small>
                  <br />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Back</button>
        </div>
      </div>

    )

  }
}
