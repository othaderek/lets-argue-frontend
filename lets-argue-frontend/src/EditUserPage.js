import React from 'react'

class EditUser extends React.Component {

  state={
    currentUserId: this.props.currentUser.id,
    username: this.props.currentUser.username,
    first_name: this.props.currentUser.first_name,
    last_name: this.props.currentUser.last_name,
    city: this.props.currentUser.city,
    state: this.props.currentUser.state,
    zipcode: this.props.currentUser.zipcode

  }
// :first_name, :last_name, :city, :state, :zipcode
  componentDidMount(){

    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}`, {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then( res => res.json())
    .then(console.log)

  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.history.push('/profile')
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  render () {
    // console.log(this.props);
    return(
      <div className="container">
        <div className="card">
          <div className="card-header">Edit Profile</div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="First name" name="first_name" onChange={this.handleChange} value={this.state.first_name} required/>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" name="last_name" onChange={this.handleChange} value={this.state.last_name} required/>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="validationDefaultUsername">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                      </div>
                      <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" name="username" aria-describedby="inputGroupPrepend2" onChange={this.handleChange} value={this.state.username} required/>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationDefault03">City</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="City" name="city" onChange={this.handleChange} value={this.state.city} required/>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationDefault04">State</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="State" name="state" onChange={this.handleChange} value={this.state.state} required/>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationDefault05">Zip</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" name="zipcode" onChange={this.handleChange} value={this.state.zipcode} required/>
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
