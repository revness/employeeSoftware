import axios from "axios";
import { EmployeeFormData } from "../components/EmployeeForm/schema";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export interface EmployeeResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  state: "NSW" | "VIC" | "ACT" | "QLD" | "NT" | "WA" | "TAS" | "SA";
  role: string;
  postcode: string;
  employmentType: "FULL_TIME" | "CONTRACTOR" | "PART_TIME" | "PROBATION";
  startDate: string;
  endDate: string;
}

export const getEmployees = async () => {
  const response = await fetch(baseURL + "/employees");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const employees = (await response.json()) as EmployeeResponse[];
  console.log(employees, "employees");

  return employees;
};
export const createEmployee = async (data: EmployeeFormData) => {
  const response = await fetch(baseURL + "/employees", {
    method: "POST",
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      suburb: data.suburb,
      state: data.state,
      role: data.role,
      postcode: data.postcode,
      employmentType: data.employmentType,
      startDate: data.startDate,
      endDate: data.endDate,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to post");
  }
  return (await response.json()) as EmployeeResponse;
};

export const deleteEmployeeById = async (id: number) => {
  const response = await fetch(baseURL + `/employees/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete");
  }
  return true;
};

export const getEmployeeById = async (id: number) => {
  const response = await axios.get<EmployeeResponse>(
    baseURL + `/employees/${id}`
  );
  if (response.status !== 200) {
    throw new Error(`failed to find employee with id ${id}`);
  }
  return response.data;
};

export const updateEmployeeById = async (
  id: number,
  data: EmployeeFormData
) => {
  const response = await axios.patch<EmployeeResponse>(
    baseURL + `/employees/${id}`,
    data
  );
  if (response.status !== 200) {
    throw new Error(`failed to update employee with id ${id}`);
  }
  return response.data;
};
