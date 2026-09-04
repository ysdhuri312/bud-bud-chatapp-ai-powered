import { FaLink } from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';

const MessageInput = () => {
  return (
    <div className='flex'>
      <button className='border border-gray-400 p-2 m-2 rounded-sm cursor-pointer'>
        <FaLink />
      </button>
      <input
        className='w-full border border-gray-400 my-2 pl-2 rounded-sm '
        placeholder='Message'
      />
      <button className='bg-blue-500 border border-gray-400 p-2 m-2 rounded-sm cursor-pointer'>
        <IoIosSend />
      </button>
    </div>
  );
};
export default MessageInput;
