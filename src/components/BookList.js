import React, { Component } from 'react';

class BookList extends React.Component {
  render() { 
    return <div className="book-list">
      <ul>
        <li>Pride and Prejudice</li>
        <li>Winnie the Pooh</li>
        <li>Fear and Loathing in Las Vegas</li>
      </ul>
    </div>;
  }
}
 
export default BookList;