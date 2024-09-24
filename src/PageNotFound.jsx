import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <NavLink to="/" className="back-home-btn">
        Go Back Home
      </NavLink>
    </div>
  );
}

export default PageNotFound;
