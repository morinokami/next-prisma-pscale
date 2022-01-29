import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  placeholder: string;
  registerReturn: UseFormRegisterReturn;
}

const Input = (props: InputProps) => {
  return (
    <input
      className="rounded p-4 text-xl w-full"
      placeholder={props.placeholder}
      {...props.registerReturn}
    />
  );
};

export default Input;
