import { NavLink, useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { EmployeeFormData } from "../../components/EmployeeForm/schema";
import {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
} from "../../services/employee-services";
import styles from "./FormPage.module.scss";
import { useQuery, useMutation } from "react-query";
export type FormType = "CREATE" | "EDIT";

interface FormPageProps {
  type: FormType;
}

const FormPage = ({ type }: FormPageProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const numId = id ? parseInt(id) : undefined;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["employees", numId],
    queryFn: () => (numId ? getEmployeeById(numId) : undefined),
    enabled: type === "EDIT" && !!numId,
  });

  const mutation = useMutation({
    mutationFn: (formData: EmployeeFormData) => {
      if (type === "CREATE") {
        return createEmployee(formData);
      } else if (type === "EDIT" && numId) {
        return updateEmployeeById(numId, formData);
      }
      throw new Error("Invalid operation");
    },
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      // Consider showing an error message to the user
    },
  });

  const onSubmit = (formData: EmployeeFormData) => {
    mutation.mutate(formData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className={styles.formPage}>
      <NavLink to="/employeelist">
        <button>back</button>
      </NavLink>
      <EmployeeForm
        onSubmit={onSubmit}
        type={type}
        defaultValues={type === "EDIT" ? data : undefined}
      />
    </div>
  );
};

export default FormPage;
