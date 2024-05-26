import Pic from '../assets/images/pic.jpg'

const About = () => {
  return <div className='flex flex-col md:flex-row space-x-10'>
    <div className='flex-none w-full md:w-1/3 relative group'>
      <div className='absolute top-10 -left-10 w-full aspect-square border-2 duration-200 rounded-md border border-blue-300 group-hover:top-0 group-hover:left-0'></div>
      <img src={Pic} className='rounded-md relative z-20 duration-200 group-hover:scale-110' />
    </div>
    <div className='flex-auto'>
      <div className='relative'>
        <div className='absolute top-1/2 left-0 border border-t border-gray-800 w-full z-10'></div>
        <div className='text-4xl font-mono text-blue-400 relative z-20 w-fit bg-gray-900 pr-5'>About Me</div>
      </div>
      <div className='mt-14 text-gray-100 tracking-wider'>
        <p>Hello, My name is Khang. I came from Vietnam. I graduated with an engineer degree in information technology. I enjoy creating things that helpful for human on the internet. My interest in web development started back when I was at high school.</p>
        <p className='mt-3'>Fast-forward to today, I've worked as a full-stack developer at NUS technology company. My main focus these days is maintaining and developing new features for an interior architecture WebApp.</p>
        <p className='mt-3'>Here are a few technologies I've been working with recently:</p>
        <div className='mt-3 flex flex-row'>
          <ul className='w-1/2 list-disc ml-4'>
            <li>Ruby on Rails</li>
            <li>Node.js</li>
            <li>Wordpress</li>
          </ul>
          <ul className='w-1/2 list-disc ml-4'>
            <li>Javascript (ES6)</li>
            <li>ReactJS</li>
            <li>VueJS</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default About
