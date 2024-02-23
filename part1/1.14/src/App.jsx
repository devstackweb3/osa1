import { useState } from 'react'
import DisplayedOverview from './components/displayedAnecdote'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]
  const [selected, setSelected] = useState(0) // select represents the index status value in the anecdotes array | setSelected is the updated state of index status value in the same array
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  )

  const randomNumGenerator = () => {
    const randomI = Math.floor(Math.random() * anecdotes.length)
    return randomI
  }
  //génère un chiffre aléatoire à chaque appel de la fonction randomNumGenerator()

  const getRandomAnecdote = () => {
    const randomIndex = randomNumGenerator()
    setSelected(randomIndex)
  } //génère le prochain INDEX de référence

  const Vote = () => {
    const addVote = [...votes]
    addVote[selected] += 1
    setVotes(addVote)

    return addVote
    //const currAnecdoteWithVotes = `${currAnecdote} - Votes: ${addVote}`
    //console.log(currAnecdoteWithVotes)
  }

  const displayAnecdoteWithMaxVotes = (votes) => {
    const maxVotes = Math.max(...votes)
    const maxVotesCurrIndex = votes.indexOf(maxVotes)
    const currAnecdote = maxVotesCurrIndex
    const displayedAnecdote = anecdotes[currAnecdote]
    return displayedAnecdote
  }

  const anecdoteVotesCount = (votes) => {
    const maxVotes = Math.max(...votes)
    return maxVotes
  }
  //console.log(anecdoteVotesCount(votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <Button handleClick={Vote} text="vote" />
      <div>has {votes[selected]} votes</div>
      <Button handleClick={getRandomAnecdote} text="next anecdote" />
      <DisplayedOverview
        currAnecdote={displayAnecdoteWithMaxVotes(votes)}
        votesAnecdoteCount={anecdoteVotesCount(votes)}
      />
    </div>
  )
}

export default App
