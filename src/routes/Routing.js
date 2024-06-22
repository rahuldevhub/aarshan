import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from '../pages/Landingpage'
import Bookingpage from '../pages/Bookingpage'
import Topsellingpage from '../pages/Topsellingpage'
import Detailtopselling from '../components/Detailscreens/Detailtopselling'
import Wedding from '../pages/serviceweoffer/Wedding'


const Routing = () => {
  return (
    <div>
         <BrowserRouter>
        
        <Routes>
            <Route path = '/' element = {<Landingpage/>}></Route>

            <Route path='/topselling' element={<Topsellingpage/>}></Route>
            <Route path='/topselling/:productId' element={<Detailtopselling />}></Route>

            {/* Serviceweoffer */}

              <Route path='/wedding' element={<Wedding/>}></Route>

            <Route path='/booking' element={<Bookingpage /> }></Route>

        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default Routing