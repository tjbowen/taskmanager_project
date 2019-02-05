import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <NavLink className="navbar-brand" to="/" exact={true}> Stormlight Todos</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeClassName="is-active" className="nav-link" to="/todos">To-Do List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="is-active" className="nav-link" to="/help">Help</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  </header>
);


export default Header;
