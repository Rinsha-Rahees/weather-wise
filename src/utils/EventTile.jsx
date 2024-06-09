import React from 'react'

function EventTile({name, venue, date, weather}) {
  return (
    <div className='flex flex-col my-2 w-full border border-gray-200 shadow-md rounded-lg p-3'>
        <h5 className="font-semibold text-md">{name}</h5>
        <p>{venue} - {date}</p>
        <p>Expected Weather: {weather}</p>
    </div>
  )
}

export default EventTile