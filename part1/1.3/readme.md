
## Exercice Objective : 
Modify the variable definitions of the App component as follows and also refactor the application so that it still works:
```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

## Exercice Process : 
Realised in less than 45 minutes following the first statement understandings of data interactions between props. I encountered a little confusion on the props entrancy parameter declared inside the content REACT componant that I initially divided into 3 prop before seeing with console.log() tests 1 prop was responsible of rethrieving the 3 seperated objects declared previously in the app.jsx file. 
