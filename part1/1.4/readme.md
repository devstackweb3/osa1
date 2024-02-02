## Exercice Objective : 
And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```
## Exercice Progress : 
The adaptability of app.jsx linking the parameter properties to the content REACT Component hadn't encountered any specific understanding problems. The interpretation of logic linking parameters has however been misunderstood once I passed through the sub-child component between content.jsx and part.jsx. After 15 minutes working on it, I realized the linking parameter process was made through the renamed process inside the < Part partName={...} />. The partName was initially declared as partsArray bringing me quickly confusion interpretation. 
After correcting it, the data were displayed correctly. 
I noticed when passing through 1.5 exercice the additional condition of passing as an array parameter type inside the Total REACT Component. Adaptability solved within 40 minutes. Struggling to reach the index variable REACT were not able to read by returning a message error of type unable to read 0.
Corrected through the declaration of a new variable referencing the starting point interpretation. 
