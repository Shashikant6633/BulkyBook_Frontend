import './App.css';
import Cart from './components/Cart';
import Category from './components/Category';
import Create from './components/Create';
import CreateP from './components/CreateP';
import Delete from './components/Delete';
import Details from './components/Details';
import Edit from './components/Edit';
import EditP from './components/EditP';
import Home from './components/Home';


import Login from './components/Login';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Register from './components/Register';
import { CartProvider } from './components/CartContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <CartProvider>
    <Router>
    {/* <Navbar /> */}
      {/* <Routes>
      <Route path="/admin" element={<Navbar admin />} />
      </Routes>
       <Routes>
       <Route path="/user" element={<Navbar user />} />
       </Routes> */}
        
      <Routes>
      <Route path="/admin" element={<Home admin />} />
      </Routes>
       <Routes>
       <Route path="/user" element={<Home user />} />
       </Routes>

       <Routes>
        <Route path="" element={<Home />} />
      </Routes>
        
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/category' element={<Category />} />
      </Routes>
      <Routes>
        <Route path='/create' element={<Create />} />
      </Routes>
      <Routes>
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Routes>
        <Route path='/delete' element={<Delete />} />
      </Routes>
      <Routes>
        <Route path='/product' element={<Product/>} />
      </Routes>
      <Routes>
        <Route path='/createP' element={<CreateP />} />
      </Routes>
      <Routes>
        <Route path='/editP/:id' element={<EditP />} />
      </Routes>
      {/* <Routes>
        <Route path='/details/:id' element={<Details />} />
      </Routes> 
       <Routes>
        <Route path='/cart' element={<Cart />} />
      </Routes> */}
     
     {/* <Routes>
     <CartProvider>
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
      </CartProvider>
      </Routes> */}

<Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

      </CartProvider>
    
    </>
  );
}

export default App;
