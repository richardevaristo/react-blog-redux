import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
  render() {

    return (
      <React.Fragment>
          <nav className="navbar is-info">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        Blog
                    </Link>
                    <button type="button" className="navbar-burger burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/about" className="navbar-item">About Us</Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link to="#"className="navbar-link">Actions</Link>
                            <div className="navbar-dropdown">
                                <div className="navbar-item">
                                    <Link to="/blog/create">Add Blog</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> 
      </React.Fragment>
    )
  }
}
