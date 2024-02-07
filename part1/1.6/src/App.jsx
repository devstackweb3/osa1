import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1 className="font-bold">give feedback</h1>
      <div className="flex">
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <h1 className="font-bold">statistics</h1>
      <div className="flex flex-col">
        <div>{good}</div>
        <div>{neutral}</div>
        <div>{bad}</div>
      </div>
    </div>
  )
}

export default App
