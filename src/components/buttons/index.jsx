const Button = ({ type = null, className = '', onClick = null, children }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
