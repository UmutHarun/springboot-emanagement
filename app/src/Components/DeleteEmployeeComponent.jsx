import "../Bootstrap/bootstrap.css";
import React, { useState , useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import EmployeeService from "../Services/EmployeeService";

function DeleteEmployeeComponent() {
    const { id } = useParams();

    const [employee, setEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            let employee = res.data;
            setEmployee({
                id: employee.id,
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }, [id]);

    const removeEmployee = (e) => {
        e.preventDefault();
        // let employee = {firstName: this.state.firstName , lastName: this.state.lastName , emailId: this.state.emailId}
        // console.log(JSON.stringify(employee));
        EmployeeService.deleteEmployee(id);
    }

    return (
        <div >
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center" style={{height: "70vh"}}>
                    <div className="card col-md-6">
                        <h3 className="text-center mt-4">Delete Employee</h3>
                        <form>
                            <div className="form-group py-3">
                                <label className="d-flex justify-content-start"> First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control" 
                                value={employee.firstName} disabled />
                            </div>
                            <div className="form-group py-3">
                                <label className="d-flex justify-content-start"> Last Name: </label>
                                <input placeholder="Last Name" name="firstName" className="form-control" 
                                value={employee.lastName} disabled />
                            </div>
                            <div className="form-group py-3">
                                <label className="d-flex justify-content-start"> Email Address: </label>
                                <input placeholder="Email Address" name="emailId" className="form-control" 
                                value={employee.emailId} disabled />
                            </div>
                            <div className="py-3">
                                <button className="btn btn-danger mx-1" onClick={removeEmployee}><Link style={{color:"white",textDecoration:"none"}} to='/employees'>Delete</Link></button>
                                {/* <Link to='/employees' className='btn btn-danger mx-1' onClick={this.saveEmployee}>Save</Link> */}
                                <Link to='/employees' className='btn btn-primary mx-1'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteEmployeeComponent;