package com.emanagement.management.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.emanagement.management.Model.Employee;
import com.emanagement.management.Repository.EmployeeRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Integer id) {
        Employee employee = employeeRepository.findById(id).get();
        return ResponseEntity.ok(employee);
    }
    
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id , @RequestBody Employee employeeDet) {
        Employee employee = employeeRepository.findById(id).get();

        employee.setFirstName(employeeDet.getFirstName());
        employee.setLastName(employeeDet.getLastName());
        employee.setEmailId(employeeDet.getEmailId());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }
    
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Integer id){
        // Employee employee = employeeRepository.findById(id).get();
        employeeRepository.deleteById(id);
        return ResponseEntity.ok("Employee was deleted");
    }
}
