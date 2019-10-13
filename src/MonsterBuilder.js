import React, {Component, Fragment} from 'react';

const steps = [
  'Concept and Roadmap',
];

class MonsterBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 0,
    };
  }

  render(){
    return (
      <Fragment>
        <h2>Monster Builder</h2>
        <div className="row">
          <form id="monsterInput" className="col-12 col-md-6 border rounded pt-2 pb-3 mb-2">
            <h3>Concept and Roadmap</h3>
            <div className="mb-3">
              <p>Select a roadmap</p>
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-outline-info">Previous</button>
              <button type="button" className="btn btn-outline-info">Next</button>
            </div>
          </form>
          <output form="monsterInput" className="col-12 col-md-6 d-block border py-2 mb-2">
            <p>You selected:</p>
          </output>
          <output form="monsterInput" className="col-12 d-block border py-2 mb-2">
            <p>Monster</p>
          </output>
        </div>
      </Fragment>
    );
  }
};

export default MonsterBuilder;