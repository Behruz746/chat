import React from "react";

function Message({ img, name, text, position = "right" }) {
  return (
    <>
      <div className={`message__box ${position === "right" ? "right" : ""}`}>
        <div className="message__user">
          <div className="message__avatar">
            <img width={55} height={55} src={img} alt="user avatar" />
          </div>
          <h1 className="user__name">{name}</h1>
        </div>
        <div className="message__data">
          <div className="triangle"></div>
          <h1 className="message__text">{text}</h1>
        </div>
      </div>
    </>
  );
}

export default Message;
