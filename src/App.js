import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddaReview from './Pages/Dashboard/AddaReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrdersPro from './Pages/Dashboard/MyOrdersPro';
import Payment from './Pages/Dashboard/Payment';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/parts/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/review' element={<AddaReview></AddaReview>}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/myorderpro' element={<MyOrdersPro></MyOrdersPro>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>


        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
