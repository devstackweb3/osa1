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

 ### Issue 1 | How do you sum an external variable value to an internal stored value in an array(currentIndex) ?
Taking the exercise example for acquired, I firstly have integrated the "+= 1" operation to the copyAnecdotes[selected] target index. But I stated if a new array was necessary, so a new useState method has to be defined linked to this new copied array. This new useState method would be responsible of the real time state of values counted inside handleVoteClick function. 
```jsx
const [vote, setVote] = useState(0)
```
I have adapted then the copyAnecdotes[vote]. But I was yet wondering how to apply rightly the incremental process of sum between external number value to an internal stored value of 0 by default. I found out by processing the sum between the 2 kind of variables before sum it to current indexed value.
```jsx
const handleVoteClick = () => {
    const newVoteCount = (copyAnecdotes[vote] += vote + 1) //SOLVED 13.02.24 || Comment parvenir à additionner la valeur de type 1 dans l'index actuel ?
    setVote(newVoteCount) // retourne la valeur updatée de l'index actuel
    console.log(newVoteCount)
  }
```

### Issue 1.1 | Encountered the "Undefined" return value statement in handleVoteClick function 
This error occured due to the fact no new variable reference was established, causing a delay of listenning from the console.log() listenner method. 
The value listenned wasn't able to be updated by the previous increment in time. The console.log() wasn't able to recognize the value of return.

To correct the issue, an intermediary reference variable was necessary to create between state change (vote -> setVote). 

### Issue 1.2 | Problem of identifying state of index after 1st call handleVoteClick function
The pre-configured useState(0) *method const [vote, setVote] = useState(0)* doesn't identify any reference index attribution linked to the copyAnecdotes array declaration. Conducting in an erasing process after each re-call of handleVoteClick function, the new reference variable named copyAnecdotes *const copyAnecdotes = Array(8).fill(0)* had no direct link with the useState() method.

```jsx
const [vote, setVote] = useState(0)

const copyAnecdotes = Array(8).fill(0)

const handleVoteClick = () => {
    ...
  }
```
Instead it is necessary to initialize the new copied array directly in the useState method. 

```jsx
const [vote, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
```
