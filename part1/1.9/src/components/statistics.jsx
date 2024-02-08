const Statistics = (props) => {
  //console.log(props.allClicks)
  if (props.allClicks.length === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
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
