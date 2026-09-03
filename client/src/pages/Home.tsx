import { Link } from 'react-router';

const Home = () => {
  return (
    <div className='h-full container mx-auto px-4 relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Link to='/signup'>
          <button className='border rounded-sm px-3 py-1 mr-1 cursor-pointer font-semibold'>
            Sign up
          </button>
        </Link>
        <Link to='/signin'>
          <button className='border rounded-sm px-3 py-1 cursor-pointer font-semibold'>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
