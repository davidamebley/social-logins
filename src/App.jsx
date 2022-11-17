import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <Login/>
    </div>
  );
};

export default App;
