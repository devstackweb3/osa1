const Content = (parts) => {
  //Sélection variable représentant le tableau | Sélection N° item tableau (partance) | Sélection variable représentant l'objet
  //SI CHEMIN D'ACCES INCOMPLET A VARIABLE/EXTRACTION DONNEES INCOMPATIBLES AVEC VALEUR DEPART -> OBJECTS ARE NOT VALID AS REACT CHILD
  return (
    <div>
      <span>{parts[0].exTitle}</span>
      <br />
      <span>{parts[1].exTitle}</span>
      <br />
      <span>{parts[2].exTitle}</span>

      <span>{parts[0].exCompleted}</span>
      <br />
      <span>{parts[1].exCompleted}</span>
      <br />
      <span>{parts[2].exCompleted}</span>
    </div>
  )
}
export default Content
