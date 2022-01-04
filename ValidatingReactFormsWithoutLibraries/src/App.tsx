import { FormInput } from "./components/FormInput";
import "./app.css";
import { useRef, useState } from "react";

type FormValues = {
  username: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
};

function App() {

  /* FORMA UNO usando useState+onChange.Si bien hace re-renderizarse al componente en cada change no es importante en un componente asi de sencillo*/
  const [values, setValues] = useState<FormValues>({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
const inputs = [
  {
    id: 1,
    name: "username",
    label: "username",
    type: "text",
    errorMessage: "Username should be 3-16 characters and shouldn't contain special characters",
    placeholder: "Enter your username",
    pattern: "^[a-zA-Z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    label: "email",
    type: "email",
    errorMessage: "Email should be a valid email address",
    placeholder: "Enter your email",
    required:true,
  },
  {
    id: 3,
    name: "birthday",
    label: "birthday",
    type: "date",
    placeholder: "Enter your birthday",
  },
  {
    id: 4,
    name: "password",
    label: "password",
    type: "text",
    errorMessage: "Password should be 8-20 characters long and include at least one number,one letter and one special character",
    placeholder: "Enter your password",
    pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    required: true,
  },
  {
    id: 5,
    name: "confirmPassword",
    label: "confirmPassword",
    type: "text",
    errorMessage:"Passwords don't match",
    placeholder: "Enter your password again",
    pattern:values.password,
    required: true,
  },
];

  /*FORMA DOS otra opcion sería usar una referencia,ya que no hace volver a pintarse al componente. */
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* FORMA TRES tomar el Form mediante Javascript. */
    /* const data = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(data.entries())); */

    console.log(values);
    
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values!, [name]: value });
  };


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            input={input}
            //@ts-ignore
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        {/* forma con un state por cada control */}
        {/* <FormInput 
             placeholder="Username" 
             setUsername={setUsername} 
             refer={usernameRef}
          /> */}
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
