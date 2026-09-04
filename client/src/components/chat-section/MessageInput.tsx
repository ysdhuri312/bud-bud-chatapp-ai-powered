import type React from 'react';
import { useState } from 'react';
import { FaLink } from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';

type Props = {
  onSend: (message: string) => void;
};

const MessageInput = ({ onSend }: Props) => {
  const [text, setText] = useState('');

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!text.trim()) return;

    onSend(text);
    setText('');
  }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <button className='border border-gray-400 p-2 m-2 rounded-sm cursor-pointer'>
        <FaLink />
      </button>
      <input
        value={text}
        className='w-full border border-gray-400 my-2 pl-2 rounded-sm '
        placeholder='Message'
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type='submit'
        className='bg-blue-500 border border-gray-400 p-2 m-2 rounded-sm cursor-pointer'
      >
        <IoIosSend />
      </button>
    </form>
  );
};
export default MessageInput;
