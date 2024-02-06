## Exercise Objective : 
Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:
![image](https://github.com/devstackweb3/osa1/assets/118926098/4e3c63e9-2ac3-4307-a16c-37c10f4af382)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in the material and previous exercise. File main.jsx is as follows:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

You can use the code below as a starting point for the App.jsx file:
```jsx
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```

## Storage System (cache VS server) : 
### How to reach a functionning system page only caching data & restarting its data statement cumulation once page re-rendered not taking into consideration previous history statement ?
Reversed Engineering | Destructuring Questions Process
#### How data cache storage works in REACT ? 

#### How rendering web pages works in REACT ? 

#### Page Rendering Method
So far all of our applications have been such that their appearance remains the same after the initial rendering. In the REACT world, it means telling a component to update and redraw itself, even if nothing has really changed in the data (state/props) it uses.
![REACT Rendering](https://github.com/devstackweb3/osa1/assets/118926098/a2cf7678-98d6-4a8c-8fbe-95c614dcaac4)

#### Page Re-rendering Method

#### Forcing Method 
The refresh() function called 3 times, re-renders the app 3 times. Each time the value is updated to its new **counter** state.

```jsx
const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App
```

```jsx
//main.jsx
let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

refresh()
counter += 1
refresh()
counter += 1
refresh()
```

