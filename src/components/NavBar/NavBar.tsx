import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      NavBar
      <NavLink to="/">HealthPlace</NavLink>
    </div>
  );
};

export default NavBar;
