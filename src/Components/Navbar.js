import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sword from '../Images/sword.png';

export default function Navbar({ isLogged, onLogin, onLogout }) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="brand-logo left">
            <Link to="/" className="navButton black-text">PostBlade</Link>
            <img src={sword} alt="sword-image" className="swordImage"></img>
          </div>
          <ul id="nav-mobile" className="right">
            {isLogged
              ? <>
                  <li onClick={onLogout} className="navButton"><Link to="/" className="black-text">Logout</Link></li>
                  <li className="navButton">
                    <NavLink exact={true} activeClassName='is-active' className="black-text" to='/posts'>
                      Posts
                    </NavLink>
                  </li>
                </>
              : <>
                  <li onClick={onLogin} className="navButton" ><Link to="/" className="black-text">Login</Link></li>
                </>
            }
          </ul>
        </div>
      </nav>
      <br />
    </>
    )
}