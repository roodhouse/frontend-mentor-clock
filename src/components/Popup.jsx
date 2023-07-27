import React from 'react'

function Popup() {
  return (
    <>
        <div id="popupContainer" className='bg-gray backdrop-blur-[20px] px-[26px] py-12'>
            <div id="timezoneContainer" className='flex justify-between mb-4'>
                <div id='zoneLabel' className='text-dark text-[10px] font-normal leading-7 tracking-[2px] uppercase'>
                    <p>CURRENT TIMEZONE</p>
                </div>
                <div id="place" className='text-dark text-xl font-bold text-right'>
                    <p>Europe/London</p>
                </div>
            </div>
            <div id="yearContainer" className='flex justify-between mb-4'>
                <div id="yearLabel" className='text-dark text-[10px] font-normal leading-7 tracking-[2px] uppercase'>
                    <p>Day of the year</p>
                </div>
                <div id="yearDay" className='text-dark text-xl font-bold text-right'>
                    <p>295</p>
                </div>                
            </div>
            <div id="weekContainer" className='flex justify-between mb-4'>
                <div id="weekLabel" className='text-dark text-[10px] font-normal leading-7 tracking-[2px] uppercase'>
                    <p>Day of the week</p>
                </div>
                <div id="weekDay" className='text-dark text-xl font-bold text-right'>
                    <p>5</p>
                </div>
            </div>
            <div id="weekNumberContainer" className='flex justify-between'>
                <div id="weekNumberLabel" className='text-dark text-[10px] font-normal leading-7 tracking-[2px] uppercase'>
                    <p>Week number</p>
                </div>
                <div id="weekNumber" className='text-dark text-xl font-bold text-right'>
                    <p>42</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup