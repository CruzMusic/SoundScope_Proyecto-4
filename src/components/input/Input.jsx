import "./Input.css"

const Input = (props) => {
    const {value, onChange, placeholder, className, type = "text", ariaLabel} = props
  return (
    <input type={type} className={className} value={value} onChange={onChange} placeholder={placeholder} aria-label={ariaLabel}/>
  )
}

export default Input