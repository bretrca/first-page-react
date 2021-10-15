import React, { useEffect, useState } from "react";
import "../css/login.scss";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";
import Register from "./Register";

const baseUrl = "http://localhost:3001/users";
const cookies = new Cookies();

function Login() {
  const [isRegistring, setIsRegistring] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    iniciarSesion();
  }

  async function iniciarSesion() {
    await axios
      .get(baseUrl, {
        params: { username: username, password: md5(password) },
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((res) => {
        // console.log(res);
        if (res.length > 0) {
          let respuesta = res[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("username", respuesta.username, { path: "/" });
          cookies.set("surname", respuesta.surname, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          cookies.set("id", respuesta.id, { path: "/" });
          window.location.href = "./principal";
        } else {
          console.log("user not correct");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function stay() {
    if (cookies.get("username")) {
      window.location.href = "/principal";
    }
  }
  useEffect(() => {
    stay();
  });

  return (
    <div className="Container">
      <div className="Form-container">
        {isRegistring ? (
          <>
            <h2> Please log in</h2>
            <form className="Form-element" onSubmit={handleSubmit}>
              <label>User</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username or email"
              />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <button className="Button-sumbit" type="submit">
                Signin
              </button>
            </form>
            <div className="register-element">
              <p>
                Do yo want to join us ? <a href="/register">Signup</a>
              </p>
            </div>
          </>
        ) : (
          <>
            {setIsRegistring(true)}
            <h2> or register</h2>
            <Register />
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
