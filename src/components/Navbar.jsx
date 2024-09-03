import React from "react";
import Button from "./Button";
import { auth } from "../../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <img src="/logo.svg" alt="char fire logo" />
          </div>
          {user ? (
            <button className="button" onClick={logOut}>
              Logout
            </button>
          ) : (
            <Button text={"Login"} path={"/login"} />
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
