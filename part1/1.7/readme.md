# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Exercise Objective : 
Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

![image](https://github.com/devstackweb3/osa1/assets/118926098/e25ef87a-1bbd-43a8-836a-c90964dc5c46)

# Exercise Process : 
In the 2nd function responsible for counting the number of positive clicks, I took a completely different approach, applying a **for loop** through the index of the allClicks array and transforming each index variable into ASCII values in order to implement a condition stipulating that if an item variable value was other than 49 assigned to the number 1, then a console.log was run, stipulating that no accounting was performed. If other, applied accounting not from the button itself assigned to the value "good" but by calling the same function: setNewPosClicks(positiveClicks.concat(1)) in other. In the meantime, I had to adapt the array variables to string format and then make the ASCII transformation method work. 

ASCII Value Acquisition Method : https://javascript.plainenglish.io/javascript-program-to-find-ascii-value-of-character-5db419fccd1a

Overview of direction development engaged at the start : 
```jsx
const App = () => {
...some code...
const [positiveClicks, setNewPosClicks] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }
...some code ...

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
  const positiveStatsClicks = () => {
    for (let i = 0; i < allClicks.length; i++) {
      let arrValueStringified = allClicks[i].toString()
      console.log(arrValueStringified)
      let ascii = arrValueStringified.charCodeAt(0)
      console.log(ascii)
      if (ascii !== 49) {
        console.log('nothing accounted')
      } else {
        setNewPosClicks(positiveClicks.concat(1)) //Positive Clicks accounted in the Array "Positive"
      }
    }
    console.log(positiveClicks)
    //error encountered on positiveClicks status statement
    let sumPositiveClicks = positiveClicks.reduce(
      (accum, currentV) => accum + currentV
    )
    let totalClicks = allClicks.length
    let positivePercentageClicks = (sumPositiveClicks / totalClicks) * 100
    return positivePercentageClicks
  }
return (...some code...)
}
```

After realizing that I could simplify it directly in the button's event listener, I adapted it to the same format as the 1st function averageStatsClicks(). 
