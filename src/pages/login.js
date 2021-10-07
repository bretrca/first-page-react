import React, {useState} from "react";
import "../css/login.scss";

function Login() {
  const [isRegistring, setIsRegistring] = useState(true);

  return (
   <div className="Container">
        <div className="Form-container">
      {isRegistring ? (
        <>
          <h2> Please log in</h2>
          <form className="Form-element" /*onSubmit={handleSubmit}*/>
            <label>User</label>
            <input
              type="text"
             /* onChange={(e) => setUsername(e.target.value)}*/
              placeholder="username or email"
            />
            <label>Password</label>
            <input
              type="password"
             /* onChange={(e) => setPassword(e.target.value)}*/
              placeholder="password"
            />
            <button type="submit" /*onSubmit={handleSubmit}*/>
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
