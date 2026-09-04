type Props = {
  messages: string[];
};

const MessageList = ({ messages }: Props) => {
  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};
export default MessageList;
