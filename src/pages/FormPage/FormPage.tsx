import { NavLink } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

const FormPage = () => {
  return (
    <>
      <div> Form page</div>
      <NavLink to="/employeelist">
        <button>back</button>
      </NavLink>
      <EmployeeForm />
    </>
  );
};

export default FormPage;
