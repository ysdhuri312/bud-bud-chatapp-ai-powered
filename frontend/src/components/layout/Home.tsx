import { Link } from 'react-router';
import { Button } from '../ui/button';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-between text-center'>
      <Header />
      <div>
        <Link to='/sign-in'>
          <Button>Sign in</Button>
        </Link>
        <Link to='/sign-up'>
          <Button>Sign up </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
