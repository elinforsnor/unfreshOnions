import React, { useContext } from "react";
import "./Dashboard.css";
import Movielist from "../Movielist/Movielist";
import { Grid } from "semantic-ui-react";
import MovieForm from '../Form/MovieForm';
import { observer } from "mobx-react-lite";
import Store from '../../store/store';


const Dashboard: React.FC = () => {
  const store = useContext(Store);
  const {isEdit, selectedMovie} = store;
  return (
    <Grid>
      <Grid.Column width={10}>
        <Movielist 
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {isEdit &&
        <MovieForm 
        movie={selectedMovie!} 
        />
    }
      </Grid.Column>
    </Grid>
  
  );
};

export default observer(Dashboard);
