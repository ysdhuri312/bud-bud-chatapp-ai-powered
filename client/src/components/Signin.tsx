import { Link } from 'react-router';

const Signin = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center gap-6'>
        <h3 className='text-3xl mt-15'>Sign In</h3>
        <form className='flex flex-col gap-3'>
          <input
            type='email'
            placeholder='Enter the email'
            className='border rounded-sm pr-20 pl-2 py-1'
          />
          <input
            type='password'
            placeholder='Enter the password'
            className='border rounded-sm pr-20 pl-2 py-1'
          />
          <button
            type='submit'
            className='border rounded-sm py-3 cursor-pointer'
          >
            Submit
          </button>
          <div>
            <div className='cursor-pointer'>Forgotten password?</div>
            <div className='mt-0'>
              Don&apos;t have an account?{' '}
              <Link to='/signup' className='underline cursor-pointer'>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
