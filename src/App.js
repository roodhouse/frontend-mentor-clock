import './App.css';
import Top from './components/Top'
import Copy from './components/Copy'
import Button from './components/Button'
import Popup from './components/Popup'

// tabview
// full view
// hook up button

function App() {
  return (
    <div className="App h-screen" id='app'>
     <div id='mainWrapper' className='h-full bg-[url("../src/assets/mobile/bg-image-daytime.jpg")] md:bg-[url("../src/assets/tablet/bg-image-daytime.jpg")] bg-no-repeat bg-cover'>
      <div id='mainContainer' className='h-full pt-8 pb-10 bg-black bg-opacity-40 md:pt-20 md:pb-16'>
        <div id='topWrapper' className='px-[26px] md:pl-16 md:pr-[132px]'>
          <Top />
        </div>
        <div id='copyWrapper' className='mt-[227px] mb-12 px-[26px] md:pl-16 md:pr-[132px] md:mt-[388px] md:mb-20'>
          <Copy />
        </div>
        <div id='buttonWrapper' className='px-[26px] md:pl-16 md:pr-[132px]'>
          <Button />
        </div>
        <div id='popupWrapper' className='hidden day'>
          <Popup />
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
