import React from 'react'

function dec({ability, weight, height,stats}) {
  return (
    <div className='desc-box'>
        <p>Ability : {`${ability[0].ability.name} , ${ability[1].ability.name}`}</p>
        <p> Height : {height} <br />
            Weight : {weight}  <br />
            {stats[0].stat.name} : {stats[0].base_stat} <br />
            {stats[1].stat.name} : {stats[0].base_stat} <br />
            {stats[2].stat.name} : {stats[0].base_stat} <br />
            {stats[4].stat.name} : {stats[0].base_stat} <br />
            {stats[5].stat.name} : {stats[0].base_stat} <br />
        </p>
    </div>
  )
}

export default dec