import StatisticLine from '../../src/components/statisticline'

const Statistics = (props) => {
  //console.log(props.allClicks)
  if (props.allClicks.length === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <StatisticLine text="good" />
              </td>
              <td>
                <StatisticLine value={props.positive} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="neutral" />
              </td>
              <td>
                <StatisticLine value={props.neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="bad" />
              </td>
              <td>
                <StatisticLine value={props.negative} />
              </td>
            </tr>
            <tr>
              <td>total</td>
              <td>{props.sum}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{props.averageClicks}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{props.posPercentageClicks} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Statistics
