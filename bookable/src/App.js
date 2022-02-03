import './App.css';
import axios from 'axios';
import Book from './components/Book';
import { useEffect, useState } from 'react';

const API_URL = "https://react-app-bookstore-kotcherga.herokuapp.com/api/v1/books";

function getAPIData() {
  return axios.get(API_URL).then((res) => res.data)
}

function App() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setBook(items);
      }
  });
  return () => (mounted = false);
}, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Book book={book}/>
    </div>
  );
}

export default App;
