import React from 'react';
import data, {getTraitIdsByType} from '../../data/data';
import Heading from '../UI/Heading/Heading';
import TreeSelect from '../UI/TreeSelect/TreeSelect';
import ScaleInput from '../UI/ScaleInput/ScaleInput';

const MonsterBuilderForm = ({monster, level, onChange}) => {

  if (!monster){
    monster = {};
  }

  const getTreeForTraitType = (type) => getTraitIdsByType(type).map(item => ({
    ...data.traits.byId[item],
    name: item, 
    isSelected: monster.traits ? monster.traits.includes(item) : false,
  }));

  const alignmentOptions = data.alignments.map(item => (<option key={item} value={item}>{item}</option>));
  const sizeOptions = data.sizes.map(item => (<option key={item} value={item}>{item}</option>));

  const typeOptions = getTreeForTraitType('monsterType');
  const energyOptions = getTreeForTraitType('powerSource');
  const physicalOptions = getTreeForTraitType('physical');
  const defaultAbility = {scale: 'Manual', value: 0};
  const defaultAbilities = {Str: defaultAbility, Dex: defaultAbility, Con: defaultAbility, Int: defaultAbility, Wis: defaultAbility, Cha: defaultAbility};
  const abilities = monster.abilities ? monster.abilities : defaultAbilities;
  const perception = monster.perception ? monster.perception : {scale: 'Manual', value: 0};

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
        <section className="traits">
          <Heading className="Section-title" level={level+1}>Traits</Heading>
          <TreeSelect className="typeTraits" treeNodes={typeOptions} title="Type Traits:" idPrefix="type" onChange={onChange}/>
          <TreeSelect className="powerTraits" treeNodes={energyOptions} title="Element & Energy Traits:" idPrefix="energy" onChange={onChange}/>
          <TreeSelect className="physicalTraits" treeNodes={physicalOptions} title="Physical & Mental Traits:" idPrefix="physical" onChange={onChange}/>
        </section>

        {/* ability modifiers */}
        <section className="abilityMods">
          <Heading className="Section-title" level={level+1}>Ability Modifiers</Heading>
          <ScaleInput title='Str' value={abilities.Str.value} scales={data.scales.common} scaleValue={abilities.Str.scale} onChange={onChange} />
          <ScaleInput title='Dex' value={abilities.Dex.value} scales={data.scales.common} scaleValue={abilities.Dex.scale} onChange={onChange} />
          <ScaleInput title='Con' value={abilities.Con.value} scales={data.scales.common} scaleValue={abilities.Con.scale} onChange={onChange} />
          <ScaleInput title='Int' value={abilities.Int.value} scales={data.scales.common} scaleValue={abilities.Int.scale} onChange={onChange} />
          <ScaleInput title='Wis' value={abilities.Wis.value} scales={data.scales.common} scaleValue={abilities.Wis.scale} onChange={onChange} />
          <ScaleInput title='Cha' value={abilities.Cha.value} scales={data.scales.common} scaleValue={abilities.Cha.scale} onChange={onChange} />
        </section>

        {/* perception and senses */}
        <section className="perception">
          <Heading className="Section-title" level={level+1}>Perception and Senses</Heading>
          <ScaleInput title='Perception' value={perception.value} scales={data.scales.full} scaleValue={perception.scale} onChange={onChange} />
          
          <div className="form-group">
            <label htmlFor="senses">Senses</label>
            <textarea id="senses" className="form-control" value={monster.senses} name="senses" onChange={onChange}></textarea>
          </div>
        </section>

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