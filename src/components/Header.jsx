const Header = () => {
  return <div className='w-screen'>
    <div className='w-11/12 mx-auto flex flex-row justify-between items-center'>
      <a href="/" className='font-bold text-3xl text-blue-300'>
        Khang (カン)
      </a>
      <div className='flex flex-row items-center space-x-14 py-8'>
        <a className='text-sm font-mono inline-block text-white hover:text-blue-300 duration-200' href="#about">About</a>
        <a className='text-sm font-mono inline-block text-white hover:text-blue-300 duration-200' href="javascript:;">Experience</a>
        <a className='text-sm font-mono inline-block text-white hover:text-blue-300 duration-200' href="javascript:;">Projects</a>
        <a className='text-sm font-mono inline-block text-white hover:text-blue-300 duration-200' href="javascript:;">Contact</a>
        <a className='text-sm inline-block border border-blue-300 px-5 py-2 rounded-md bg-blue-300 hover:bg-transparent duration-300 text-gray-900 hover:text-blue-300' href="javascript:;">Resume</a>
      </div>
    </div>
  </div>
}

export default Header
