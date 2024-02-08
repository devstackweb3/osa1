# Exercise Objective : 
Let's continue refactoring the application. Extract the following two components:

**Button** *Handles* the functionality of each feedback submission button.

**StatisticLine** for displaying a single statistic, e.g. the average score.

To be clear: the StatisticLine component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

```jsx
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}
```
The application's state should still be kept in the root App component.

# Exercise Process : 
## Refactoring Button Sub-Children Components : 


## Refactoring StatisticLine Sub-Children Components : 
When I started refactoring, I didn't anticipate the architectural organization resulting from the input values (properties) perceived by the child subcomponent <StatisticLine />. 
I decided to declare the 3 properties in each <StatisticLine /> component. 

Having realized that duplicate values were being generated, I corrected the organization of the value interpretation so that it was always a global input value perceived in the <StatisticLine /> component and that each type property was interpreted in the parent <Statistics/> component.
