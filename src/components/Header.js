import React from 'react'
import { Icon } from "@iconify/react" 

const Header = () => {
  return (
    <div className='header'>
        <h1><Icon icon="mdi:fire-alert" /> Wildfire Tracker (Powered by NASA)</h1>
    </div>
  )
}

export default Header