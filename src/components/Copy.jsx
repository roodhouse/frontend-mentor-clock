import React from 'react'

function Copy() {
  return (
    <>
        <div id="copyContainer">
            <div id="greeting" className='flex mb-4 md:mb-0'>
                <div id="greetingIcon" className='w-6 h-6 bg-[url("../src/assets/desktop/icon-sun.svg")] mr-4' />
                <div id="greetingCopy" className='text-white text-[15px] font-normal uppercase tracking-[3px] leading-[25px] md:text-lg md:tracking-[3.6px] xl:text-xl xl:tracking-[4px] xl:mb-4'>
                    <p>Good Morning<span className='hidden md:inline'>, it's currently</span></p>
                </div>
            </div>
            <div id="time" className='flex items-baseline mb-4 md:mb-0 xl:mb-4'>
                <div id="theTime" className='text-white text-[100px] font-bold leading-[100px] tracking-[-2.5px] text-left mr-[5px] md:text-[175px] md:leading-[175px] md:tracking-[-4.375px] md:mr-[11px] xl:text-[200px] xl:leading-[200px] xl:tracking-[-5px]'>
                    <p>11:37</p>
                </div>
                <div id="timeZone" className='text-white text-[15px] leading-7 uppercase font-light md:text-[32px] xl:text-[40px]'>
                    <p>BST</p>
                </div>
            </div>
            <div id="place" className='text-white text-[15px] font-bold leading-7 tracking-[3px] uppercase text-left md:text-lg md:tracking-[3.6px] xl:text-[28px] xl:tracking-[4.8px]'>
                <p>In London, UK</p>
            </div>
        </div>
    </>
  )
}

export default Copy
