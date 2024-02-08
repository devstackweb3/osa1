const Button = ({ handleClick, description }) => {
  //console.log(handleClick)
  return (
    <div>
      <button onClick={handleClick}>{description}</button>
    </div>
  )
}

export default Button
