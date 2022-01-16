
import './App.css';

import { Route, Routes } from "react-router-dom";
import WandList from "./Component/WandList";
import NavBar from "./Component/NavBar";
import Home from './Component/Home';

import wands from './wands';
import About from './Component/About';
import WandDetails from "./Component/WandDetails";




function App() {
  return (
    <div className="App" >
      <NavBar/>
     <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
    
   <Route path="/wandList" element={<WandList wandList={wands}/>}/>


   <Route path="/wandList/:wandSlug" element={<WandDetails />}/>
    


     </Routes>
      
    
    </div>
  );
}

export default App;

      {/* // <Route path="/Details" element={<Details/>} >  */}