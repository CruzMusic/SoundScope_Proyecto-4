import "./Button.css"

import { memo } from 'react'

const Button = (props) => {
    const { className ,label, onClick, type = "button" } = props

  return (
    <button className={className} onClick={onClick} type={type}>{label}</button>
  )
}

export default memo(Button)