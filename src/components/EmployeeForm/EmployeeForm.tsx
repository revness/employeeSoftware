import { useForm } from "react-hook-form";

const EmployeeForm = () => {
  const {} = useForm;
  return (
    <form>
      <div>
        <input
          placeholder="First Name"
          id="firstName"
          type="text"
          //   {...register("firstName")}
        />
      </div>
    </form>
  );
};

export default EmployeeForm;
