import React from 'react'

export default function BookData(props) {

  const viewBook = () => {
    let path = props.link;
    window.open(path);
  };

  return (
    <div>
      <li id={props.id} className='list-group-item'>
        <h3>{props.title}</h3>
        <br/>
        <img
          src={props.thumbnail}
          alt={props.title}
        /><br /><br />
        <h6>{props.authors}</h6>
        <p>{props.description}</p>
        <button className="btn btn-success btn-text" onClick={() => props.saveBook(props.id)}>Save Book</button>
        <button className="btn btn-success btn-text" onClick={viewBook}>Visit Link</button>
      </li>
    </div>
  )
}