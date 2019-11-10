import traitsReducer from './Traits-reducer';

const initialState = {
      concept: '',
      level: 0,
      alignment: 'N',
      size: 'Medium',
      traits: [],
      abilities: {Str: 0, Dex: 0, Con: 0, Int: 0, Wis: 0, Cha: 0},
      perception: 0,
};

const createInputReducer = (reducerName, initValue) => {
  return (state = initValue, action) => {
    const {name} = action;
    if (name !== reducerName){
      return state;
    }

    switch (action.type){
      case 'CHANGE_INPUT':
        return action.value;
      default:
        return state;
    }
  };
};

const conceptReducer = createInputReducer('concept', '');
const levelReducer = createInputReducer('level', 0);
const alignmentReducer = createInputReducer('alignment', 'N');
const sizeReducer = createInputReducer('size', 'Medium');

const reducer = (state = initialState, action = {}) => {
  return {
    concept: conceptReducer(state.concept, action),
    level: levelReducer(state.level, action),
    alignment: alignmentReducer(state.alignment, action),
    size: sizeReducer(state.size, action),
    traits: traitsReducer(state.traits, action),
    // those are currently hard-coded
    abilities: state.abilities,
    perception: state.perception,
  };
};

export default reducer;
