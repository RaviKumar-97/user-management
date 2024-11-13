import React, { useState } from 'react';
import { Profile } from './component/Profile.js';
import { Todo } from './component/Todo.js';
import { Login } from './page/login.js'
import {Navigationbar} from "./page/Navbar.js"
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAuthenticated = useSelector((state) => state.loginInfo.isAuthenticated);

  return (
    <div className="App">
    
      {isAuthenticated ?<Navigationbar/> :<Login/>}
        {/* <Navigationbar/>  */}
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/profile" element={ isAuthenticated? <Profile /> : <Navigate to="/" />} />
          <Route path="/todo" element={ isAuthenticated?  <Todo /> :<Navigate to="/" />} />
        </Routes> 
    </div>
  );
}

export default App;
