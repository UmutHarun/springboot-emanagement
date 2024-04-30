import React, { useState , useEffect,useHistory} from 'react'
import EmployeeService from '../Services/EmployeeService';
import { Link, useParams } from 'react-router-dom';

function UpdateEmployeeComponent() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    });
    const history = useHistory();

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

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee).then(res => {
            history.push('/employees');
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    return (
        <div>
            <h3 className="text-center mt-4">Update Employee</h3>
            <form>
                <div className="form-group py-3">
                    <label className="d-flex justify-content-start"> First Name: </label>
                    <input placeholder="First Name" name="firstName" className="form-control" 
                        value={employee.firstName} onChange={handleInputChange} />
                </div>
                <div className="form-group py-3">
                    <label className="d-flex justify-content-start"> Last Name: </label>
                    <input placeholder="Last Name" name="lastName" className="form-control" 
                        value={employee.lastName} onChange={handleInputChange} />
                </div>
                <div className="form-group py-3">
                    <label className="d-flex justify-content-start"> Email Address: </label>
                    <input placeholder="Email Address" name="emailId" className="form-control" 
                        value={employee.emailId} onChange={handleInputChange} />
                </div>
                <div className="py-3">
                    <button className="btn btn-success mx-1" onClick={updateEmployee}>Save</button>
                    <Link to='/employees' className='btn btn-danger mx-1'>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default UpdateEmployeeComponent;

