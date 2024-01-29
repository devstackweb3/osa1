const Total = (exercises) => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {exercises[0].exRealized +
          exercises[1].exRealized +
          exercises[2].exRealized}{' '}
        years old
      </p>
    </div>
  )
}
export default Total
