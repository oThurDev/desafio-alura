import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Eureka from './components/Eureka';


function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path='/eureka'
            element={<Eureka />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;