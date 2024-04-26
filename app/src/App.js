import React from 'react';
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="container">
       <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
