import './App.css';
import React from 'react'
import Card from './components/card';
import {nanoid} from 'nanoid'


function App() {
  const [pokemonArray, setPokemonArray] = React.useState([])
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon/?limit=10")
  
  
  async function api(){
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data.results)
    setUrl(data.next)
    

    function createPokemonObject(result){
      if (result)
        result.forEach(async (pokemon) => {
          const res = await fetch(pokemon.url)
          const data = await res.json()
          setPokemonArray(prev => [...prev, data])
        })
    }

    createPokemonObject(data.results)
    //await console.log(pokemonArray)
  }


  React.useEffect(() => {
    api()
    
  },[])

  const cardElements = pokemonArray.map(pokemon => {
    return <Card 
              key={nanoid()}
              id={pokemon.id}
              name={pokemon.name}
              imgUrl={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              ability={pokemon.abilities}
              weight={pokemon.weight}
              height={pokemon.height}
              stats={pokemon.stats}
            />
  })


  return (
    <div className="App">
      <div className='main'>
        <h1>Pokemon</h1>
        <div className='main-cont'>
          {cardElements}
        </div>
        <button className='btn-loadmore' onClick={api}>Load More</button>
      </div>
    </div>
  );
}

export default App;
