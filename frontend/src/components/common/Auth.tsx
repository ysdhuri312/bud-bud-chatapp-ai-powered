import { Show, SignIn, SignUp } from '@clerk/react';

export default function Auth() {
  const accountExist: boolean = false;
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex justify-center my-5'>
          <Show when='signed-out'>
            {accountExist ? <SignIn /> : <SignUp />}
          </Show>
        </div>
      </div>
    </section>
  );
}
