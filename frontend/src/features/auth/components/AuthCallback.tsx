import { useAuth } from '@clerk/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from '@/shared/services/apiClient';

export default function AuthCallback() {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !isSignedIn) return;

      try {
        const token = await getToken();
        const res = await axios.post(
          'user/register',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log(res);

        navigate('/chat');
      } catch (error) {
        console.error(error);
      }
    };
    syncUser();
  }, [isLoaded, isSignedIn, getToken, navigate]);

  return <p>Setting up your account...</p>;
}
