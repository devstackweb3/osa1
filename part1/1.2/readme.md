# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Refactoring code in 3 Components : Header | Content | Total
All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content no much renders the parts and their number of exercises delegated to <Part /> children components inside itself, and Total renders the total number of exercises.

## Refactoring code in 3 Identical Sub-Children Components stated inside "Content"
Each sub-children component is named <Part /> and much renders respectively the exercice title and number of exercices made.
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

# Exercice Progress 

I started with searching the common method used as map() or for each() but with implementing those functions I stated that it was a too optimised version for what was asked by exercice. 
After 4-6 hours struggling with property interpretation through parameter entrancy of REACT component called Content, due to the fact the component was interpreted by the methods as an object instead of an array, I finally found the solution of value variables rendering and only after, saw the misinterpretation logical architecture involved. 
I then unstructured my code to return to the basis of interpretation & correct it accordingly. 

## MAP() | DOESN’T APPLY TO OBJECT VARIABLES (REACT PROPS)

```jsx
TypeError : **parts.map** is not a function 
```

The method .map() doesn't recognize the referenced variable, as a variable of array type. Recognition of variable of type Object. 

```jsx
const Part = (**parts**) => { //paramètre de propriété "**parts**" interprété comme objet à la place d'un tableau 
  const dataArrayParts = **parts.map**((part) => (
    <li key={part.id}>
      <span>{part.exTitle}</span> <span>{part.exCompleted}</span>
    </li>
  ))
return (
<></>
)
```

## How to access the variable property through a property declared as a parameter entrancy in a REACT component ?

### 1st Step Solution | Object -> Array Type attribution : 
Change the variable type interpretation. 
```jsx
const parts = [props]
```

### 2nd Step Solution | Test access to variable with console.log() : 
Objective is to have an overview of gradation accessibility of data stated inside the array of properties. Realizing a successive of different tests with console.log permits to have the necessary global overview. 
```jsx
console.log(parts)
console.log(parts[0])
console.log(parts[0].listParts)
```
If no renders available, this means there is a problem with the parameter entrancy declared. Adapt it as an object "{""}"

## 2.5 Step Solution | General root path variable attribution
Once the targeted object, in this context this is one of the three items of the array, is returned through console.log, register a new variable reference as root path item. 
```jsx
const partsArray = parts[0].listParts
```

## 3d Step Solution | Create the sub-child component named Part 
The initial configuration, the parameters properties were initiated normally without curly braces. Through a series of console.log tests, I have discovered the access to properties from the parent component weren't possible. 

```jsx
const Part = ({ partTitle, partExC }) => {
  //const partsArray = Object.values(parts)
  //const partsArray = [parts]
  //console.log(partsArray[0].partTitle)
  //console.log(partsArray[0].partExC)
  //console.log(partTitle)
  //console.log(partExC)

  return (
    <div>
      <div>{partTitle}</div>
      <div>{partExC}</div>
    </div>
  )
}

export default Part
```
