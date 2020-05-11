import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, Image, List } from "semantic-ui-react";
import * as onion from "../../onion.png";
import axios from "axios";
import { IMovie } from "../models/movie";

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    axios
    .get<IMovie[]>('http://localhost:5000/api/movies')
    .then(response => {
      setMovies(response.data)
    });
  }, [])
  
  return (
    <div className="App">
      <Header as="h2">
        <Image circular src={onion} /> unfreshOnions
      </Header>
      <List>
        {movies.map(movie => (
          <div className="list-item">
            <List.Item key={movie.id}>Title: {movie.title}</List.Item>
            <List.Item key={movie.id}>
              Description: {movie.description}
            </List.Item>
            <List.Item key={movie.id}>Lenght: {movie.length}</List.Item>
            <List.Item key={movie.id}>Year: {movie.year}</List.Item>
            <List.Item key={movie.id}>Genre: {movie.genre}</List.Item>
            <List.Item key={movie.id}>Has seen: {movie.hasseen}</List.Item>
            <List.Item key={movie.id}>
              Is Favourite: {movie.isfavourite}
            </List.Item>
          </div>
        ))}
      </List>
    </div>
  );
};

export default App;
