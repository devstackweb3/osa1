import StatisticLine from '../../src/components/statisticline'

const Statistics = (props) => {
  //console.log(props.allClicks)
  if (props.allClicks.length === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <div>
        <StatisticLine text="good" value={props.positive} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.negative} />
      </div>
      <div>total {props.sum}</div>
      <div>average {props.averageClicks}</div>
      <div>positive {props.posPercentageClicks} %</div>
    </div>
  )
}

export default Statistics
