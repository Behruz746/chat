import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ text, path }) {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(path);

  return (
    <button className="button" type="button" onClick={navigateHandler}>
      {text}
    </button>
  );
}

export default Button;
