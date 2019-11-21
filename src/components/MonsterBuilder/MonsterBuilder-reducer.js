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

const createAbilityReducer = (reducerName, initValue) => {
  return (state = initValue, action) => {
    const {name, value} = action;
    const isValueChange = name === reducerName;
    if (name !== reducerName && name !== `${reducerName}_scale`){
      return state;
    }

    switch (action.type){
      case 'CHANGE_INPUT':
        return changeAbility(state, isValueChange, value);
      default:
        return state;
    }
  };
};

const changeAbility = (abilityState, isValueChange, value) => {
  if (isValueChange) {
    return {...abilityState, value: parseInt(value, 10)};
  }

  return {...abilityState, scale: value};
};

const StrReducer = createAbilityReducer('Str', {scale: 'Moderate', value: 0});
const DexReducer = createAbilityReducer('Dex', {scale: 'Moderate', value: 0});
const ConReducer = createAbilityReducer('Con', {scale: 'Moderate', value: 0});
const IntReducer = createAbilityReducer('Int', {scale: 'Moderate', value: 0});
const WisReducer = createAbilityReducer('Wis', {scale: 'Moderate', value: 0});
const ChaReducer = createAbilityReducer('Cha', {scale: 'Moderate', value: 0});


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
    // currently hard-coded
    perception: state.perception,
  };
};

export default reducer;
