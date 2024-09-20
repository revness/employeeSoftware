package io.nology.employee.employee;

import java.util.List;
import java.util.Optional;

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

    public List<Employee> findAll() {
        List<Employee> allEmployees = this.repo.findAll();
        return allEmployees;
    }

    public Optional<Employee> findById(Long id) {
        return this.repo.findById(id);
    }

    public Optional<Employee> updateEmployeeById(Long id, @Valid UpdateEmployeeDTO data) {
        Optional<Employee> result = this.findById(id);
        if (result.isEmpty()) {
            return result;
        }
        Employee foundEmployee = result.get();
        if (data.getFirstName() != null) {
            foundEmployee.setFirstName(data.getFirstName());
        }
        if (data.getLastName() != null) {
            foundEmployee.setLastName(data.getLastName());
        }
        if (data.getEmail() != null) {
            foundEmployee.setEmail(data.getEmail());
        }
        if (data.getPhone() != null) {
            foundEmployee.setPhone(data.getPhone());
        }
        if (data.getAddress() != null) {
            foundEmployee.setAddress(data.getAddress());
        }
        if (data.getSuburb() != null) {
            foundEmployee.setSuburb(data.getSuburb());
        }
        if (data.getState() != null) {
            foundEmployee.setState(data.getState());
        }
        if (data.getPostcode() != null) {
            foundEmployee.setPostcode(data.getPostcode());
        }
        if (data.getRole() != null) {
            foundEmployee.setRole(data.getRole());
        }
        if (data.getEmploymentType() != null) {
            foundEmployee.setEmploymentType(data.getEmploymentType());
        }
        if (data.getStartDate() != null) {
            foundEmployee.setStartDate(data.getStartDate());
        }
        if (data.getEndDate() != null) {
            foundEmployee.setEndDate(data.getEndDate());
        }
        Employee updatedEmployee = this.repo.save(foundEmployee);
        return Optional.of(updatedEmployee);
    }

    public Boolean deleteById(Long id) {
        Optional<Employee> result = this.findById(id);
        if (result.isEmpty()) {
            return false;
        }
        this.repo.deleteById(id);
        return true;
    }
}
