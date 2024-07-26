import styles from './Message.module.css';

const Message = ({ message, type = 'success' }) => {
  return (
    <p className={`${styles.message} ${styles[type]}`}>
      <span role='img'>👋</span>
      {message}
    </p>
  );
};

export default Message;
