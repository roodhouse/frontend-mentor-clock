import React, { useEffect } from 'react'
import './App.css';
import Top from './components/Top'
import Copy from './components/Copy'
import Button from './components/Button'
import Popup from './components/Popup'
import Ipbase from '@everapi/ipbase-js'

function App() {

  useEffect(() => {
    let screen = window.innerHeight
    let app = document.getElementById('app')
    console.log(`app height = ${app.clientHeight} and screen height = ${screen}`)

    if ( app.clientHeight < screen ) {
      console.log('boom')
      app.classList.remove('h-full')
      app.classList.add('h-screen')
      
    }


  },[])

const worldTime = 'https://worldtimeapi.org/api/ip'

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(function(data){
    let ip = data.ip
    const ipBase = new Ipbase('ipb_live_tbefEL02pSLDpPULLLaUCVgb5bXYCjkqci983CmG')
    ipBase.info({
      ip: ip
    }).then(response => {
      let data = response.data
      document.getElementById('placeCity').innerHTML = data.location.city.name + ' ' + data.location.region.name
      document.getElementById('placeCountry').innerHTML = data.location.country.emoji
    })
  });

fetch(worldTime)
  .then(function (response) {
    if (!response.ok) {
      console.log('error')
    } else {
      return response.json()

      .then(function(theRes) {
      
        let datetime = theRes.datetime

        document.getElementById('place').firstChild.innerHTML = theRes.timezone
        document.getElementById('yearDay').firstChild.innerHTML = theRes.day_of_year
        document.getElementById('weekDay').firstChild.innerHTML = theRes.day_of_week
        document.getElementById('weekNumber').firstChild.innerHTML = theRes.week_number
        
        datetime = datetime.split('T')
        datetime = datetime[1].split('.')
        datetime = datetime[0].slice(0,-3)
        
        document.getElementById('theTime').firstChild.innerHTML = datetime
        document.getElementById('timeZone').firstChild.innerHTML = theRes.abbreviation

        datetime = datetime.slice(0,-3)
        datetime = parseInt(datetime)
  
        let goodDay = document.getElementById('goodDay')
        let background = document.getElementById('mainWrapper')

        if (datetime >= 0 && datetime <= 11 ) {
          background.classList.remove('mainNight')
          background.classList.add('mainDay')
        } else if (datetime >= 12 && datetime <= 17) {
          goodDay.innerHTML = 'Good Afternoon'
          background.classList.remove('mainNight')
          background.classList.add('mainDay')
        } else if (datetime >= 18 && datetime <= 23) {
          background.classList.add('mainNight')
          background.classList.remove('mainDay')
          goodDay.innerHTML = 'Good Evening'
        }
        
      })
    }
  })

  fetch('https://api.quotable.io/quotes/random')
    .then(function (response) {
      if (!response.ok) {
        console.log('error')
      } else {
        return response.json()
        .then(function (res) {
          console.log(res)
          document.getElementById('quote').firstChild.innerHTML = res[0].content
          document.getElementById('author').firstChild.innerHTML = res[0].author

        })
      }
      
    })


  return (
    <div className="App closed h-full" id='app'>
     <div id='mainWrapper' className='mainDay h-full bg-no-repeat bg-cover'>
      <div id='mainContainer' className='h-full pt-8 pb-10 bg-black bg-opacity-40 md:pt-20 md:pb-16 xl:pt-[56px] xl:pb-[98px]'>
        <div id='topWrapper' className='h-[227px] md:h-[388px] xl:h-[233px] px-[26px] md:pl-16 md:pr-[132px] xl:px-[165px]'>
          <Top />
        </div>
        <div id='copyButtonWraper' className='lg:flex lg:items-end lg:justify-end'>
          <div id='copyWrapper' className='mb-12 px-[26px] md:pl-16 md:pr-[132px] md:mb-20 lg:!mb-0 xl:px-[165px] xl:mb-0'>
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
