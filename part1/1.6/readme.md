# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Exercise Objective 

Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:

```jsx
//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
![image](https://github.com/devstackweb3/osa1/assets/118926098/5ab999a5-9038-483a-9ebc-9949b6ae1c4c)

```jsx
//app.jsx
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

# Exercise Progress 
After 2 days of reading part b, part c and beginning of part d, I have understood the fundamentals of REACT rendering & re-rendering. At the start of exercise, I haven't stated the reason why the data triggering changes were stored only during unique browser session use. I initially assumed that the usestate method would record the state of change of any data items beyond a single browser session. It isn't the case. I over-focused my attention on the reading process instead of starting the practice side, wondering about finding documentation detailing the state functioning of data cache storage process through useState() method.  

## Rendering Method
Represents the initial rendering UI overview to the REAL DOM displaying components overview architecture and visibility. 

![REACT Rendering](https://github.com/devstackweb3/osa1/assets/118926098/e0796158-d685-4e96-ba19-947515d6eb6f)


## Re-Rendering Method
The re-rendering process is triggered by events occuring in data statement changes amongst REACT components. 

Examples : 
click event | socket connexions | API calls | useState useRef methods | listenings

Additional Source : https://medium.com/simform-engineering/react-re-rendering-exploring-what-why-and-how-d180d5305892
