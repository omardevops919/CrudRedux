
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Listarticles from './componentss/articlesRedux/Listarticles';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';

import Cart from './componentss/articlesRedux/cart';
import StripePayment from './componentss/articlesRedux/StripePayment';
import Login from './admin/components/login';
import Logout from './admin/components/logout';
import Register from './admin/components/Register';
import { useSelector } from 'react-redux';
import NavScroll from './componentss/Navscroll';
import Dashboard from './admin/dashboard';

import ProtectedRoutes from './admin/components/ProtectedRoute';

import Menus from './admin/Menu';

function App() {
  const{isLoggedIn}=useSelector((state)=> state.auth)
  
  return (
    <Router>
    {isLoggedIn? <NavScroll/>:<Login/>}
      
    <Routes>

         <Route path="/ProtectedRoute" element={<ProtectedRoutes/>}/>

        <Route path="/Menu" element={<Menus/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Listarticles/>}/>
        <Route path="/articlesadmin" element={<ProductsAppAdmin/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pay/:total' element={<StripePayment/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="*" element={<p>Page Not Found: 404!</p>} />
        

      </Routes>

    </Router>
    
 
   
  );
}
export default App;
