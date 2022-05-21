import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Appointment from './Components/Pages/Appointment/Appointment';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Header from './Components/Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Myappointment from './Components/Pages/Dashboard/Myappointment';
import MyReview from './Components/Pages/Dashboard/MyReview';
import User from './Components/Pages/Dashboard/User';
import RequireAdmin from './Components/Pages/Login/RequireAuth/RequireAdmin';


const App = () => {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
      </Routes>

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

      <Routes>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Myappointment></Myappointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='user' element={<RequireAdmin>
            <User></User>
          </RequireAdmin>}></Route>
        </Route>
      </Routes>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;