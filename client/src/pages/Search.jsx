import React, { Component } from "react";
import axios from "axios";
import BookData from "../components/BookData/BookData";

export default class Search extends Component {
    state = {
        books: [],
        query: "",
    };

    componentDidMount() {
        const queryBooks = "Harry Potter";
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${queryBooks}`)
            .then((res) => {
                console.log(res);
                this.setState({
                    books: res.data.items,
                });
            });
    }

    handleInputChange = (e) => {
        const bookName = e.target.value;

        this.setState({
            query: bookName,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query) {
            let queryBooks = this.state.query;
            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${queryBooks}`)
                .then((res) => {
                    console.log(res);
                    this.setState({
                        books: res.data.items,
                    });
                });
            console.log(this.state.books);
        } else {
            this.componentDidMount();
        }
    };

    saveBook = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <h2>Books</h2>
                <form>
                    <input
                        type='text'
                        name='Book Search'
                        value={this.state.query}
                        onChange={this.handleInputChange}
                        placeHolder='Search for a book'
                    />
                    <button
                        className='btn btn-text btn-success'
                        onClick={this.handleSubmit}
                    >
                        Search
            </button>
                </form>
                <ul className='list-group'>
                    {this.state.books.map((book) => (
                        <BookData
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            thumbnail={book.volumeInfo.imageLinks.thumbnail}
                            link={book.saleInfo.byLink}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}