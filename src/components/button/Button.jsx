import "./Button.css"

import React, { memo } from 'react'

const Button = (props) => {
    const { className ,label, onClick } = props

  return (
    <button className={className} onClick={onClick}>{label}</button>
  )
}

export default memo(Button)