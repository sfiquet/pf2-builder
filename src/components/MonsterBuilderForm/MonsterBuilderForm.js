import React from 'react';
import data from '../../data/data';
import Heading from '../Heading/Heading';

const MonsterBuilderForm = ({monster, level, onChange}) => {

  const buildCheckboxArray = (itemArray, idPrefix) => {
    return itemArray.map(item => (
      <div className="form-check" key={item}>
        <input className="form-check-input" type="checkbox" name={item} id={`${idPrefix}_${item}`} checked={monster[item]} onChange={onChange} />
        <label className="form-check-label" htmlFor={`${idPrefix}_${item}`}>
          {item}
        </label>
      </div>
    ));
  };

  if (!monster){
    monster = {};
  }

//  const roadmapOptions = Object.keys(data.roadmaps).map(item => (<option key={item} value={item}>{item}</option>));
  const alignmentOptions = data.alignments.map(item => (<option key={item} value={item}>{item}</option>));
  const sizeOptions = data.sizes.map(item => (<option key={item} value={item}>{item}</option>));
  const typeOptions = data.typeTraits.map(item => (<option key={item} value={item}>{item}</option>));

  const energyOptions = buildCheckboxArray(data.energyTraits, 'trait');
  const categoryOptions = buildCheckboxArray(data.categoryTraits, 'trait');
  const physicalOptions = buildCheckboxArray(data.physicalTraits, 'trait');

  return (
    <form id="monsterInput" className="MonsterBuilderForm col-12 col-md-6 border rounded pt-2 pb-3 mb-2">
      
      <section className="Concept">
        <Heading className="Section-title" level={level}>Concept</Heading>

        <div className="form-group">
          <label htmlFor="concept-input">Core Concept</label>
          <input type="text" maxLength="50" id="concept-input" className="form-control" aria-describedby="concept-input-desc" value={monster.concept} name="concept" onChange={onChange}></input>
          <p className="form-control-desc" id="concept-input-desc">Define the character of the creature in a few words (e.g. in the Bestiary, the core concept for Demons is sin, for Harpies it's their ability to charm by singing)</p>
        </div>

        <div className="form-group">
          <label htmlFor="concept-notes">Concept Notes</label>
          <textarea id="concept-notes" className="form-control" aria-describedby="concept-notes-desc" value={monster.conceptNotes} name="conceptNotes" onChange={onChange}></textarea>
          <p className="form-control-desc" id="concept-notes-desc">Use this space to jot down your thoughts on the core concept</p>
        </div>

      {/*
        <div className="form-group">
          <label htmlFor="roadmap-select">Base Roadmap</label>
          <select id="roadmap-select" className="form-control">
            {roadmapOptions}
          </select>
        </div>
      */}

      </section>

      <section className="General">
        <Heading className="Section-title" level={level}>General</Heading>

      {/* level, alignment and size */}
        <div className="form-row">
          <div className="col-12 col-sm-3">
            <div className="form-group row">
              <label htmlFor="level-input" className="col-5 col-sm-5 col-md-12 col-form-label">Level</label>
              <div className="col-4 col-sm-7 col-md-12">
                <input type="number" id="level-input" className="form-control" min="-1" max="24" value={monster.level} name="level" onChange={onChange} />
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-4">
            <div className="form-group row">
              <label htmlFor="alignment-select" className="col-5 col-sm-6 col-md-12 col-form-label">Alignment</label>
              <div className="col-4 col-sm-6 col-md-12">
                <select id="alignment-select" className="form-control" value={monster.alignment} name="alignment" onChange={onChange}>
                  {alignmentOptions}
                </select>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-5">
            <div className="form-group row">
              <label htmlFor="size-select" className="col-5 col-sm-2 col-md-12 col-form-label">Size</label>
              <div className="col-7 col-sm-10 col-md-12">
                <select id="size-select" className="form-control" value={monster.size} name="size" onChange={onChange}>
                  {sizeOptions}
                </select>
              </div>
            </div>
          </div>
        </div>

      {/* traits */}
        <div className="form-group">
          <label htmlFor="type-select">Traits: Type</label>
          <select id="type-select" className="form-control" value={monster.type} name="type" onChange={onChange}>
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

      </section>

      <section className="Defense">
        <Heading className="Section-title" level={level}>Defense</Heading>
      </section>

      <section className="Offense">
        <Heading className="Section-title" level={level}>Offense</Heading>
      </section>
    </form>
  )
};

export default MonsterBuilderForm;