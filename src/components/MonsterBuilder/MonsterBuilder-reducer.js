import traitsReducer from './Traits-reducer';

const initialState = {
  concept: '',
  level: 0,
  alignment: 'N',
  size: 'Medium',
  traits: [],
  abilities: {
    // value is ignored unless scale is 'Manual'
    Str: {scale: 'Moderate', value: 0}, 
    Dex: {scale: 'Moderate', value: 0}, 
    Con: {scale: 'Moderate', value: 0}, 
    Int: {scale: 'Moderate', value: 0}, 
    Wis: {scale: 'Moderate', value: 0}, 
    Cha: {scale: 'Moderate', value: 0},
  },
  perception: {scale: 'Moderate', value: 0},
  senses: '',
  languages: '',
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

const createScaleReducer = (reducerName, initValue) => {
  return (state = initValue, action) => {
    const {name, value} = action;
    const isValueChange = name === reducerName;
    if (name !== reducerName && name !== `${reducerName}_scale`){
      return state;
    }

    switch (action.type){
      case 'CHANGE_INPUT':
        return changeScale(state, isValueChange, value);
      default:
        return state;
    }
  };
};

const changeScale = (scaleState, isValueChange, value) => {
  if (isValueChange) {
    return {...scaleState, value: parseInt(value, 10)};
  }

  return {...scaleState, scale: value};
};

const StrReducer = createScaleReducer('Str', {scale: 'Moderate', value: 0});
const DexReducer = createScaleReducer('Dex', {scale: 'Moderate', value: 0});
const ConReducer = createScaleReducer('Con', {scale: 'Moderate', value: 0});
const IntReducer = createScaleReducer('Int', {scale: 'Moderate', value: 0});
const WisReducer = createScaleReducer('Wis', {scale: 'Moderate', value: 0});
const ChaReducer = createScaleReducer('Cha', {scale: 'Moderate', value: 0});

const perceptionReducer = createScaleReducer('Perception', {scale: 'Moderate', value: 0});
const sensesReducer = createInputReducer('senses', '');
const languagesReducer = createInputReducer('languages', '');

const reducer = (state = initialState, action = {}) => {
  return {
    concept: conceptReducer(state.concept, action),
    level: levelReducer(state.level, action),
    alignment: alignmentReducer(state.alignment, action),
    size: sizeReducer(state.size, action),
    traits: traitsReducer(state.traits, action),
    abilities: {
      Str: StrReducer(state.abilities.Str, action),
      Dex: DexReducer(state.abilities.Dex, action),
      Con: ConReducer(state.abilities.Con, action),
      Int: IntReducer(state.abilities.Int, action),
      Wis: WisReducer(state.abilities.Wis, action),
      Cha: ChaReducer(state.abilities.Cha, action),
    },
    perception: perceptionReducer(state.perception, action),
    senses: sensesReducer(state.senses, action),
    languages: languagesReducer(state.languages, action),
  };
};

export default reducer;
