import React, {useState, useEffect} from 'react'
import ArrowDown from '../assets/desktop/icon-arrow-down.svg'

function Button() {


  // show or hide the details depending upon the show state
  const [show, setShow] = useState('closed')
  const [button, setButton] = useState()

  useEffect(() => {    
    let buttonContainer = document.getElementById('buttonContainer')

    buttonContainer.addEventListener('click', showMore)
    buttonContainer.addEventListener('mouseover', hoverState)
    buttonContainer.addEventListener('mouseout', unHoverState)
    
  },[])

  function hoverState() {
    document.getElementById('buttonIcon').classList.remove('bg-black')
    document.getElementById('buttonIcon').classList.add('bg-hoverGray')
  }

  function unHoverState(){
    document.getElementById('buttonIcon').classList.add('bg-black')
    document.getElementById('buttonIcon').classList.remove('bg-hoverGray')
  }


  function showMore() {
    let app = document.getElementById('app')
    
    if (app.classList.contains('closed')) {
      document.getElementById('buttonImage').classList.add('rotate-180')
      document.getElementById('buttonWrapper').classList.add('mb-10', 'md:mb-16')
      document.getElementById('moreText').innerHTML = 'Less'
      document.getElementById('popupWrapper').classList.remove('hidden')
      document.getElementById('topWrapper').classList.add('hidden')
      document.getElementById('copyWrapper').classList.add('!mt-0')
      document.getElementById('mainContainer').classList.add('pt-[99px]', 'md:pt-[153px]', 'xl:pt-[56px]', 'flex', 'flex-col', '!pb-0', 'justify-between')
      document.getElementById('copyButtonWraper').classList.add('xl:mb-[56px]')
      app.classList.remove('closed')
      app.classList.add('open')
      console.log('it was closed')
      
    } else if (app.classList.contains('open')) {
      document.getElementById('buttonImage').classList.remove('rotate-180')
      document.getElementById('buttonWrapper').classList.remove('mb-10', 'md:mb-16')
      document.getElementById('moreText').innerHTML = 'More'
      document.getElementById('popupWrapper').classList.add('hidden')
      document.getElementById('topWrapper').classList.remove('hidden')
      document.getElementById('copyWrapper').classList.remove('!mt-0')
      document.getElementById('mainContainer').classList.remove('pt-[99px]', 'md:pt-[153px]', 'xl:pt-[56px]', 'flex', 'flex-col', '!pb-0', 'justify-between')
      document.getElementById('copyButtonWraper').classList.remove('xl:mb-[56px]')
      app.classList.remove('open')
      app.classList.add('closed')
      console.log('it was open')
    }
  }

  // display: flex;
// flex-direction: column;
// padding-bottom: 0;
// justify-content: flex-end;
  return (
    <>
        <div id="buttonContainer" className='flex w-[115px] bg-white rounded-[28px] justify-between items-center pt-1 pr-1 pb-1 pl-[17px] md:w-[146px] md:pl-[21px] md:pr-2 md:py-2'>
            <div id="buttonText" className='text-black text-xs font-bold leading-[14px] tracking-[3.75px] uppercase opacity-50 md:text-base md:leading-7 md:tracking-[5px]'>
                <p id='moreText'>MORE</p>
            </div>
            <div id="buttonIcon" className='w-8 h-8 bg-black rounded-[50%] flex justify-center items-center md:w-10 md:h-10'>
                <img src={ArrowDown} alt="More" id='buttonImage' />
            </div>
        </div>
    </>
  )
}

export default Button