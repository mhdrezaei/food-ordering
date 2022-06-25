import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header';
import Food from './components/Food/Food';
import Sushi from './assets/images/food/list/sushi.jpg'
import AddFood from './pages/AddFood';
import Home from './pages/Home';

function App() {
const newFood = {
  "name" : "pizza",
  "price" : 50,
  "imgUrl" : Sushi
}

fetch('http://localhost:5002/stored', {
        method: 'POST',
        body: JSON.stringify(newFood),
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => console.log(data));

  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-food' element={<AddFood/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
