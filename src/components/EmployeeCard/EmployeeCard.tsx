import styles from "./EmployeeCard.module.scss";
import person from "../../assets/person.png";
import { EmployeeResponse } from "../../services/employee-services";

interface EmployeeProps {
  employee: EmployeeResponse;
}

const EmployeeCard = ({ employee }: EmployeeProps) => {
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
        </span>{" "}
        <br />
        <span>
          {employee.startDate}
          {employee.endDate == null ? " - Current" : "- " + employee.endDate}
        </span>
      </div>
    </div>
  );
};

export default EmployeeCard;
