import styles from "./EmployeeCard.module.scss";
import person from "../../assets/person.png";
import { EmployeeResponse } from "../../services/employee-services";
import { Trash, Pencil } from "@phosphor-icons/react";

interface EmployeeProps {
  employee: EmployeeResponse;
  onDelete: (id: number) => Promise<unknown>;
  onUpdate: (id: number) => Promise<unknown>;
}

const EmployeeCard = ({ employee, onDelete, onUpdate }: EmployeeProps) => {
  return (
    <div className={styles.EmployeeCard}>
      <img className={styles.EmployeeCard__img} src={person} />
      <div>
        <span>
          {employee.firstName} {employee.lastName}
        </span>{" "}
        <br />
        <span>{employee.employmentType}</span> <br />
        <span>{employee.role}</span>
        <br />
        <span>{employee.email}</span>
        <br />
        <span>Mobile: {employee.phone}</span> <br />
        <span>
          {employee.address} {employee.suburb} {employee.state}{" "}
          {employee.postcode}
        </span>
        <br />
        <span>
          {employee.startDate}
          {employee.endDate == null ? " - Current" : "- " + employee.endDate}
        </span>
      </div>
      <div className={styles.EmployeeCard__trash}>
        <button onClick={() => onDelete(employee.id)}>
          <Trash size={32} />
        </button>
        <button onClick={() => onUpdate(employee.id)}>
          <Pencil size={32} />
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
