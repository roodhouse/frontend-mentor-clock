import './App.css';
import Top from './components/Top'
import Copy from './components/Copy'
import Button from './components/Button'
import Popup from './components/Popup'

// create dark mode for all components
// hook up button

function App() {
  return (
    <div className="App h-screen" id='app'>
     <div id='mainWrapper' className='h-full bg-[url("../src/assets/mobile/bg-image-daytime.jpg")] bg-no-repeat bg-contain'>
      <div id='mainContainer' className='h-full pt-8 pb-10 bg-black bg-opacity-40'>
        <div id='topWrapper' className='px-[26px]'>
          <Top />
        </div>
        <div id='copyWrapper' className='mt-[227px] mb-12 px-[26px]'>
          <Copy />
        </div>
        <div id='buttonWrapper' className='px-[26px]'>
          <Button />
        </div>
        <div id='popupWrapper'>
          <Popup />
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
