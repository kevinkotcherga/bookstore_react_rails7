import React from 'react';

const Book = ({book}) => {
  return (
    <div>
      <h1>Books from the API</h1>
      {book.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Book;
