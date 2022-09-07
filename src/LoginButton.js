import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log("FROM LOGIN COMP");
  console.log(useAuth0());

  return (
    !isAuthenticated && (
      <button className="btn btn-danger" onClick={loginWithRedirect}>
        Log in
      </button>
    )
  );
}

export default LoginButton;
