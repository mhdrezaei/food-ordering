import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap';
import './sass/main.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header';
import {FoodProvider} from './context/foodContext'
import AddFood from './pages/AddFood';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import {CookiesProvider } from 'react-cookie';

function App() {

  return (
    <FoodProvider>
      <CookiesProvider>
    <>
    <Router>
      <Cart/>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-food' element={<AddFood/>}/>
      </Routes>
      <Footer/>
    </Router>
    <ToastContainer/>
    
    
    </>
    </CookiesProvider>
    </FoodProvider>
  );
}

export default App;
