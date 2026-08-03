import { createBrowserRouter } from 'react-router';
import RootLayout from '@/layouts/RootLayout';
import AuthLayout from '@/layouts/AuthLayout';
import ChatLayout from '@/layouts/ChatLayout';
import ChatPage from '@/features/chat/pages/ChatPage';
import Signin from '@/features/auth/pages/Signin';
import Signup from '@/features/auth/pages/Signup';
import AuthCallback from '@/features/auth/components/AuthCallback';
import HomeRedirect from '@/components/layout/HomeRedirect';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <HomeRedirect />,
        path: '/',
      },

      {
        element: <AuthLayout />,
        children: [
          {
            element: <Signin />,
            path: '/sign-in',
          },
          {
            element: <Signup />,
            path: '/sign-up',
          },
          {
            element: <AuthCallback />,
            path: '/callback',
          },
        ],
      },
      {
        element: <ChatLayout />,
        children: [
          {
            element: <ChatPage />,
            path: '/chat',
          },
        ],
      },
    ],
  },
]);
