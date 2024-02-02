import Part from '../../../part1/src/components/part'

const Content = (props) => {
  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet
  //SI CHEMIN D'ACCES INCOMPLET A VARIABLE/EXTRACTION DONNEES INCOMPATIBLES AVEC VALEUR DEPART -> OBJECTS ARE NOT VALID AS REACT CHILD
  //console.log(props.partsList[0].name)
  //console.log(props.partsList[0].exercises)
  return (
    <div>
      <Part
        partName={props.partsList[0].name}
        partEx={props.partsList[0].exercises}
      />
      <Part
        partName={props.partsList[1].name}
        partEx={props.partsList[1].exercises}
      />
      <Part
        partName={props.partsList[2].name}
        partEx={props.partsList[2].exercises}
      />
    </div>
  )
}
export default Content

//<Part parts={parts} />
