import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='h-screen flex flex-col font-mono'>
      <header className='border-b border-b-gray-300'>
        <Navbar />
      </header>

      <main className='flex-1 overflow-y-auto'>
        <Outlet />
      </main>

      <footer className='border-t border-t-gray-300'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
