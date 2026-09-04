import { useEffect, useState } from 'react';
import ChatHeader from '../components/chat-section/ChatHeader';
import MessageInput from '../components/chat-section/MessageInput';
import MessageList from '../components/chat-section/MessageList';
import Sidebar from '../components/chat-section/Sidebar';
import { io } from 'socket.io-client';

const ChatLayout = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const socket = io(import.meta.env.VITE_API_URL);

  useEffect(() => {
    socket.on('received-message', (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (text: string) => {
    socket.emit('send-message', text);
  };

  return (
    <div className='h-full flex overflow-hidden'>
      {/* Sidebar */}
      <aside className='w-80 border-r'>
        <Sidebar />
      </aside>

      {/* Chat Section */}
      <section className='flex-1 flex flex-col justify-between'>
        <header className='h-12 border-b'>
          <ChatHeader />
        </header>

        <div className='flex-1 overflow-y-auto'>
          <MessageList messages={messages} />
        </div>

        <footer className='border-t'>
          <MessageInput onSend={sendMessage} />
        </footer>
      </section>
    </div>
  );
};
export default ChatLayout;
