import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

class HomePage extends React.Component {

  render() {
    return(
      <div>
        <Jumbotron className="jumbo">
          <h1>Coding Box</h1>
        </Jumbotron>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia amet esse, beatae nostrum dolor fugiat ipsam vero maxime ut, possimus architecto quisquam? Architecto dolores quibusdam porro quae quis doloremque explicabo!</p>

        <Button>Subscribe</Button>

      </div>

    );
  }
}

export default HomePage;
