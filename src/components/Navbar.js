import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}




// this will show warrning in console in browser to pass some values
Navbar.protoTypes = {title: PropTypes.string.isRequired,
                        about: PropTypes.string.isRequired}

// isRequired is used to add when it is nesessary to add some text by default
/* */

// when you forget to set default props this will render 
Navbar.defaultProps ={
    title: 'set title here',
    about: 'about text here from default props'
}