import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header';
import Food from './components/Food/Food';
import Sushi from './assets/images/food/list/sushi.jpg'
import AddFood from './pages/AddFood';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-food' element={<AddFood/>}/>
      </Routes>
      <Footer/>
    </Router>
    <ToastContainer/>
    
    
    </>
  );
}

export default App;
