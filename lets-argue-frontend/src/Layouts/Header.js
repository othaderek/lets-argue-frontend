import React from 'react'



class Header extends React.Component {

  handleSubmitLogout = (e) => {
    e.preventDefault()
    window.localStorage.clear()
    window.location.reload(false)
  }

  handleClickEdit = (e) => {
    e.preventDefault()
    console.log("hi");
    this.props.handleEditPage()
  }

  render () {
    return(
      <nav className="navbar navbar-dark bg-dark justify-content-between" style={{"background-color" : "#e3f2fd"}}>
        <a className="navbar-brand">lets argue</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search posts.." aria-label="Search" onChange={this.props.postFilter}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleClickEdit}>Edit</button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmitLogout}>Logout</button>
        </form>
      </nav>

    )

  }
}

export default Header;
