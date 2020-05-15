import React, { useState, FormEvent, useContext } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import { IMovie } from "../../models/movie";
import { v4 as uuid } from "uuid";
import { observer } from "mobx-react-lite";
import Store from "../../store/store";

interface IProps {
  movie: IMovie | null;
}

const MovieForm: React.FC<IProps> = ({ movie: initialFormState }) => {
  const store = useContext(Store);
  const { createMovie, editMovie, handleCancel } = store;

  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        length: 0,
        year: 0,
        genre: "",
        hasSeen: false,
        isFavourite: false
      };
    }
  };
  const [movie, setMovie] = useState<IMovie>(initializeForm);

  const handleSubmit = () => {
    if (movie.id.length === 0) {
      let newMovie = {
        ...movie,
        id: uuid()
      };
      createMovie(newMovie);
    } else {
      editMovie(movie);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setMovie({ ...movie, [name]: value });
  };

  return (
    <Card fluid>
      <Card.Content>
        {movie.id.length === 0 ? <p>Add new movie</p> : <p>Edit movie</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="title"
            value={movie.title}
            placeholder="Title"
            onChange={handleInputChange}
            required
          />
          <Form.TextArea
            name="description"
            value={movie.description}
            rows={4}
            placeholder="Description"
            onChange={handleInputChange}
            required
          />
          <Form.Input
            name="length"
            value={movie.length}
            placeholder="Length (in minutes)"
            onChange={handleInputChange}
            required
          />
          <Form.Input
            name="year"
            value={movie.year}
            placeholder="Year"
            onChange={handleInputChange}
            required
          />
          <Form.Input
            name="genre"
            value={movie.genre}
            placeholder="Genre"
            onChange={handleInputChange}
            required
          />
          <Form.Checkbox
            name="hasSeen"
            label="I've seen this movie"
            value={movie.hasSeen.toString()}
            onChange={handleInputChange}
          />
          <Form.Checkbox
            name="isFavourite"
            label="I's a favourite!"
            value={movie.isFavourite.toString()}
            onChange={handleInputChange}
          />
          <Button content="Save" icon="check" type="submit" positive />
          <Button
            content="Cancel"
            icon="times"
            onClick={() => handleCancel()}
          />
        </Form>
      </Card.Content>
    </Card>
  );
};

export default observer(MovieForm);
