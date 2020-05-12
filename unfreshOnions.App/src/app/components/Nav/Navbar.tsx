import React, { useContext } from "react";
import {
  Menu,
  Image,
  Container,
  Button
} from "semantic-ui-react";
import "./Navbar.css"
import { observer } from "mobx-react-lite";
import Store from '../../store/store'


const Navbar: React.FC = () => {
  const store = useContext(Store);
  const {handleCreateForm} = store
  
  return (
    <div>
      <Menu fixed="top">
        <Container>
          <Menu.Item header className="header">
            <Image circular src="/assets/onions.png" size="mini" alt="onion" /> unfreshOnions
          </Menu.Item>

          <Button basic icon="add" onClick={handleCreateForm} />

          <Menu.Menu position="right">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search movies..."
                />
                <i className="search link icon" />
              </div>
              <div className="results" />
            </div>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default observer(Navbar);
