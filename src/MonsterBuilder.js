import React, {Component, Fragment} from 'react';
import data from './data';
import MonsterProfile from './MonsterProfile';
import './MonsterBuilder.css';

class MonsterBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      concept: '',
      level: 0,
      alignment: 'N',
      size: 'Medium',
      type: 'humanoid',
      traits: [],
    'aeon': false,
    'acid': false,
    'air': false,
    'angel': false,
    'archon': false,
    'azata': false,
    'cold': false,
    'daemon': false,
    'demon': false,
    'devil': false,
    'earth': false,
    'electricity': false,
    'fire': false,
    'inevitable': false,
    'protean': false,
    'psychopomp': false,
    'rakshasa': false,
    'spirit': false,
    'swarm': false,
    'water': false,
    'amphibious': false,
    'aquatic': false,
    'incorporeal': false,
    'mindless': false,
    };
    this.handleConceptChange = this.handleConceptChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleAlignmentChange = this.handleAlignmentChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleTraitChange = this.handleTraitChange.bind(this);
  }

  handleConceptChange(e){
    this.setState({concept: e.target.value});
  }
  handleLevelChange(e){
    this.setState({level: e.target.value});
  }
  handleAlignmentChange(e){
    this.setState({alignment: e.target.value});
  }
  handleSizeChange(e){
    this.setState({size: e.target.value});
  }
  handleTypeChange(e){
    this.setState({type: e.target.value});
  }
  handleTraitChange(e){
    this.setState({[e.target.name]: e.target.checked});
  }

  buildCheckboxArray(itemArray, idPrefix){
    return itemArray.map(item => (
      <div className="form-check" key={item}>
        <input className="form-check-input" type="checkbox" name={item} id={`${idPrefix}_${item}`} checked={this.state[item]} onChange={this.handleTraitChange} />
        <label className="form-check-label" htmlFor={`${idPrefix}_${item}`}>
          {item}
        </label>
      </div>
    ));
  }

  render(){
    const roadmapOptions = Object.keys(data.roadmaps).map(item => (<option key={item} value={item}>{item}</option>));
    const alignmentOptions = data.alignments.map(item => (<option key={item} value={item}>{item}</option>));
    const sizeOptions = data.sizes.map(item => (<option key={item} value={item}>{item}</option>));
    const typeOptions = data.typeTraits.map(item => (<option key={item} value={item}>{item}</option>));

    const energyOptions = this.buildCheckboxArray(data.energyTraits, 'trait');
    const categoryOptions = this.buildCheckboxArray(data.categoryTraits, 'trait');
    const physicalOptions = this.buildCheckboxArray(data.physicalTraits, 'trait');

    return (
      <Fragment>
        <h2>Monster Builder</h2>
        <div className="row">
          <form id="monsterInput" className="col-12 col-md-6 border rounded pt-2 pb-3 mb-2">
            
            <fieldset className="form-group">
              <legend>Concept and Roadmap</legend>

              <div className="form-group">
                <label htmlFor="concept-input">Core Concept</label>
                <textarea id="concept-input" className="form-control" value={this.state.concept} onChange={this.handleConceptChange}></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="roadmap-select">Base Roadmap</label>
                <select id="roadmap-select" className="form-control">
                  {roadmapOptions}
                </select>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend>Stat Block</legend>

              <div className="form-group">
                <label htmlFor="level-input">Level</label>
                <input type="number" id="level-input" className="form-control" min="-1" max="24" value={this.state.level} onChange={this.handleLevelChange} />
              </div>

              <div className="form-group">
                <label htmlFor="alignment-select">Alignment</label>
                <select id="alignment-select" className="form-control" value={this.state.alignment} onChange={this.handleAlignmentChange}>
                  {alignmentOptions}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="size-select">Size</label>
                <select id="size-select" className="form-control" value={this.state.size} onChange={this.handleSizeChange}>
                  {sizeOptions}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="type-select">Traits: Type</label>
                <select id="type-select" className="form-control" value={this.state.type} onChange={this.handleTypeChange}>
                  {typeOptions}
                </select>
              </div>

              <fieldset className="form-group">
                <legend className="MonsterBuilder-legend">Element & Energy Traits:</legend>
                {energyOptions}
              </fieldset>

              <fieldset className="form-group">
                <legend className="MonsterBuilder-legend">Category Traits:</legend>
                {categoryOptions}
              </fieldset>

              <fieldset className="form-group">
                <legend className="MonsterBuilder-legend">Physical & Mental Traits:</legend>
                {physicalOptions}
              </fieldset>

            </fieldset>
          </form>
          <output form="monsterInput" className="col-12 col-md-6 d-block border rounded py-2 mb-2">
            <MonsterProfile monster={this.state} />
          </output>
        </div>
      </Fragment>
    );
  }
};

export default MonsterBuilder;