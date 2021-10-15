import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import formReducer from "../reducers/formReducer";

function Register(toggleRegister) {
  const initialFormState = {
    name: "",
    surname: "",
    email: "",
    password1: "",
    password2: "",
    id: uuidv4(),
    hasConsented: false,
  };

  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  //const {register,handleSubmit} = useForm();
  function handleTextChange(e) {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  }
  return (
    <div className="Container">
      <div className="Form-container">
      <button className="Close-button" >
        <a href ="/">X</a>
      </button>
      <form className="Form-element">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleTextChange}
        ></input>
        <label>Surname:</label>
        <input
          type="text"
          name="surname"
          value={formState.surname}
          onChange={handleTextChange}
        ></input>
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleTextChange}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          name="password1"
          value={formState.password1}
          onChange={handleTextChange}
        ></input>
        <label>Repeat the Password:</label>
        <input
          type="password"
          name="password2"
          value={formState.password2}
          onChange={handleTextChange}
        ></input>
        <label>Consent the terms and conditions of the platform:</label>
        <input
          type="checkbox"
          name="consent"
          value={formState.hasConsented}
          onChange={() => dispatch({ type: "TOGGLE CONSENT" })}
        ></input>

        <button className="Button-submit" type="submit">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default Register;
