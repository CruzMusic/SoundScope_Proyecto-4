import "./Input.css"

import React from 'react'

const Input = (props) => {
    const {value, onChange, placeholder, className} = props
  return (
    <input type="text" className={className} value={value} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input