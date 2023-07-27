import React from 'react'

function Popup() {
  return (
    <>
        <div id="popupContainer" className='backdrop-blur-[20px] px-[26px] py-12 md:flex md:py-[120px] md:pl-16 md:pr-[168px] md:justify-between xl:px-[74px] xl:pl-[165px] xl:pr-[434px] xl:backdrop-blur-[100px]'>
            <div id="zoneYear">
                <div id="timezoneContainer" className='flex justify-between mb-4 md:flex-col md:mb-[49px]'>
                    <div id='zoneLabel' className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px] xl:text-[15px] xl:tracking-[3px]'>
                        <p>CURRENT TIMEZONE</p>
                    </div>
                    <div id="place" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal xl:text-[56px]'>
                        <p>Europe/London</p>
                    </div>
                </div>
                <div id="yearContainer" className='flex justify-between mb-4 md:flex-col'>
                    <div id="yearLabel" className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px] xl:text-[15px] xl:tracking-[3px]'>
                        <p>Day of the year</p>
                    </div>
                    <div id="yearDay" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal xl:text-[56px]'>
                        <p>295</p>
                    </div>                
                </div>
            </div>
            <div id="bar" className='bar hidden xl:block xl:w-[1px] xl:h-[252px] xl:opacity-25' />
            <div id="weekAndNumber">
                <div id="weekContainer" className='flex justify-between mb-4 md:flex-col md:mb-[49px]'>
                    <div id="weekLabel" className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px] xl:text-[15px] xl:tracking-[3px]'>
                        <p>Day of the week</p>
                    </div>
                    <div id="weekDay" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal xl:text-[56px]'>
                        <p>5</p>
                    </div>
                </div>
                <div id="weekNumberContainer" className='flex justify-between md:flex-col'>
                    <div id="weekNumberLabel" className='text-[10px] font-normal leading-7 tracking-[2px] uppercase md:text-[13px] md:leading-7 md:tracking-[2.6px] xl:text-[15px] xl:tracking-[3px]'>
                        <p>Week number</p>
                    </div>
                    <div id="weekNumber" className='text-xl font-bold text-right md:text-left md:text-[40px] md:leading-normal xl:text-[56px]'>
                        <p>42</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup