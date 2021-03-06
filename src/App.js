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
import MyPortfolio from './Pages/Myportfolio/MyPortfolio';
import Notfound from './Pages/Shared/Notfound';
import FooterPro from './Pages/Shared/FooterPro';
import OfferPage from './Pages/Home/OfferPage';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Components/RequireAdmin';
import AddaProduct from './Pages/Dashboard/AddaProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Blogs from './Pages/Blogs';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


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
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/offerpage' element={<OfferPage></OfferPage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/allproducts' element={<Products></Products>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/review' element={<AddaReview></AddaReview>}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/myorderpro' element={<MyOrdersPro></MyOrdersPro>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='/dashboard/addproduct' element={<RequireAdmin><AddaProduct></AddaProduct></RequireAdmin>}></Route>
          <Route path='/dashboard/manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='/dashboard/manageproduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <FooterPro></FooterPro>
      <ToastContainer />
    </>
  );
}

export default App;
