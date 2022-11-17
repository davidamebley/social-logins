import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/post/:id' element={<Post/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
