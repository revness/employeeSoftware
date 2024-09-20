package io.nology.employee.employee;

import java.util.List;
import java.util.Optional;
import io.nology.employee.common.exceptions.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data) {
        Employee createdEmployee = this.employeeService.createEmployee(data);
        return new ResponseEntity<Employee>(createdEmployee, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Employee>> findAllEmployees() {
        List<Employee> employees = this.employeeService.findAll();
        return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> findEmployeeById(@PathVariable Long id) throws NotFoundException {
        Optional<Employee> result = this.employeeService.findById(id);
        Employee foundEmployee = result.orElseThrow(() -> new NotFoundException("Couldnt find Employee with id " + id));
        return new ResponseEntity<Employee>(foundEmployee, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id,
            @Valid @RequestBody UpdateEmployeeDTO data) throws Exception {
        Optional<Employee> result = this.employeeService.updateEmployeeById(id, data);
        Employee foundEmployee = result
                .orElseThrow(() -> new NotFoundException("Could not find employee with id " + id));
        return new ResponseEntity<Employee>(foundEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployeeById(@PathVariable Long id) throws NotFoundException {
        Boolean deleteSuccessful = this.employeeService.deleteById(id);
        if (deleteSuccessful == false) {
            throw new NotFoundException("Could not find employee item with id " + id);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
