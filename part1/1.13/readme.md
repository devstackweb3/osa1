# Exercise Objective : 
Expand your application so that you can vote for the displayed anecdote.

![image](https://github.com/devstackweb3/osa1/assets/118926098/9fcc4589-954c-4f7c-b5f4-45cbc022aa8d)

NB store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state.

You can create a copy of an object like this:

```jsx
const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

const copy = { ...points }
// increment the property 2 value by one
copy[2] += 1
```
OR a copy of an array like this:
```jsx
const points = [1, 4, 6, 3]

const copy = [...points]
// increment the value in position 2 by one
copy[2] += 1
```
Using an array might be the simpler choice in this case. Searching the Internet will provide you with lots of hints on how to create a zero-filled array of the desired length.

# Exercise Process : 
1) create a zero-filled array of the desired length.

What is a zero-filled array ? 
A zero-filled array is an array whose value at each index is zero. 
Setting up default value stored in indexes at start as number consideration helps to increment (sum) new voting counts.

Why using a zero-filled array is interesting ? 
No conflicts encountered between initial array of string variable stated and new values as number incrementation. 
Better understanding of logic involvement between each logic.  

### Creation of the copied array counting votes
Establishing the length of the array in the first parentheses. Adding the default value at start of every index of the array, of 0 with the "fill" method. 
```jsx
const copyAnecdotes = Array(8).fill(0)
```

### Encountered the "Undefined" return value statement in handleVoteClick function 
This error occured due to the fact no new variable reference was established, causing a delay of listenning from the console.log() listenner method. 
The value listenned wasn't able to be updated by the previous increment in time. The console.log() wasn't able to recognize the value of return. 

