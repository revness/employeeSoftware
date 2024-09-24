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
  state: string;
  role: string;
  postcode: string;
  employmentType: string;
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
