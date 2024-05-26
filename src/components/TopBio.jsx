const TopBio = () => {
  return <div className='flex flex-col items-start space-y-7 mx-auto w-11/12 md:w-2/3'>
    <div className='font-mono text-blue-400 text-sm'>
      Hi my name is
    </div>
    <div className='text-7xl font-bold text-gray-300'>Khang Nguyen</div>
    <div className='text-5xl text-gray-400'>
      I build things for your business on the web.
    </div>
    <div className='text-xl text-gray-500 w-2/3'>I'm a software engineer from Vietnam. I love to build website (and occasionally designing) for your dream. Currently, I'm focused on building an interior architecture human community at NUS</div>
    <a href="javascript:;" className='py-3 px-8 text-sm text-blue-300 border border-blue-300 rounded-md hover:border-gray-300 hover:bg-blue-300 hover:text-gray-900 duration-200'>Download Resume</a>
  </div>
}

export default TopBio
