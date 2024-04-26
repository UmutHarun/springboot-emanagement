import "../Bootstrap/bootstrap.css";
import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from "../Services/EmployeeService";

const { Component } = require("react");

class CreateEmployeeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            emailId: ""
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);

    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName , lastName: this.state.lastName , emailId: this.state.emailId}
        console.log(JSON.stringify(employee));
        EmployeeService.createEmployee(employee);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    render(){
        return (
            <div >
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" style={{height: "70vh"}}>
                        <div className="card col-md-6">
                             <h3 className="text-center mt-4">Add Employee</h3>
                             <form>
                                <div className="form-group py-3">
                                    <label className="d-flex justify-content-start"> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control" 
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className="form-group py-3">
                                    <label className="d-flex justify-content-start"> Last Name: </label>
                                    <input placeholder="Last Name" name="firstName" className="form-control" 
                                    value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>
                                <div className="form-group py-3">
                                    <label className="d-flex justify-content-start"> Email Address: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control" 
                                    value={this.state.emailId} onChange={this.changeEmailHandler} />
                                </div>
                                <div className="py-3">
                                    <button className="btn btn-success mx-1" onClick={this.saveEmployee}><Link style={{color:"white",textDecoration:"none"}} to='/employees'>Save</Link></button>
                                    {/* <Link to='/employees' className='btn btn-danger mx-1' onClick={this.saveEmployee}>Save</Link> */}
                                    <Link to='/employees' className='btn btn-danger mx-1'>Cancel</Link>
                                </div>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent;