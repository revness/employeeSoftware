import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <NavLink to="/">HealthPlace</NavLink>
      <NavLink to="/employeelist">EmployeeList</NavLink>
    </div>
  );
};

export default NavBar;
