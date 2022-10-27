import './App.css';
import React from 'react';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import {Route,Routes,Navigate} from 'react-router-dom'
 
function App() {
  const user = localStorage.getItem("token")
  return (
    <React.Fragment>
    <Routes>
      {user && <Route path="/" exact element={<Dashboard/>}/>}
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/" exact element={<Navigate replace to="/login"/>}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;
