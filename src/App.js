import React from "react";
import Slider from "./Components/Slider";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Dashboard from './Pages/Dashboard.js';
import Expirence from './Pages/Expirence.js';
import Hobbies from './Pages/Hobbies.js';
import Projects from './Pages/Projects.js';
// import RecentWork from './Pages/RecentWork.js';
import About from './Pages/About.js';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Slider>
     <Routes>
     <Route path='/' element={<Dashboard/>}/>
     <Route path='/expirence' element={<Expirence/>}/>
     <Route path='/AboutMe' element={<Hobbies/>}/>
     <Route path='/projects' element={<Projects/>}/>
     {/* <Route path='/recentWork' element={<RecentWork/>}/> */}
     <Route path='/about' element={<About/>}/>
     </Routes>
     </Slider>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
