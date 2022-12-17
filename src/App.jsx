
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from './components/Home'
import {About} from './components/About'
import {Logement} from './components/Logement'
import {Error} from './components/Error'
import {React} from "react";
import { ReactDOM } from "react-dom";


export function App() {
  return (
    
      <Router>
        <Routes>
          <Route exct path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='Logement/:id' element={<Logement />}></Route>
          <Route path='*' element={<Error />}></Route>  
        </Routes>
      </Router>

  )
}
