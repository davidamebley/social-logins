import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from 'react';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      // Making a request from the Server
      fetch('http://localhost:5000/auth/login/success', {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      }).then((response) =>{  //Our fetch method returns a json response
        if (response.status === 200){
          return response.json();
        }
        // If no 200 response/user, throw error
        throw new Error('User authentication failed');
      }).then(resObject => {  //this is the json response object received above
        setUser(resObject.user);   //get the user property value from the object
      }).catch((err) =>{
        console.log(err);
      });
    };

    // Now, we can call our getUser function, which gets the authenticated user and sets in the user variable
    getUser();
  }, []);
  // Checking our user
  console.log('Current user ',user);
  // console.log('response ',response);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />   
            <Route path='/post/:id' element={user ? <Post/> : <Navigate to="/login" />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
