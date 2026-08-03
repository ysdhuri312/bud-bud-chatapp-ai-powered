import { useAuth } from '@clerk/react';
import Home from './Home';
import { Navigate } from 'react-router';

export default function HomeRedirect() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <div>Loading...</div>;

  if (isSignedIn) {
    return <Navigate to='/chat' replace />;
  }
  return <Home />;
}
