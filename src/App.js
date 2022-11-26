import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Canopies from './pages/canopies'
import Speakers from './pages/Speakers'
import Generators from './pages/Generators'
import Barrels from './pages/Barrels'
import Coolers from './pages/Coolers'
import Tables from './pages/Tables'
import Chairs from './pages/Chairs'
import Stools from './pages/Stools'
import Dashboard from './pages/Dashboard'
import Detail from './pages/Detail'
import Account from './pages/Account'
import Admin from './pages/Admin'
import Reservations from './pages/Reservations'
// import Navbar from './components/Navbar'
import Footer from './components/footer'
import Layout from './components/Layout'

function App() {


  return (
    <div className="App">
      <BrowserRouter >
      
     
      
        <div className="pages">
          
        <Routes>
          <Route element={<Layout />}>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/Canopies" 
              element={<Canopies />} 
            />
            <Route 
              path="/Speakers" 
              element={<Speakers />} 
            />
            <Route 
              path="/Generators" 
              element={<Generators />} 
            />
            <Route 
              path="/Barrels" 
              element={<Barrels />} 
            />
            <Route 
              path="/Coolers" 
              element={<Coolers />} 
            />
            <Route 
              path="/Tables" 
              element={<Tables />} 
            />
            <Route 
              path="/Chairs" 
              element={<Chairs />} 
            />
            <Route 
              path="/Stools" 
              element={<Stools />} 
            />
             <Route 
              path="/Dashboard" 
              element={<Dashboard />} 
            />
            <Route 
              path="/Detail/:name/:image" 
              element={<Detail />} 
            />
            <Route 
              path="/Account" 
              element={<Account />} 
            />

           </Route>
           <Route 
              path="/Admin" 
              element={<Admin />} 
            />
            <Route 
              path="/Reservations" 
              element={<Reservations />} 
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

