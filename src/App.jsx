
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Logement} from './pages/Logement'
import {Error} from './pages/Error'
import {React} from "react";


export function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='Logement/:id' element={<Logement />}></Route>
          <Route path='*' element={<Error />}></Route>  
        </Routes>
      </Router>

  )
}
