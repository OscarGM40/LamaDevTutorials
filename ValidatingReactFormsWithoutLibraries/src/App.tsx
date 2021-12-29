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

const inputs = [
  {
    id: 1,
    name: "username",
    label: "username",
    type: "text",
    placeholder: "Enter your username",
  },
  {
    id: 2,
    name: "email",
    label: "email",
    type: "text",
    placeholder: "Enter your email",
  },
  {
    id: 3,
    name: "birthday",
    label: "birthday",
    type: "text",
    placeholder: "Enter your birthday",
  },
  {
    id: 4,
    name: "password",
    label: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    id: 5,
    name: "confirmPassword",
    label: "confirmPassword",
    type: "password",
    placeholder: "Enter your password again",
  },
];

function App() {

  /* FORMA UNO usando useState+onChange.Si bien hace re-renderizarse al componente en cada change no es importante en un componente asi de sencillo*/
  const [values, setValues] = useState<FormValues>({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  /*FORMA DOS otra opcion sería usar una referencia,ya que no hace volver a pintarse al componente. */
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* FORMA TRES tomar el Form mediante Javascript. */
    /* const data = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(data.entries())); */
    
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values!, [name]: value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
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
