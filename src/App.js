import React from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
const App = () => {
  return (
    <Router>
      <div className='app'>
      
        <Routes>
          <Route path="/" element={[<Header/>,<Home/>]}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
           
        </Routes>
      </div>
    </Router>
  )
}

export default App
