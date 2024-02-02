const Total = (props) => {
  //console.log(props.partsList[0].exercises)
  const arrPart1 = props.partsList[0]
  const arrPart2 = props.partsList[1]
  const arrPart3 = props.partsList[2]
  return (
    <div>
      <p>
        Number of exercises{' '}
        {arrPart1.exercises + arrPart2.exercises + arrPart3.exercises} years old
      </p>
    </div>
  )
}
export default Total
