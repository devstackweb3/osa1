import Part from '../../../part1/src/components/part'

const Content = (props) => {
  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet
  //SI CHEMIN D'ACCES INCOMPLET A VARIABLE/EXTRACTION DONNEES INCOMPATIBLES AVEC VALEUR DEPART -> OBJECTS ARE NOT VALID AS REACT CHILD
  //console.log(prop1.part1T)
  console.log(props)
  return (
    <div>
      <Part partTitle={props.part1T} partExC={props.part1E} />
      <Part partTitle={props.part2T} partExC={props.part2E} />
      <Part partTitle={props.part3T} partExC={props.part3E} />
    </div>
  )
}
export default Content

//<Part parts={parts} />
