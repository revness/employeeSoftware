import { useForm } from "react-hook-form";
import { EmployeeFormData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
type FormType = "CREATE" | "EDIT";
interface EmployeeFormProps {
  onSubmit: (data: EmployeeFormData) => unknown;
  defaultValues?: EmployeeFormData;
  type: FormType;
}

const EmployeeForm = ({ onSubmit, defaultValues, type }: EmployeeFormProps) => {
  const {
    reset,
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="First Name"
          id="firstName"
          type="text"
          {...register("firstName")}
        />
        {errors?.firstName && <small> {errors.firstName.message}</small>}
      </div>
      <div>
        <input
          placeholder="Last Name"
          id="lastName"
          type="text"
          {...register("lastName")}
        />
        {errors?.lastName && <small> {errors.lastName.message}</small>}
      </div>
      <div>
        <input
          placeholder="Email"
          id="email"
          type="text"
          {...register("email")}
        />
        {errors?.email && <small> {errors.email.message}</small>}
      </div>
      <div>
        <input
          placeholder="Mobile"
          id="phone"
          type="text"
          {...register("phone")}
        />
        {errors?.phone && <small> {errors.phone.message}</small>}
      </div>
      <div>
        <input
          placeholder="Address"
          id="address"
          type="text"
          {...register("address")}
        />
        {errors?.address && <small> {errors.address.message}</small>}
      </div>
      <div>
        <input
          placeholder="Suburb"
          id="suburb"
          type="text"
          {...register("suburb")}
        />
        {errors?.suburb && <small> {errors.suburb.message}</small>}
      </div>
      <div>
        <input
          placeholder="State"
          id="state"
          type="text"
          {...register("state")}
        />
        {errors?.state && <small> {errors.state.message}</small>}
      </div>
      <div>
        <input
          placeholder="Postcode"
          id="postcode"
          type="text"
          {...register("postcode")}
        />
        {errors?.postcode && <small> {errors.postcode.message}</small>}
      </div>
      <div>
        <input placeholder="Role" id="role" type="text" {...register("role")} />
        {errors?.role && <small> {errors.role.message}</small>}
      </div>
      <div>
        <input
          placeholder="Employment Type"
          id="employmentType"
          type="text"
          {...register("employmentType")}
        />
        {errors?.employmentType && (
          <small> {errors.employmentType.message}</small>
        )}
      </div>
      <div>
        <input
          placeholder="Start date"
          id="startDate"
          type="text"
          {...register("startDate")}
        />
        {errors?.startDate && <small> {errors.startDate.message}</small>}
      </div>
      <div>
        <input
          placeholder="End date"
          id="endDate"
          type="text"
          {...register("endDate")}
        />
        {errors?.endDate && <small> {errors.endDate.message}</small>}
      </div>
      <button type="submit">
        {type == "EDIT" ? "Edit" : "Create"} Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
