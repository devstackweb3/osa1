import { useState } from 'react'
import Statistics from '../src/components/statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [positiveClicks, setNewPosClicks] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setNewPosClicks(positiveClicks.concat(1))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }
  const totalClicks = () => {
    return allClicks.length
  }
  const total = totalClicks()

  const averageStatsClicks = () => {
    if (allClicks.length === 0) return 'No feedback given'
    else {
      let sum = allClicks.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
      let totalArrValues = allClicks.length
      let average = sum / totalArrValues
      return average
    }
  }
  const avClicks = averageStatsClicks()

  const positiveStatsClicks = () => {
    if (positiveClicks.length === 0) return 'No feedback seen'
    else {
      let sumPositiveClicks = positiveClicks.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
      let totalClicks = allClicks.length
      let positivePercentageClicks = (sumPositiveClicks / totalClicks) * 100
      return positivePercentageClicks
    }
  }
  const posClicks = positiveStatsClicks()

  return (
    <div>
      <h1 className="font-bold">give feedback</h1>
      <div className="flex">
        <button onClick={() => handleGoodClick()}>good</button>
        <button onClick={() => handleNeutralClick()}>neutral</button>
        <button onClick={() => handleBadClick()}>bad</button>
      </div>
      <Statistics
        positive={good}
        neutral={neutral}
        negative={bad}
        sum={total}
        averageClicks={avClicks}
        posPercentageClicks={posClicks}
      />
    </div>
  )
}

export default App
