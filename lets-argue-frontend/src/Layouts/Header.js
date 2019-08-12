import React from 'react'
import PropTypes from 'prop-types'



class Header extends React.Component {
  render () {
    return(
      <nav class="navbar navbar-dark bg-dark justify-content-between" style={{"background-color" : "#e3f2fd"}}>
        <a class="navbar-brand">{this.props.username}</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>

    )

  }
}

export default Header;
