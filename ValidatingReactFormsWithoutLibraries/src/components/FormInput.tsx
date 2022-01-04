import { RefObject, useState } from "react";
import "./formInput.css";

type FormInputProps = {
  placeholder?: string;
  setUsername?: (username: string) => void;
  refer?: RefObject<HTMLInputElement>;
  name?: string;
  value?: any;
  input: {
    id: number;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    pattern?: string;
    required?: boolean;
    errorMessage?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = (props: FormInputProps) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleLast = () => {
    props.input.name === "confirmPassword" && setFocused(true);
  };

  return (
    <div className="formInput">
      <label>
        {props.input.label.charAt(0).toUpperCase() + props.input.label.slice(1)}
      </label>
      <input
        // onChange={e => props.setUsername!(e.target.value)}
        // ref={props.refer}
        id={props.input.id.toString()}
        name={props.input.name}
        type={props.input.type}
        placeholder={props.input.placeholder}
        onChange={props.onChange}
        required={props.input.required}
        pattern={props.input.pattern}
        onBlur={handleFocus}
        onFocus={handleLast}
        data-focused={focused.toString()}
      />
      <span>{props.input.errorMessage}</span>
    </div>
  );
};
