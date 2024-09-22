import { NavLink } from "react-router-dom";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import styles from "./EmployeeList.module.scss";

const EmployeeList = () => {
  return (
    <div className={styles.EmployeeList}>
      <div>
        <NavLink to="/addemployee">
          <button>Add new employee</button>
        </NavLink>
      </div>
      <EmployeeCard />
    </div>
  );
};

export default EmployeeList;
