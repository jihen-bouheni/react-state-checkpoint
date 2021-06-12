import React from 'react'

function Card( props) {
    return (
        <div>
            <h1>{props.card.fullName}</h1>
            <h2>{props.card.bio}</h2>
            <h2>{props.card.profession}</h2>
        <img src={props.card.imgSrc} style={{width:"20%"}}
        />
            
    
            
            
        </div>
    )
}

export default Card
