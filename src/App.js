import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUP';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
