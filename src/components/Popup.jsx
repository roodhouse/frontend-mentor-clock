import React from 'react'

function Popup() {
  return (
    <>
        <div id="popupContainer" className='backdrop-blur-[20px] px-[26px] py-12 md:flex md:py-[120px] md:pl-16 md:pr-[168px] md:justify-between'>
            <div id="zoneYear">
                <div id="timezoneContainer" className='flex justify-between mb-4 md:flex-col md:mb-[49px]'>
                    <div id='zoneLabel' className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px]'>
                        <p>CURRENT TIMEZONE</p>
                    </div>
                    <div id="place" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal'>
                        <p>Europe/London</p>
                    </div>
                </div>
                <div id="yearContainer" className='flex justify-between mb-4 md:flex-col'>
                    <div id="yearLabel" className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px]'>
                        <p>Day of the year</p>
                    </div>
                    <div id="yearDay" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal'>
                        <p>295</p>
                    </div>                
                </div>
            </div>
            <div id="weekAndNumber">
                <div id="weekContainer" className='flex justify-between mb-4 md:flex-col md:mb-[49px]'>
                    <div id="weekLabel" className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px]'>
                        <p>Day of the week</p>
                    </div>
                    <div id="weekDay" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal'>
                        <p>5</p>
                    </div>
                </div>
                <div id="weekNumberContainer" className='flex justify-between md:flex-col'>
                    <div id="weekNumberLabel" className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px]'>
                        <p>Week number</p>
                    </div>
                    <div id="weekNumber" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal'>
                        <p>42</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup