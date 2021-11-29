import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
  static contextType = ThemeContext;
  render() { 
    const { isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;
    return <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
      <ul>
        <li style={{ background: theme.ui }}>Pride and Prejudice</li>
        <li style={{ background: theme.ui }}>Winnie the Pooh</li>
        <li style={{ background: theme.ui }}>Fear and Loathing in Las Vegas</li>
      </ul>
    </div>;
  }
}
 
export default BookList;