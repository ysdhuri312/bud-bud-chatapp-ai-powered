import type React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { apiClient } from '../services/api.service';
import axios from 'axios';

const Signin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await apiClient.post('auth/login', form);

      navigate('/chats');

      setForm({ email: '', password: '' });
      setError('');
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message ?? 'Login failed');
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center gap-6'>
        <h3 className='text-3xl mt-15'>Sign In</h3>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Enter the email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className='border rounded-sm pr-20 pl-2 py-1'
            required
          />

          <input
            type='password'
            placeholder='Enter the password'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className='border rounded-sm pr-20 pl-2 py-1'
            required
          />

          <button
            type='submit'
            className='border rounded-sm py-3 cursor-pointer'
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>

          {error && <p className='text-red-500'>{error}</p>}

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
