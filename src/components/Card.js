import React from 'react'

export default function Card(props) {
    console.log(props)

    return (
        <div className='card'>
            <img src={`/images/${props.img}`} alt={props.name} className='card-img' />
            <div className='card-detail'>
              <div className='card-location'>
                 <p className='card-country'>{props.location}</p>
                 <a href={props.link} target='_blank' rel="noreferrer" className='card-link'>View on Google Maps</a>
              </div>
              <h1 className='card-name'>{props.name}</h1>
              <p className='card-date'>{props.date}</p>
              <p className='card-description'>{props.description}</p>
            </div>
        </div>
    )
}