import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { useEffect, useState } from "react";
import styles from "./EmployeeList.module.scss";
import {
  EmployeeResponse,
  getEmployees,
} from "../../services/employee-services";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  return (
    <div className={styles.EmployeeList}>
      <div>
        <NavLink to="/addemployee">
          <button>Add new employee</button>
        </NavLink>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
