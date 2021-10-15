import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import formReducer from "../reducers/formReducer";
import axios from "axios";
import md5 from "md5";

const baseUrl = "http://localhost:3001/users";

function Register(toggleRegister) {
  const initialFormState = {
    username: "",
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
  function handleSubmitRegister(e) {
    e.preventDefault();
    createUser();
  }

  async function createUser() {
    await axios
      .post(baseUrl, {
        username: formState.username,
        surname: formState.surname,
        password: md5(formState.password1),
        password2: md5(formState.password2),
        id: formState.id,
        hasConsented: formState.hasConsented,
      })
      .then((res) => {
        console.log(res);
        window.location.href= "/"
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Container">
      <div className="Form-container">
        <form className="Form-element" onSubmit={handleSubmitRegister}>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleTextChange}
            placeholder="Name"
          ></input>
          <input
            type="text"
            name="surname"
            value={formState.surname}
            onChange={handleTextChange}
            placeholder="Surname"
          ></input>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleTextChange}
            placeholder="email"
          ></input>
          <input
            type="password"
            name="password1"
            value={formState.password1}
            onChange={handleTextChange}
            placeholder="password"
          ></input>
          <input
            type="password"
            name="password2"
            value={formState.password2}
            onChange={handleTextChange}
            placeholder="Confirm your password"
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
          <button className="Close-button">
            <a href="/">Cancel</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
