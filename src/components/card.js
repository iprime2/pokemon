import React from 'react';
import Desc from './desc';

function Card({id, name, imgUrl, ability, type, weight, height, stats}) {
    const [showMore, setShowMore] = React.useState(false)
    const style = `card-main ${type}`
    return (
    <div className={style}>
        <p>#{id}</p>
        <img src={`${imgUrl}`} alt="logo" className='img' />
        <div className="card-info">
            <h3>{name.toUpperCase()}</h3>
            <p className='type'>Type: {type}</p>
        </div>
        <button 
                className="btn" 
                onClick={() => {setShowMore(!showMore)}}>
                    {!showMore ? "Show More" : "Show Less"}</button>
        {showMore ?
            <Desc 
                ability={ability}
                weight={weight}
                height={height}
                stats={stats}

                />
            
            : ''
        }
    </div>
  )
}

export default Card