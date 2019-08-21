import React from 'react'
import PropTypes from 'prop-types'

class CreatePostModal extends React.Component {
  render () {
    return(
      <div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" id="post-button" data-toggle="modal" data-target="#postModal" data-whatever="@getbootstrap">+</button>
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
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <br/>
              <div className="modal-title">
              <div className="form-group">
                <label for="message-text" className="col-form-label">Title: </label>
                <input class="form-control" type="text" placeholder="Title" />
                </div>
              </div>
              <br/>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">Write post: </label>
                    <textarea className="form-control" id="postModal"type="Post" placeholder="Write your post..." onChange={this.handleChange}></textarea>
                  </div>
                </form>
              </div>
              <br/>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Make Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePostModal;
