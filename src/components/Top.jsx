import React, {useEffect} from 'react'
import Refresh from '../assets/desktop/icon-refresh.svg'

function Top() {

    useEffect(() => {    
        let refreshContainer = document.getElementById('refreshContainer')
    
        refreshContainer.addEventListener('click', refresh)
        
      },[])

    function refresh() {
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
    }
  return (
    <>
        <div id="topContainer" className='flex justify-between xl:justify-start'>
            <div id="quoteContainer" className='flex flex-col w-[290px] md:w-[540px] xl:mr-4'>
                <div id="quote" className='text-white text-xs font-normal leading-[22px] text-left mb-2 md:text-lg md:mb-[13px]'>
                    <p></p>
                </div>
                <div id="author" className='text-white text-xs font-bold leading-[22px] text-left md:text-lg'>
                    <p></p>
                </div>
            </div>
            <div id="refreshContainer" className='md:mt-[10px]'>
                <img src={Refresh} alt="refresh" className='w-4 h-4' />
            </div>
        </div>
    </>
  )
}

export default Top