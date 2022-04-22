import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './pages/Cart';


function App() {

 
  return(

  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/cart" element={<Cart />} />
     </Routes>
  </Router>
  )
}

export default App;
