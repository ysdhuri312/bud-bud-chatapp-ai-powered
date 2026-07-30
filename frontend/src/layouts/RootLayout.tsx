import { ClerkProvider } from '@clerk/react';
import { Outlet, useNavigate } from 'react-router';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

export default function RootLayout() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      signInUrl='/sign-in'
      signUpUrl='/sign-up'
      signInFallbackRedirectUrl='/chat'
      signUpFallbackRedirectUrl='/'
    >
      <div className=''>
        <Outlet />
      </div>
    </ClerkProvider>
  );
}
