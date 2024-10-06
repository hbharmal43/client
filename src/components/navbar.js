import React from 'react';
import { useLogoutFunction } from '@propelauth/react';

const Navbar = () => {
  const logout = useLogoutFunction();

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><button onClick={() => logout()}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
