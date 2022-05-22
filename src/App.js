import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/buy' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
}

export default App;
