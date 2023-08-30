import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Listarticles from './componentss/articlesRedux/Listarticles';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
function App() {
  return (
    <div className="App">
      
    <Router>
      
      <Routes>
        <Route path="/" element={<Listarticles/>}/>
        <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
       

      </Routes>

    </Router>
    
 
    </div>
  );
}

export default App;
