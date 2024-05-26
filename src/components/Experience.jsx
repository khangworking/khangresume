import React, { useState } from 'react'

const Experience = () => {
  const [tab, setTab] = useState('nus')

  const activeClasses = 'border-l-blue-300 text-blue-30'
  const inactiveClasses = 'border-l-gray-600'

  return <div className=''>
    <div className='text-4xl font-mono text-blue-400 relative z-20 w-fit bg-gray-900 pr-5'>What I've worked</div>
    <div className='mt-9 flex flex-col md:flex-row space-x-6 items-stretch'>
      <div className='flex-none w-full md:w-1/6 flex flex-col text-white'>
        <div onClick={() => setTab('nus')} className={`py-2 px-5 cursor-pointer hover:bg-blue-500/20 border-l-2 ${tab === 'nus' ? activeClasses : inactiveClasses}`}>NUS</div>
        <div onClick={() => setTab('cap')} className={`py-2 px-5 cursor-pointer hover:bg-blue-500/20 border-l-2 ${tab === 'cap' ? activeClasses : inactiveClasses}`}>Capgemini</div>
        <div onClick={() => setTab('tadu')} className={`py-2 px-5 cursor-pointer hover:bg-blue-500/20 border-l-2 ${tab === 'tadu' ? activeClasses : inactiveClasses}`}>Tadu</div>
      </div>
      <div className='text-white flex-auto'>
        <div className={ tab === 'nus' ? '' : 'hidden' }>
          <div className='font-bold text-2xl flex flex-row space-x-2'>
            <span className='text-gray-300'>Software Engineer</span>
            <span className='text-blue-300'>@</span>
            <span className='text-blue-300'>NUS Technology</span>
          </div>
          <div className='text-sm text-gray-300 mt-2 font-mono'>Jan 2017 - Present</div>
          <ul className='mt-5 flex flex-col space-y-3 text-gray-400 ml-4'>
            <li>Write modern, performant, maintainable code for a diverse array of clients.</li>
            <li>Work with Ruby language wiht Rails frameworks and other front end libraries such as ReactJS, VueJS.</li>
            <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</li>
          </ul>
        </div>
        <div className={ tab === 'cap' ? '' : 'hidden' }>
          <div className='font-bold text-2xl flex flex-row space-x-2'>
            <span className='text-gray-300'>Salesforce Developer</span>
            <span className='text-blue-300'>@</span>
            <span className='text-blue-300'>Capgemini</span>
          </div>
          <div className='text-sm text-gray-300 mt-2 font-mono'>Mar - Sep 2016</div>
          <ul className='mt-5 flex flex-col space-y-3 text-gray-400 ml-4'>
            <li>Write modern, performant, maintainable code for a diverse array of clients.</li>
            <li>Work with Ruby language wiht Rails frameworks and other front end libraries such as ReactJS, VueJS.</li>
            <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</li>
          </ul>
        </div>
        <div className={ tab === 'tadu' ? '' : 'hidden' }>
          <div className='font-bold text-2xl flex flex-row space-x-2'>
            <span className='text-gray-300'>Wordpress Developer</span>
            <span className='text-blue-300'>@</span>
            <span className='text-blue-300'>Tadu</span>
          </div>
          <div className='text-sm text-gray-300 mt-2 font-mono'>May 2015 - Mar 2016</div>
          <ul className='mt-5 flex flex-col space-y-3 text-gray-400 ml-4'>
            <li>Develop workpress theme from a cherry framework.</li>
            <li>Work closely with customer to build some small e-commerce websites.</li>
            <li>Communicate with local customer for change request and help them use the website.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Experience
