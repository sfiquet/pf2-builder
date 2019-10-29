const changeInput = (name, value) => ({
  type: 'CHANGE_INPUT',
  name,
  value,
});

const initialState = {
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
      abilities: {Str: 0, Dex: 0, Con: 0, Int: 0, Wis: 0, Cha: 0},
      perception: 0,
};

const reducer = (state = initialState, {type, name, value} = {}) => {
  switch (type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        [name]: value,
      };
    default:
      return state;
  }
};

export {reducer, changeInput};