import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Topsellingpage from './pages/Topsellingpage';
import Ourproductpage from './pages/Ourproductpage';

import Detailtopselling from './component/sections/Detailtopselling';
import Detailourproduct from './component/sections/Detailourproduct';
import Bookingform from './component/sections/bookingform/Bookingform';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Toaster position='top-center' toastOptions={{duration:2000}}/>s */}
      <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      
      <Route path='/topselling' element={<Topsellingpage/>}></Route>
      <Route path="/topselling/:productId" element={<Detailtopselling />} />

      <Route path='/ourproducts' element={<Ourproductpage/>}></Route>
      <Route path='/ourproducts/:productId' element={<Detailourproduct/>}></Route>

      <Route path='/booking' element={<Bookingform/>}></Route>
      
      

        
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
