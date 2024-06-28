import React, {useState, useEffect}  from 'react';
import './App.css';
import { Route , Routes , useLocation } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Nav/Navbar';
import FormElements from './Components/Form-elements/Form';
import ShopList from './Components/Shop-list/ShopList';
// import ShopDetalis from './Components/ShopDetails/ShopDetails';

function App() {

  const [showNavbar, setShowNavbar] = useState(true);

  const location = useLocation();

  useEffect(() => {
    // Hide navbar on login page
    if (location.pathname === '/login') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location.pathname]);


  return (
    <div>
    
      {showNavbar && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ShopList />} />
        <Route path="/create" element={<FormElements />} />
        <Route path="/view" element={<ShopList />} />
        {/* <Route path="/edit" element={<ShopDetails />} />*/}
      </Routes>
    </div>
  );
}

export default App;
