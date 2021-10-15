import React, { useEffect } from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies();
function Principal() {

  function closeSession() {
    cookie.remove(`id`, { path: "/" });
    cookie.remove('username', { path: "/" });
    cookie.remove('surname', { path: "/" });
    cookie.remove('email', { path: "/" });
    localStorage.clear();
    window.location.href = "./";
  }
  function stay(){
    if(!cookie.get("username")){
    return window.location.href="/"
    }
  }
  useEffect(() => {
  stay()
  }); 

  return (
    <>
      aquí va un menú de mierda
      <div>
        <button onClick={closeSession}>Cerrar sesión</button>
      </div>
    </>
  );
}

export default Principal;
