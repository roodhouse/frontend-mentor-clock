import './App.css';
import Top from './components/Top'
import Copy from './components/Copy'
import Button from './components/Button'

// setup popup as final component

function App() {
  return (
    <div className="App h-screen" id='app'>
     <div id='mainWrapper' className='h-full bg-[url("../src/assets/mobile/bg-image-daytime.jpg")] bg-no-repeat bg-contain'>
      <div id='mainContainer' className='h-full pt-8 px-[26px] pb-10 bg-black bg-opacity-40'>
        <div id='topWrapper'>
          <Top />
        </div>
        <div id='copyWrapper' className='mt-[227px] mb-12'>
          <Copy />
        </div>
        <div id='buttonWrapper'>
          <Button />
        </div>
      </div>

     </div>
    </div>
  );
}

export default App;
