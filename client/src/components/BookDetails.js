import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  showBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>
            Genre: <strong>{book.genre}</strong>
          </p>
          <p>
            Author: <strong>{book.author.name}</strong>
          </p>
          <p>All books from this author:</p>
          <ul className="other-books">
            {book.author.books.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      );
    }
    return <div>No book selected...</div>;
  }

  render() {
    return <div id="book-details">{this.showBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: props => ({
    variables: {
      id: props.bookId
    }
  })
})(BookDetails);
