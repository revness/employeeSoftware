import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { useEffect, useState } from "react";
import styles from "./EmployeeList.module.scss";
import {
  deleteEmployeeById,
  EmployeeResponse,
  getEmployees,
} from "../../services/employee-services";
import { NavLink, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const navigate = useNavigate();
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

  const onDelete = async (id: number) => {
    const isDeleted = await deleteEmployeeById(id).catch((e) => {
      console.log(e);
      return false;
    });
    if (isDeleted) {
      const updatedEmployees = employees.filter(
        (employee) => employee.id !== id
      );
      setEmployees(updatedEmployees);
    }
  };
  const onUpdate = async (id: number) => {
    navigate(`/employee/${id}/edit`);
  };
  return (
    <div className={styles.EmployeeList}>
      <div>
        <NavLink to="/addemployee">
          <button>Add new employee</button>
        </NavLink>
      </div>
      <ul className="">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            onDelete={onDelete}
            onUpdate={onUpdate}
            employee={employee}
          />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
