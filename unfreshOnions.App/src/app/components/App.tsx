import React, { useEffect, Fragment, useContext } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import Navbar from "./Nav/Navbar";
import Dashboard from './Dashboard/Dashboard';
import Store from '../store/store'
import { observer } from 'mobx-react-lite';

const App = () => {
  const store = useContext(Store)

  useEffect(() => {
    store.loadMovies();
  }, [store]);

  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <Dashboard
        />
      </Container>
    </Fragment>
  );
};

export default observer(App);
