import EmployeeService from "../Services/EmployeeService";
import React from 'react';
import "../Bootstrap/bootstrap.css";
import { Link, useNavigate } from 'react-router-dom';

const { Component } = require("react");

class ListEmployeeComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    navigator = useNavigate();

    updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        })
    }

    addEmployee(){
        this.props.history.push("/add-employee");
    }

    render(){
        return (
            <div>
                <h2 className="text-center m-4">Emloyees List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(emp => (
                                    <tr key={emp.id}>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.emailId}</td>
                                        <td>
                                            {/* <Link to="/update-employee/{id}" className="btn btn-info">Update</Link> */}
                                            <button className="btn btn-info" onClick={() => this.updateEmployee(emp.id)}>Update</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end my-3">
                    <Link to='/add-employee' className='btn btn-success'>Add Employee</Link>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;