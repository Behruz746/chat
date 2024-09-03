import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

function Login() {
  const handleGoogle = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="section login__section">
        <div className="container">
          <div className="login__box">
            <h1 className="login__text">Access to chat fire through google</h1>
            <button
              type="button"
              className="login__logo"
              onClick={handleGoogle}
            >
              <img src="/Google__G__logo.svg" alt="google logo" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
