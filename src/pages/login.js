import React, { useState } from "react";
import "../css/login.scss";
import axios from "axios";
import md5 from "md5";

const baseUrl = "http://localhost:3001/users";

function Login() {
  const [isRegistring, setIsRegistring] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const token = await setLogin({
      username,
      password,
    });
    /* if (userExist) {
      setToken(token);
    } */
  }

  async function iniciarSesion() {
    await axios
      .get(baseUrl, {
        params: { username: login.username, password: md5(login.password) },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
              <button type="submit" onSubmit={iniciarSesion}>
                Enter
              </button>
            </form>
            <div className="register-element">
              <p /*onClick={toggleRegister}*/>
                {" "}
                Do yo want to join us ? <a href="/register">Register</a>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2> or register</h2>
            {/*  <Register toggleRegister={toggleRegister} />*/}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
