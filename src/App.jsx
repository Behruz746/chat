import React from "react";
import AppRoute from "./routes/AppRoute";
import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import "./scss/app.scss";
import Loader from "./components/Loader";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return <AppRoute />;
}

export default App;
