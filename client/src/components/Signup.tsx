import { Link, useLocation, useNavigate } from 'react-router';
import { apiClient } from '../services/api.service';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await apiClient.post('auth/register', form);

      navigate('/signin', {
        state: {
          message: 'Account created successfully. Please sign in.',
        },
      });

      setForm({ name: '', email: '', password: '' });
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
        <h3 className='text-3xl mt-15'>Sign Up</h3>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter the fullname'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className='border rounded-sm pr-20 pl-2 py-1'
            required
          />
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
            minLength={8}
          />
          <button
            type='submit'
            className='border rounded-sm py-3 cursor-pointer'
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>

          {error && <p className='text-red-500'>{error}</p>}
          {location.state?.message && (
            <p className='mb-4 text-green-600'>{location.state.message}</p>
          )}

          <div>
            <div className='mt-0'>
              Already have an account?
              <Link to='/signin' className='underline cursor-pointer'>
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
