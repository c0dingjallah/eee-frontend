import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Canopies from './pages/canopies'
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

