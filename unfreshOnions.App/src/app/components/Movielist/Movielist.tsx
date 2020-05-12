import React, { useContext } from "react";
import { Item } from "semantic-ui-react";
import "./Movielist.css";
import Movie from "../Movie/Movie";
import { observer } from "mobx-react-lite";
import Store from '../../store/store'

const Movielist: React.FC = () => {

  const store = useContext(Store)
  const {moviesByTitle} = store;

  return (
    <Item.Group divided>
      {moviesByTitle.map(movie => (
        <Movie 
          key={movie.id} 
          movie={movie} 
        />
      ))}
    </Item.Group>
  );
};

export default observer(Movielist);