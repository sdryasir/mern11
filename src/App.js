import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {

  return ( 
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;




//JSX - JavaScript XML


/*
1 - We can create custom tags
2 - we can define custom properties (props)
3 - we have to provide the closing tags
*/