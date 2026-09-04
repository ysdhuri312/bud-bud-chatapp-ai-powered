import ChatHeader from '../components/chat-section/ChatHeader';
import MessageInput from '../components/chat-section/MessageInput';
import MessageList from '../components/chat-section/MessageList';
import Sidebar from '../components/chat-section/Sidebar';

const ChatLayout = () => {
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
          <MessageList />
        </div>

        <footer className='border-t'>
          <MessageInput />
        </footer>
      </section>
    </div>
  );
};
export default ChatLayout;
