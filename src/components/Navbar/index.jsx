import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.test} ${styles.abc} ${styles.xyz}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/imgs/logo.png" className={`${styles.w100} ${styles.abc}`} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar