const DisplayedOverview = (props) => {
  console.log(props.currAnecdote)
  //console.log(props.votesAnecdoteCount)
  if (props.currAnecdote === 0) {
    return <div>the app is used by pressing the buttons</div>
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <div>{props.currAnecdote}</div>
      <br /> <div>has {props.votesAnecdoteCount} votes</div>
    </div>
  )
}

export default DisplayedOverview

// ETAPE 1 | Analyse état index unique si plus grand que 0 -> retourne votes comptabilisés

// ETAPE 2 |

// Comment parvenir à analyser l'état de tous les index du tableau comme étant équivalent à 0 ?

/*
Effectuer un mapping sur l'ensemble du tableau pour comparer les valeurs les plus grandes des plus petites. 
*/
