import logo from './logo.svg';
import './App.css';
import Listarticles from './componentss/articlesRedux/Listarticles';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    <Router>
      
      <Routes>
        <Route path="/" element={<Listarticles/>}/>
       

      </Routes>

    </Router>
    
 
    </div>
  );
}

export default App;
