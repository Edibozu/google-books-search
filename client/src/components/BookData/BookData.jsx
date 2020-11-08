import React from 'react'
import "./BookData.css";
import axios from "axios";
import "../../App.css";

export default function BookData(props) {

  const viewBook = () => {
    let path = props.link;
    window.open(path);
  };

  const deleteBook = (e) => {
    const id = e.target.getAttribute("id");

    axios.delete(`/api/books/${id}`).then((res) => {
      console.log(res);
      props.loadBooks();
    })
  }

  return (
    <div>
      <li id={props.id} className='list-group-item'>
        <h3>{props.title}</h3>
        <br />
        <img
          src={props.thumbnail}
          alt={props.title}
        /><br /><br />
        <h6>By: {props.authors}</h6>
        <p>{props.description}</p>
        <button className="btn btn-primary btn-text" onClick={viewBook}>Visit Link</button>
        {props.onSearch ? (
          <button
            className='btn btn-success btn-text'
            onClick={() => props.saveBook(props.id)}
          >
            Save Book
          </button>
        ) : (
            <button
              id={props.id}
              className='btn btn-danger btn-text'
              onClick={deleteBook}
            >
              Delete
            </button>
          )}
      </li>
      <br />
    </div>
  )
}