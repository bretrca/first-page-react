import React from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies();
function Principal() {
/*   useEffect(()=>{
if(!cookie.get("username")){
  window.location.href="./"
}else{
  window.location.href="./principal"
}
  }) */
  function closeSession(){
    cookie.remove("id", {path:"/"})
    cookie.remove("username", {path:"/"})
    cookie.remove("surname", {path:"/"})
    cookie.remove("email", {path:"/"})

    sessionStorage.clear()
    window.location.href= "./";
  }
  return (
    <>
      aquí va un menú de mierda
      <div>
        <button onClick= {closeSession}>Cerrar sesión</button>
      </div>
    </>
  );
}

export default Principal;
