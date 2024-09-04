import React, { useState } from "react";
import Message from "./Message";
import { auth, firestore } from "../../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, addDoc } from "firebase/firestore"; // to'g'ri importlar
import Loader from "./Loader";

function Chat() {
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const messagesQuery = query(
    collection(firestore, "messages"),
    orderBy("createdAt")
  );

  const [messages, loading] = useCollectionData(messagesQuery, {
    idField: "id",
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    setValue("");

    if (value) {
      try {
        await addDoc(collection(firestore, "messages"), {
          uid: user.uid, // user id
          displayName: user.displayName, // user name
          photoURL: user.photoURL, // user photo
          text: value, // user text
          createdAt: new Date(), // user create text date time
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="section chat__section">
        <div className="container">
          <div className="chat__box">
            <div className="scroll">
              <div className="chat__msg">
                {messages.length <= 0 ? (
                  <h1 className="error__text">No Messages</h1>
                ) : (
                  <>
                    {messages?.map((message, idx) => (
                      <Message
                        key={idx}
                        img={message.photoURL}
                        name={message.displayName}
                        text={message.text}
                        position={user.uid === message.uid ? "right" : "left"}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>

            <form className="chat__form">
              <input
                type="text"
                placeholder="Write a message..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                type="submit" // submit turi bo'lishi kerak
                className="chat__submit"
                onClick={sendMessage}
              >
                <img
                  width={32}
                  height={32}
                  src="/send.svg"
                  alt="send icon"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chat;
