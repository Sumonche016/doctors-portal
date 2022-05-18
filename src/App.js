import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Appointment from './Components/Pages/Appointment/Appointment';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Header from './Components/Pages/Shared/Header/Header';



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

      <Footer></Footer>
    </div>
  );
};

export default App;