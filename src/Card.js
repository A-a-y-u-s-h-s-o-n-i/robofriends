import React from'react';
import './Card.css';

function Card({id,name,email}) {
    return(
        <div className='tc dib br3 ma2 pa3 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${id}`} alt='robots'/>
            <div>
                <h2 className={''}>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
