package io.nology.employee.employee;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.Pattern;

public class UpdateEmployeeDTO {
    @Length(min = 2, max = 50)
    private String firstName;

    @Length(min = 2, max = 50)
    private String lastName;

    private String email;

    private String phone;

    private String address;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public String getSuburb() {
        return suburb;
    }

    public StateCode getState() {
        return state;
    }

    public String getPostcode() {
        return postcode;
    }

    public String getRole() {
        return role;
    }

    public EmploymentType getEmploymentType() {
        return employmentType;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    private String suburb;

    private StateCode state;

    @Pattern(regexp = "^[0-9]{4}$")
    private String postcode;

    private String role;

    private EmploymentType employmentType;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate startDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate endDate;
}
