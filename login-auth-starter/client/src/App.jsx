import axios from 'axios'

import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import './App.css'


function App() {

    const [user, setUser] = useState({})
   
    useEffect(() => {
    
   
 
   
    }, [])
  
    console.log(user)
    return ( 
        <div className="app">
            <Navbar username={user.username} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile username={user.username} email={user.email} />} />
                <Route path="*" element={<Navigate to="/login"/>}></Route>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
            </Routes>
        </div>
     );
}

export default App;
