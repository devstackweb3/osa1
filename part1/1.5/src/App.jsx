import Header from '../../part1/src/components/header'
import Content from '../../part1/src/components/content'
import Total from '../../part1/src/components/total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet
  console.log(course.name)
  return (
    <div>
      <Header course={course.name} />
      <Content partsList={course.parts} />
      <Total partsList={course.parts} />
    </div>
  )
}

export default App
