import React from 'react'

function Match({ pState }) {
    return (
        <div className={`gr-match absolute ${pState === 'top' ? 'gr-top' : 'gr-bot'}`}>
            <div className=''>
                <p className='pointer'>Team Name 1</p>
                <span className='d-flex flex-center'>0</span>
            </div>
            <div className='gr-mt-t'>
                <p className='pointer'>Team Name 1</p>
                <span className='d-flex flex-center'>0</span>
            </div>
            <span className='gr-detail d-flex absolute'></span>
        </div>
    )
}

export default Match