const Navbar = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='h-14 flex justify-between items-center'>
        <div
          id='logo'
          className='text-xl tracking-wide font-semibold cursor-pointer'
        >
          BUD-BUD
        </div>
        <div className='text-xl font-medium cursor-pointer'>About</div>
      </div>
    </div>
  );
};
export default Navbar;
