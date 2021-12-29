import { RefObject } from 'react';
import './formInput.css'



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
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ( props:FormInputProps ) => {
  return (
    <div className="formInput">
      <label >{props.input.label}</label>
      <input 
        // onChange={e => props.setUsername!(e.target.value)} 
        // ref={props.refer}
        id={props.input.id.toString()}
        name={props.input.name}
        type={props.input.type}
        placeholder={props.input.placeholder}
        onChange={props.onChange}
        />
    </div>
  )
}
