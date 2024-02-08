const StatisticLine = ({ text, value }) => {
  console.log(value)
  return (
    <div>
      <div className="flex">
        {text} {value}
      </div>
    </div>
  )
}

export default StatisticLine
