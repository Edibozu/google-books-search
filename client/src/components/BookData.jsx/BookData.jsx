import React from 'react'

export default function BookData(props) {
    return (
        <div>
            <li>
              <h3>{props.title}</h3>
              <h3>{props.authors}</h3>
              <p>{props.description}</p>
              <img
                src={props.thumbnail}
                alt={props.title}
              />
            </li>
        </div>
    )
}