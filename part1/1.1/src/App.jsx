import Header from '../../part1/src/components/header'
import Content from '../../part1/src/components/content'
import Total from '../../part1/src/components/total'

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    { exTitle: 'Fundamentals of React', exCompleted: '10' },
    { exTitle: 'Using props to pass data', exCompleted: '7' },
    { exTitle: 'State of a component', exCompleted: '14' },
  ]
  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet

  /*const partsMapping = () => {
    return parts.map((part, index) => {
      // eslint-disable-next-line no-extra-semi
      ;<Content key={index}>
        {part.exTitle} {part.exCompleted}
      </Content>
    })
  }*/

  const exercises = [{ exRealized: 10 }, { exRealized: 7 }, { exRealized: 14 }]

  return (
    <div>
      <Header course={course} />
      <Content {...parts} />
      <Total {...exercises} />
    </div>
  )
}

export default App
