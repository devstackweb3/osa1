import Header from '../../part1/src/components/header'
import Content from '../../part1/src/components/content'
import Total from '../../part1/src/components/total'

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet

  const exercises = [{ exRealized: 10 }, { exRealized: 7 }, { exRealized: 14 }]

  return (
    <div>
      <Header course={course} />
      <Content
        part1T={part1.name}
        part1E={part1.exercises}
        part2T={part2.name}
        part2E={part2.exercises}
        part3T={part3.name}
        part3E={part3.exercises}
      />
      <Total {...exercises} />
    </div>
  )
}

export default App
