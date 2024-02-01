import Part from '../../../part1/src/components/part'

const Content = (props) => {
  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet
  //SI CHEMIN D'ACCES INCOMPLET A VARIABLE/EXTRACTION DONNEES INCOMPATIBLES AVEC VALEUR DEPART -> OBJECTS ARE NOT VALID AS REACT CHILD
  const parts = [props]
  const partsArray = parts[0].listParts
  //console.log(parts)
  //console.log(parts[0].listParts)
  //console.log(partsArray[0].id)
  console.log(partsArray[0].exTitle)
  console.log(partsArray[0].exCompleted)
  /*const partsList = partsArray.map((partArray) => (
    <div key={partArray.id}>
      <div>{partArray.exTitle}</div>
      <div>{partArray.exCompleted}</div>
    </div>
  ))*/
  return (
    <div>
      <Part
        partTitle={partsArray[0].exTitle}
        partExC={partsArray[0].exCompleted}
      />
      <Part
        partTitle={partsArray[1].exTitle}
        partExC={partsArray[1].exCompleted}
      />
      <Part
        partTitle={partsArray[2].exTitle}
        partExC={partsArray[2].exCompleted}
      />
    </div>
  )
}
export default Content

//<Part parts={parts} />
