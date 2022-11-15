import { NavLink } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Button from 'react-bootstrap/Button';
import "../index.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {/* <img className="d-block w-100" src={logo} height={40} alt="logo" /> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand font-link2" to="/" style={{fontWeight:'bolder', color:'white'}}>wellness pal .
        </NavLink>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li style={{margin:10}}><Login /></li>
            <li style={{margin:10}}><Signup /></li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="/meditations/"
              >
                Meditations
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="/gratitude/"
              >
                Gratitude
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="/exercises/"
              >
                Exercises
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;