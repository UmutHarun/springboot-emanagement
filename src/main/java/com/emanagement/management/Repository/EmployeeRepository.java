package com.emanagement.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.emanagement.management.Model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer>{
    
} 
