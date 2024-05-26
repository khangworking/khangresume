import Header from './components/Header.jsx'
import TopBio from './components/TopBio.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'

function App() {
  return (
    <div className="bg-gray-900">
      <div className='min-h-screen flex flex-col items-stretch'>
        <div className='flex-none'>
          <Header />
        </div>
        <div className='flex-auto pt-20'>
          <TopBio />
        </div>
      </div>
      <div className='min-h-screen' id='about'>
        <div className='w-11/12 md:w-2/3 mx-auto pt-44'>
          <About />
        </div>
      </div>
      <div className='min-h-screen' id='about'>
        <div className='w-11/12 md:w-2/3 mx-auto pt-44'>
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
