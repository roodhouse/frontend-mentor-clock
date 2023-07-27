import React from 'react'
import Refresh from '../assets/desktop/icon-refresh.svg'

function Top() {
  return (
    <>
        <div id="topContainer" className='flex justify-between'>
            <div id="quoteContainer" className='flex flex-col w-[290px]'>
                <div id="quote" className='text-white text-xs font-normal leading-[22px] text-left mb-2'>
                    <p>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
                </div>
                <div id="author" className='text-white text-xs font-bold leading-[22px] text-left'>
                    <p>Ada Lovelace</p>
                </div>
            </div>
            <div id="refreshContainer" className=''>
                <img src={Refresh} alt="refresh" className='w-4 h-4' />
            </div>
        </div>
    </>
  )
}

export default Top