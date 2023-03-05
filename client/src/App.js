import './App.css';
import {Route , BrowserRouter, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import BookingCar from './Pages/BookingCar'
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='' exact element={<Home/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/bookingcar' exact element={<BookingCar/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
