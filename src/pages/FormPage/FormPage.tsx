import { NavLink, useNavigate } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { EmployeeFormData } from "../../components/EmployeeForm/schema";
import { createEmployee } from "../../services/employee-services";

const FormPage = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: EmployeeFormData) => {
    createEmployee(data)
      .then(() => navigate("/"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div> Form page</div>
      <NavLink to="/employeelist">
        <button>back</button>
      </NavLink>
      <EmployeeForm onSubmit={onSubmit} type="CREATE" />
    </>
  );
};

export default FormPage;
