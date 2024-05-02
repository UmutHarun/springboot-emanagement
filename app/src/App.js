import React from 'react';
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import DeleteEmployeeComponent from './Components/DeleteEmployeeComponent';

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
                <Route path='/delete-employee/:id' element={<DeleteEmployeeComponent />}></Route>
              </Routes>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
