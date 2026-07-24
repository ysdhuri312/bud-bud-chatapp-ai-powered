import { createBrowserRouter } from 'react-router';
import RootLayout from '@/layouts/RootLayout';
import AuthLayout from '@/layouts/AuthLayout';
import ChatLayout from '@/layouts/ChatLayout';
import Auth from '@/features/auth/pages/AuthPage';
import ChatPage from '@/features/chat/pages/ChatPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            element: <Auth />,
            path: '/',
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
