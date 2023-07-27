import React from 'react'

function Copy() {
  return (
    <>
        <div id="copyContainer">
            <div id="greeting" className='flex mb-4'>
                <div id="greetingIcon" className='w-6 h-6 bg-[url("../src/assets/desktop/icon-sun.svg")] mr-4' />
                <div id="greetingCopy" className='text-white text-[15px] font-normal uppercase tracking-[3px] leading-[25px]'>
                    <p>Good Morning</p>
                </div>
            </div>
            <div id="time" className='flex items-baseline mb-4'>
                <div id="theTime" className='text-white text-[100px] font-bold leading-[100px] tracking-[-2.5px] text-left mr-[5px]'>
                    <p>11:37</p>
                </div>
                <div id="timeZone" className='text-white text-[15px] leading-7 uppercase font-light'>
                    <p>BST</p>
                </div>
            </div>
            <div id="place" className='text-white text-[15px] font-bold leading-7 tracking-[3px] uppercase text-left'>
                <p>In London, UK</p>
            </div>
        </div>
    </>
  )
}

export default Copy
