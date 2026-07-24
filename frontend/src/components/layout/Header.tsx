'use client';

import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className='bg-amber-300'>
      <div className='container mx-auto'>
        <div className='flex justify-between py-3'>
          <p>LOGO.</p>
          <Button>Auth</Button>
        </div>
      </div>
    </header>
  );
}
