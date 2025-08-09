import styles from './chat.module.css'


const WELCOME_MESSAGE={
    role: 'assistant',
    content: 'Hello! I am your AI Chatbot. How can I assist you today?',
}
export  function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages]?.map(({role, content}, index) => (
        console.log(messages),
        <div key={index} className={styles.Message} data-role={role}>{content}</div>
      ))}
    </div>
  );
}
