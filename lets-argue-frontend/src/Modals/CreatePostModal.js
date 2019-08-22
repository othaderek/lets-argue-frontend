import React from 'react'
import PropTypes from 'prop-types'

class CreatePostModal extends React.Component {

  state = {
    channels: [],
    channel_id: '',
    user_id: '',
    title: '',
    body: ''
  }

  handleClick = () => {
    fetch("http://localhost:3000/api/v1/channels", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then( res => res.json())
    .then( channelData => {
      this.setState({
        channels: channelData,
        user_id: this.props.id
      })
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let selectedChannel = this.state.channels.filter( channel => channel.name === e.target.value)
    this.setState({channel_id: selectedChannel[0].id})
  }

  handleChangeText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClickPost = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/posts", {
      method: 'POST',
      headers: {
        'Authorization': localStorage.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: this.state.body,
        user_id: this.state.user_id,
        title: this.state.title,
        channel_id: this.state.channel_id
      })
    })
    
    this.props.postsFetch()
  }


  render () {
    const channels = this.state.channels.map( channel => {
      return(
        <option name="selectedChannel" id={channel.id}>{channel.name}</option>
      )
    })
    return(
      <div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" id="post-button" data-toggle="modal" data-target="#postModal" data-whatever="@getbootstrap" onClick={this.handleClick}>+</button>
      </div>
        <div className="modal fade" id="postModal" tabindex="-1" role="dialog" aria-labelledby="postModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="postModalLabel">New Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <br/>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Channel: </label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={this.handleChange}>
                {channels}
                </select>
              </div>
              <br/>
              <div className="modal-title">
              <div className="form-group">
                <label for="message-text" className="col-form-label">Title: </label>
                <input class="form-control" type="text" placeholder="Title" name="title" onChange={this.handleChangeText} />
                </div>
              </div>
              <br/>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">Write post: </label>
                    <textarea className="form-control" id="postModal"type="Post" placeholder="Write your post..." name="body" onChange={this.handleChangeText}></textarea>
                  </div>
                </form>
              </div>
              <br/>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClickPost}>Make Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePostModal;
