import React, {useState,useEffect ,Fragment} from "react";
import NavBar from "./components/navigation/NavBar";
import Login from "./components/Login/Login";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState (false); 

  useEffect(() => {
    const storedLoggendInfo = localStorage.getItem("isLoggedIn");
    if (+storedLoggendInfo === 1) {
      setIsLoggedIn(true);
    }
}, []);

  const loginHandler = (email, password) => {
    //console.log("login in...");
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    console.log("fs");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
     <div className="content">
      <NavBar onLogout={logoutHandler}/>
      {
        isLoggedIn? (
        <Fragment>
          YOU SUCCESSFULLY LOGGEND IN
         </Fragment>
        ): ( 
         <Login onLogin={loginHandler} /> 
        )}
     </div>
  );
}

export default App;
