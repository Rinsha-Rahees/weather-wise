import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className='flex justify-between w-full'>
        <h2 className='font-semibold text-2xl'>WeatherWise</h2>
      </div>
    )
  }
}

export default Header