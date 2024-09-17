package io.nology.employee.employee;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class CreateEmployeeDTO {
    @NotBlank
    @Length(min = 2, max = 50)
    private String firstName;

    @NotNull
    @Length(min = 2, max = 50)
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private String phone;

    @NotBlank
    private String address;

    @NotBlank
    private String suburb;

    @NotNull
    private StateCode state;

    @NotBlank
    @Pattern(regexp = "^[0-9]{4}$")
    private String postcode;

    @NotNull
    private String role;

    @NotNull
    private EmploymentType employmentType;

    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate startDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate endDate;
}
