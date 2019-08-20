import React from 'react'
import PropTypes from 'prop-types'

class CreatePostModal extends React.Component {
  render () {
    return(
      <div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" id="comment-button" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">+</button>
      </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New Response</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">Reply:</label>
                    <textarea className="form-control" id={"exampleModal" + this.props.id} type={this.props.type} onChange={this.handleChange}></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Post comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePostModal;
