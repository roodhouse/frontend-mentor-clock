import React from 'react'
import ArrowDown from '../assets/desktop/icon-arrow-down.svg'

function Button() {
  return (
    <>
        <div id="buttonContainer" className='flex w-[115px] bg-white rounded-[28px] justify-between items-center pt-1 pr-1 pb-1 pl-[17px]'>
            <div id="buttonText" className='text-black text-xs font-bold leading-[14px] tracking-[3.75px] uppercase opacity-50'>
                <p>MORE</p>
            </div>
            <div id="buttonIcon" className='w-8 h-8 bg-black rounded-[50%] flex justify-center items-center'>
                <img src={ArrowDown} alt="More" />
            </div>
        </div>
    </>
  )
}

export default Button
