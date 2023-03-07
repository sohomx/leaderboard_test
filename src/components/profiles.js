import React from 'react'

export default function profiles() {
    return(
        <div id="profile">
            {item()}
        </div>
    )
  function item() {
    return (
    <div className='flex'>
        <div className='item'>
            <img src=""></img>

            <div className='info'>
                <h3 className='name text-dark'>Name</h3>
                <span>Location</span>
            </div>
        </div>
        <div className='item'>
            <span>Score</span>
        </div>
    </div>
  )
}
}

