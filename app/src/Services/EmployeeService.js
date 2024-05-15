import axios from 'axios'

const API_BASE_URL = "http://localhost:8090";
const EMPLOYEE_API_BASE_URL = API_BASE_URL + "/api/employees";

class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateEmployee(id, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    loginUser(userDetails){
        try {
            return axios.post(API_BASE_URL + "/login/user" , userDetails)
        } catch (error) {
            console.log(error);
        }
    }

    registerUser(userDetails){
        return axios.post(API_BASE_URL + "/register/user" , userDetails)
    }
}

const employeeServiceInstance = new EmployeeService();
export default employeeServiceInstance;