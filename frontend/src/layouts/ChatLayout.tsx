import { useAuth } from '@clerk/react';
import { Navigate, Outlet } from 'react-router';

export default function ChatLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) {
    return <Navigate to='/' replace />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
}
