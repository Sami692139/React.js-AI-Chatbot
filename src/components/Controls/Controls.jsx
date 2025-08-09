import React, { useState } from "react";
import styles from "./Controls.module.css";

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="#3188f1"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8.25v-2.5l15.5 6.25-15.5 6.25v-2.5l10-3.75z" />
    </svg>
  );
}

const Controls = ({ onSend }) => {
  const [content, setContent] = useState("");
  function handleContentchange(event) {
    setContent(event.target.value);
  }

  function handleContentSend(){
    if (content.length >0){
        onSend(content)
        setContent("") // Clear the input after sending
    }
  }

  function handleEnterPress(event){
    if(event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents the default newline behavior
      handleContentSend();
    }   
  }

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          className={styles.TextArea}
          placeholder="Message Ai Chatbot"
          value={content}
          onChange={handleContentchange}
          onKeyDown={handleEnterPress}
        />
      </div>
      <button className={styles.Button} onClick={handleContentSend}>
        <SendIcon />
      </button>
    </div>
  );
};

export default Controls;
