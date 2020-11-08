import React, { useState, useEffect } from 'react';
import axios from "axios";
import BookData from "../components/BookData/BookData"
import "../App.css";

const Saved = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        axios.get("/api/books").then((res) => {
            setBooks(res.data);
        });
    };

    return (
        <div>
            <div className="container text-center">
                <h2>Saved Books</h2>
                <ul>
                    {books.map((book) => (
                        <BookData
                            key={book._id}
                            id={book._id}
                            link={book.link}
                            authors={book.author}
                            title={book.title}
                            description={book.description}
                            thumbnail={book.image}
                            loadBooks={loadBooks}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Saved;