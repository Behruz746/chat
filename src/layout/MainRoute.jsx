import React, { useEffect } from "react";
import { Navbar } from "../components";
import { Outlet, useNavigate } from "react-router-dom";

function MainRoute({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainRoute;
