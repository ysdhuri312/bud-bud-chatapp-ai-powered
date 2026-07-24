import { Show, UserButton } from '@clerk/react';

export default function Header() {
  return (
    <header className=''>
      <div className='container mx-auto'>
        <div className='flex justify-between py-3'>
          <p>LOGO.</p>
          <div className='flex gap-1'>
            <Show when='signed-in'>
              <UserButton />
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
}
