import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setlogout } from '../reduc/loginSlice';
import { clearTodo } from '../reduc/todoSlice';


export const Navigationbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // setIsAuthenticated(false);
    dispatch(setlogout());
    dispatch(clearTodo());
  }

  return (
    <>

      <nav className='navbar'>
        <h1>dashboard</h1>
        <ul>
          <Link to="/profile">profile</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/" onClick={handleLogout}>Logout</Link>
          {/* <li><Link to="/" onClick={handleLogout}>Logout</Link></li> */}
        </ul>
      </nav>
    </>
  )
}
