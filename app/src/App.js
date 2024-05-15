import React from 'react';
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import DeleteEmployeeComponent from './Components/DeleteEmployeeComponent';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderComponent />
            <div className="container">
              <Routes>
                <Route path = "/" element={<RegisterComponent />}></Route>
                <Route path = "/employees" element={<ListEmployeeComponent />}></Route>
                <Route path = "/add-employee" element={<CreateEmployeeComponent />}></Route>
                <Route path='/edit-employee/:id' element={<UpdateEmployeeComponent />}></Route>
                <Route path='/delete-employee/:id' element={<DeleteEmployeeComponent />}></Route>
                <Route path='/login-user' element={<LoginComponent />}></Route>
                <Route path='/register-user' element={<RegisterComponent />}></Route>
              </Routes>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
