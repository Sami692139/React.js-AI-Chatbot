import { useState } from "react";
import {Assistant} from "./assistants/googleai.js";
import { Chat } from "./components/Chat/Chat.jsx";
import Controls from "./components/Controls/Controls.jsx";
import { GoogleGenerativeAI } from "@google/generative-ai";

import styles from "./App.module.css";




function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
   addMessage ({ role: "user", content });

    try {
     const result = await assistant.chat(content);
       addMessage({ role: "assistant", content:result });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addMessage({ role: "system", content: "An error occurred while sending the message." });
    }
  }

  return (
    <>
      <div className={styles.App}>
        <header className={styles.header}>
          <img className={styles.Logo} src="/chatbot.png" alt="Logo" />
          <h1 className={styles.Title}>AI Chatbot</h1>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} />
        </div>
        <Controls onSend={handleContentSend} />
      </div>
    </>
  );
}

export default App;
