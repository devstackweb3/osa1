import Header from '../../part1/src/components/header'
import Content from '../../part1/src/components/content'
import Total from '../../part1/src/components/total'

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
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
  ]

  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet

  const exercises = [{ exRealized: 10 }, { exRealized: 7 }, { exRealized: 14 }]

  return (
    <div>
      <Header course={course} />
      <Content partsList={parts} />
      <Total {...exercises} />
    </div>
  )
}

export default App
