import React from 'react'
import './styles.css';

const Switch = ({ value, setValue, label }) => {

  return (
    <div className='switch-container'>
      {label && <label htmlFor="switch-button">{label}</label>}
      <div id='switch-button' className={value === true ? "switch-container-enabled" : "switch-container-disabled"} onClick={setValue}>
      </div>
    </div>
    
  )
}

export default Switch;