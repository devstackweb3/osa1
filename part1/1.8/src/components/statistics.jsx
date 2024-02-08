const Statistics = (props) => {
  console.log(props.total)
  return (
    <div>
      <h1 className="font-bold">statistics</h1>
      <div>
        <div>good {props.positive}</div>
        <div>neutral {props.neutral}</div>
        <div>bad {props.negative}</div>
      </div>
      <div>total {props.sum}</div>
      <div>average {props.averageClicks}</div>
      <div>positive {props.posPercentageClicks} %</div>
    </div>
  )
}

export default Statistics
