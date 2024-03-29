# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Exercise Objective : 
The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering :

```jsx
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
    </div>
  )
}

export default App
```

Content of the file main.jsx is the same as in previous exercises.

Find out how to generate random numbers in JavaScript, eg. via a search engine or on Mozilla Developer Network. Remember that you can test generating random numbers e.g. straight in the console of your browser.

Your finished application could look something like this:
![image](https://github.com/devstackweb3/osa1/assets/118926098/338ccf06-8968-4447-bb24-4709f8ca2c03)

# Exercise Process : 
I firstly have created a function dedicated to generate randomly new numbers inside the table of values. Multiplying the random() method by the length of the array allows you to specify the prender of random variables in the range up to the maximum variable of the existing index. 
```jsx
Math.random() * anecdotes.length
```
math.random : https://stackoverflow.com/questions/65710678/javascript-math-floor-and-math-random-question

## Problem Encountered : 
I have been confronted to a famous problem of re-rendering too much times. The infinite re-rendering in the app.jsx file was caused by the **onClickevent handler** in the <button>` element. 

Instead of passing the handleClick function as a callback, you are calling the function immediately and passing its return value (undefined) to the Click event handler. This causes the randomNumGenerator function to be called on every render, updating the selected state and triggering another re-render, creating an infinite loop.

To fix the issue, change the onClick event handler to pass the handleClick function without calling it:
```jsx
<button onClick={handleClick}>next anecdote</button>
```
