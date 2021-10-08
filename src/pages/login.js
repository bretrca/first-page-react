import React, { useState } from "react";
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
        console.log(res);
        if (res.length > 0) {
            let respuesta = res[0];
            cookies.set("id", respuesta.id, { path: "/" });
            cookies.set("username", respuesta.username, { path: "/" });
            cookies.set("surname", respuesta.surname, { path: "/" });
            cookies.set("email", respuesta.email, { path: "/" });
            cookies.set("id", respuesta.id, { path: "/" });
            alert(`Welcome ${respuesta.username}`);
            window.location.href = "./principal";
        } else {
            console.log("user not correct");
        }
    })
    .catch((error) => {
        console.log(error);
    });
}
function toggleRegister(){
    setIsRegistring(false);//en un click hay que hacer un cambio de pantalla a la de login
}

return (
    <div className="Container">
      <div className="Form-container">
        {isRegistring ? (
          <>
            <h2> Please log in</h2>
            <form className="Form-element">
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
              <button type="submit" onSubmit={handleSubmit}>
                Enter
              </button>
            </form>
            <div className="register-element">
              <p onClick={toggleRegister}>
            
                Do yo want to join us ? <a href="/register">Register</a>
              </p>
            </div>
          </>
        ) : (
          <>
            {setIsRegistring(false)}
            <h2> or register</h2>
            {(window.location.href = "./register")}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
