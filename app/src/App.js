import React from 'react';
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import {BrowserRouter as Router, Route , Routes, BrowserRouter} from "react-router-dom";
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderComponent />
            <div className="container">
              <Routes>
                <Route path = "/" element={<ListEmployeeComponent />}></Route>
                <Route path = "/employees" element={<ListEmployeeComponent />}></Route>
                <Route path = "/add-employee" element={<CreateEmployeeComponent />}></Route>
                <Route path='/edit-employee/:id' element={<UpdateEmployeeComponent />}></Route>
              </Routes>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
