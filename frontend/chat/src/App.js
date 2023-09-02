import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './screens/Home'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
