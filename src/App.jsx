/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jsx from "./components/view/Jsx";
import Hook from "./components/view/Hook";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Formulaire from "./components/view/Formulaire";
import Flux from "./components/view/Flux";
import Exercice from "./components/view/Exercice";
import LifeCycle from "./components/view/LifeCycle";

function App() {
  return(
    <>
    <Navbar/>
      <div className='app-container'>
        <div className="app">
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Jsx/>}/>
            <Route path='/hook' element={<Hook/>} />
            <Route path='/formulaire' element={<Formulaire/>} />
            <Route path='/flux' element={<Flux/>} />
            <Route path='/life-cycle' element={<LifeCycle/>} />
            <Route path='/exercice' element={<Exercice/>} />
          </Routes>
        </BrowserRouter>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;