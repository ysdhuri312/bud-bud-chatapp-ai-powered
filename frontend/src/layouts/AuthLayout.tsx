import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <>
      <Header />
      <main className='flex justify-center'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
