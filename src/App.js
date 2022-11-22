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
import Navbar from './components/Navbar'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

