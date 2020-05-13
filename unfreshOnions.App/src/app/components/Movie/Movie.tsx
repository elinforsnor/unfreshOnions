import React, { useEffect, useState, useContext } from "react";
import { Item, Icon, Button } from "semantic-ui-react";
import { IMovie } from "../../models/movie";
import axios from "axios";
import { observer } from "mobx-react-lite";
import Store from "../../store/store";

interface IProps {
  movie: IMovie;
}
const Movie: React.FC<IProps> = ({ movie }) => {
  const [poster, setPoster] = useState("");
  const API_KEY = "28259fd1";

  useEffect(() => {
    axios({
      method: "get",
      url: `http://www.omdbapi.com/?s=${movie.title}&apikey=${API_KEY}`,
      responseType: "json"
    })
      .then(response => response)
      .then(response => {
        setPoster(response.data.Search[0].Poster);
      });
  }, [movie.title]);

  const store = useContext(Store);
  const { selectMovie, deleteMovie } = store;

  return (
    <Item style={{ paddingTop: "20px" }}>
      <Item.Image src={poster}></Item.Image>
      <Item.Content>
        <Item.Header as="a">{movie.title}</Item.Header>
        <Item.Meta>
          <span className="genre">{movie.genre}</span>
        </Item.Meta>
        <Item.Meta>
          <Icon name="time" />
          <span className="length">{movie.length} minutes</span>
        </Item.Meta>
        <Item.Meta>
          <span>I've seen this movie: </span>
          {movie.hasSeen && <Icon name="check" />}
        </Item.Meta>
        <Item.Meta>
          <span>Favourite: </span>
          {movie.isFavourite && <Icon name="check" />}
        </Item.Meta>
        <Item.Description>{movie.description}</Item.Description>
        <Item.Extra>
          <Button
            basic
            size="mini"
            onClick={() => selectMovie(movie.id)}
            content="Edit"
          />
          <Button
            basic
            size="mini"
            color="red"
            onClick={() => deleteMovie(movie.id)}
            icon="times"
            content="Delete"
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default observer(Movie);
