import React, { useState , useEffect} from 'react'
import EmployeeService from '../Services/EmployeeService';
import { Link, useParams , useNavigate } from 'react-router-dom';

function UpdateEmployeeComponent() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    });
    const [validValues,setValidValues] = useState(false);
    const navigate = useNavigate();

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
            navigate('/employees');
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
        if(value.length === 0){
            setValidValues(true);
        }
        else{
            setValidValues(false);
        }
    };

    return (
        <div>
            <h3 className="text-center mt-4">Update Employee</h3>
            <form>
                <div className="form-group py-3">
                    <label className={`d-flex justify-content-start ${validValues ? 'text-danger' : 'text-muted'}`}> First Name: </label>
                    <input placeholder="First Name" name="firstName" className={`form-control ${validValues ? 'bg-danger' : 'bg-white'}`} 
                        value={employee.firstName} onChange={handleInputChange} />
                </div>
                <div className="form-group py-3">
                    <label className={`d-flex justify-content-start ${validValues ? 'text-danger' : 'text-muted'}`}> Last Name: </label>
                    <input placeholder="Last Name" name="lastName" className={`form-control ${validValues ? 'bg-danger' : 'bg-white'}`} 
                        value={employee.lastName} onChange={handleInputChange} />
                </div>
                <div className="form-group py-3">
                    <label className={`d-flex justify-content-start ${validValues ? 'text-danger' : 'text-muted'}`}> Email Address: </label>
                    <input placeholder="Email Address" name="emailId" className={`form-control ${validValues ? 'bg-danger' : 'bg-white'}`} 
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

