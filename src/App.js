//import './App.css';

import About from "./routes/about.js";
import Contact from "./routes/contact.js";
import Home from "./routes/home.js";
import Service from "./routes/service.js";
import Signup from "./routes/signup.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes> 
    </div>
  );
}

export default App;
