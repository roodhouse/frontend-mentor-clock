import './App.css';
import Top from './components/Top'
import Copy from './components/Copy'
import Button from './components/Button'
import Popup from './components/Popup'
import Ipbase from '@everapi/ipbase-js'

// api
// hover states
// height issue

function App() {

//   const ipBase = new Ipbase('ipb_live_tbefEL02pSLDpPULLLaUCVgb5bXYCjkqci983CmG')
//     ipBase.info().then(response => {
//     console.log(response)
// });

// const worldTime = 'https://worldtimeapi.org/api/ip'
// console.log(worldTime)

// fetch(worldTime)
//   .then(function (response) {
//     if (!response.ok) {
//       console.log('error')
//     } else {
//       // console.log(response.json())
//       return response.json()

//       .then(function(theRes) {
//         console.log(theRes)
//         const ip = theRes.client_ip
//         console.log(ip)

//           const ipBase = new Ipbase('ipb_live_tbefEL02pSLDpPULLLaUCVgb5bXYCjkqci983CmG')
//           ipBase.info({
//             ip: ip
//           }).then(response => {
//             console.log(response)
//           })
//       })
//     }
//   })

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(function(data){
    let ip = data.ip
    const ipBase = new Ipbase('ipb_live_tbefEL02pSLDpPULLLaUCVgb5bXYCjkqci983CmG')
    ipBase.info({
      ip: ip
    }).then(response => {
      console.log(response)
      let data = response.data
      console.log(data)
      document.getElementById('placeCity').innerHTML = data.location.city.name + ' ' + data.location.region.name
      document.getElementById('placeCountry').innerHTML = data.location.country.emoji
    })
  });

  return (
    <div className="App closed h-screen" id='app'>
     <div id='mainWrapper' className='h-full bg-[url("../src/assets/mobile/bg-image-daytime.jpg")] md:bg-[url("../src/assets/tablet/bg-image-daytime.jpg")] xl:bg-[url("../src/assets/desktop/bg-image-daytime.jpg")] bg-no-repeat bg-cover'>
      <div id='mainContainer' className='h-full pt-8 pb-10 bg-black bg-opacity-40 md:pt-20 md:pb-16 xl:pt-[56px] xl:pb-[98px]'>
        <div id='topWrapper' className='px-[26px] md:pl-16 md:pr-[132px] xl:px-[165px]'>
          <Top />
        </div>
        <div id='copyButtonWraper' className='xl:flex xl:items-end xl:justify-end'>
          <div id='copyWrapper' className='mt-[227px] mb-12 px-[26px] md:pl-16 md:pr-[132px] md:mt-[388px] md:mb-20 xl:px-[165px] xl:mt-[233px] xl:mb-0'>
            <Copy />
          </div>
          <div id='buttonWrapper' className='px-[26px] md:pl-16 md:pr-[132px] xl:px-[165px]'>
            <Button />
          </div>
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
