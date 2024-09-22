import styles from "./EmployeeCard.module.scss";
import person from "../../assets/person.png";

const EmployeeCard = () => {
  return (
    <div className={styles.EmployeeCard}>
      <img className={styles.EmployeeCard__img} src={person} />
      <div>
        <span>Chappo T</span> <br />
        <span>Mobile: 0412 345 678</span> <br />
        <span>1 street street, suburbia, NSW, 2000</span>
      </div>
    </div>
  );
};

export default EmployeeCard;
