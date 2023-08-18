import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
 import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className=" ">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/Work" element={<Work />}/>
        <Route path="/Contact" element={<Contact />}/>
        </Routes>
        
       
      </div>
    </div>
  );
}

export default App;
