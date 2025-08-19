import { useState } from "react";
import styles from "./App.module.css";
import { Chat } from "./components/chat/chat";
import {Control} from "./components/controls/Control";

function App() {
  
  // State to hold messages
  const[messages, setMessages] =  useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="../chat-bot.png" alt="Chatbot-logo" />
        <h1 className={styles.Title}>AI Chatbot</h1>
      </header>

      {/*chat container */}
      <div className={styles.ChatContainer}>
      <Chat messages={messages} />
      </div>
      <Control />
    </div>
  );
}

const MESSAGES =[
  {
    role:"user",
    content:"Hello, how are you?"
  },
  {
    role:"assistant",
    content:"I am fine, thank you!"
  },
  {
    role:"user",
    content:"What is the weather like today?"
  },
  {
    role:"assistant",
    content:"The weather is sunny with a high of 25°C."
  },
  {
    role:"user",
    content:"Can you tell me a joke?"
  },
  {
    role:"assistant",
    content:"Sure! Why did the scarecrow win an award? Because he was outstanding in his field!"
  },
  {
    role:"user",
    content:"Can you tell me a joke?"
  },
  {
    role:"assistant",
    content:"Sure! Why did the scarecrow win an award? Because he was outstanding in his field!"
  },
  {
    role:"user",
    content:"Can you tell me a joke?"
  },
  {
    role:"assistant",
    content:"Sure! Why did the scarecrow win an award? Because he was outstanding in his field!"
  },
  {
    role:"user",
    content:"Can you tell me a joke?"
  },
  {
    role:"assistant",
    content:"Sure! Why did the scarecrow win an award? Because he was outstanding in his field!"
  }
]


export default App;
