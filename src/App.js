
import './App.css';
import Dashboard from './Views/Dashboard';
import DashLogin from './Views/DashLogin';
import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={ <Dashboard/> }/>
        <Route path="/DashLogin" element={<DashLogin />} />

      </Routes>
    </div>
    
  );
}

export default App;
