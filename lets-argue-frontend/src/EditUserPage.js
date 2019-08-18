import React from 'react'

class EditUser extends React.Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.history.push('/profile')
  }
  render () {
    return(
      <div className="container">
        <div className="card">
          <div className="card-header">Edit Profile</div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="First name" required/>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" required/>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="validationDefaultUsername">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                      </div>
                      <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationDefault03">City</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="City" required/>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationDefault04">State</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="State" required/>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationDefault05">Zip</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required/>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">Edit</button>
              </form>
            </div>
        </div>
        <button className="btn btn-primary" type="submit" onClick={this.handleClick}>Back</button>
      </div>
    )
  }
}

export default EditUser;
