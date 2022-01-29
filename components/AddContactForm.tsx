import { SubmitHandler, useForm } from "react-hook-form";

import Input from "./Input";
import InputSpacer from "./InputSpacer";
import { Contact } from "../types";

const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: SubmitHandler<Contact>;
}

const AddContactForm = (props: AddContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="First Name"
          registerReturn={register("firstName", { required: true })}
        />
        {errors.firstName && (
          <FormError errorMessage="First Name is required" />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Last Name"
          registerReturn={register("lastName", { required: true })}
        />
        {errors.lastName && <FormError errorMessage="Last Name is required" />}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Email"
          registerReturn={register("email", { required: true })}
        />
        {errors.email && <FormError errorMessage="Email is required" />}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Avatar"
          registerReturn={register("avatar", { required: true })}
        />
        {errors.avatar && <FormError errorMessage="Avatar is required" />}
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddContactForm;
