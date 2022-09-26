import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/:id" onClick={(event) => event.preventDefault()}>
            Card
          </NavLink>
        </header>
        <main className="container">
          <Outlet />
        </main>
      </>
    );
  }
}
export default Layout;
