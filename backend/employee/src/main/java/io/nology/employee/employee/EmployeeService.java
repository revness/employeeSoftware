package io.nology.employee.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public Employee createEmployee(@Valid CreateEmployeeDTO data) {
        Employee newEmployee = new Employee();
        newEmployee.setFirstName(data.getFirstName().trim());
        newEmployee.setLastName(data.getLastName().trim());
        newEmployee.setEmail(data.getEmail().trim());
        newEmployee.setPhone(data.getPhone().trim());
        newEmployee.setAddress(data.getAddress().trim());
        newEmployee.setPostcode(data.getPostcode().trim());
        newEmployee.setSuburb(data.getSuburb().trim());
        newEmployee.setState(data.getState());
        newEmployee.setRole(data.getRole().trim());
        newEmployee.setEmploymentType(data.getEmploymentType());
        newEmployee.setStartDate(data.getStartDate());
        newEmployee.setEndDate(data.getEndDate());

        return this.repo.save(newEmployee);

    }

}
