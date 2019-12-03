import {describe} from 'riteway';
import {changeInput} from './actions';
import reducer from './MonsterBuilder-reducer';

describe('MonsterBuilder reducer', async assert => {
  const initialState = {
    concept: '',
    level: 0,
    alignment: 'N',
    size: 'Medium',
    traits: [],
    abilities: {
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

  {
    const noargs = undefined;
    assert({
      given: 'no arguments',
      should: 'return the valid initial state',
      actual: JSON.stringify(reducer(noargs)),
      expected: JSON.stringify(initialState)
    });
  }

  {
    const state = {...initialState, concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid']};
    const noAction = undefined;
    assert({
      given: 'a state and no action',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, noAction)),
      expected: JSON.stringify(state)
    });
  }

  {
    const state = {...initialState};
    const action = {type: 'weirdType'};
    assert({
      given: 'a state and an invalid action',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, action)),
      expected: JSON.stringify(state)
    });
  }

  // concept
  {
    const newConcept = 'fire';
    assert({
      given: 'initial state and an input change on concept',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('concept', newConcept))),
      expected: JSON.stringify({...initialState, concept: newConcept})
    });
  }

  {
    const newConcept = 'singing';
    assert({
      given: 'initial state and an input change on concept',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('concept', newConcept))),
      expected: JSON.stringify({...initialState, concept: newConcept})
    });
  }

  // level
  {
    const newLevel = 5;
    assert({
      given: 'initial state and an input change on level',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('level', newLevel))),
      expected: JSON.stringify({...initialState, level: newLevel})
    });
  }

  {
    const newLevel = -1;
    assert({
      given: 'initial state and an input change on level',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('level', newLevel))),
      expected: JSON.stringify({...initialState, level: newLevel})
    });
  }

  // alignment
  {
    const newAlignment = 'CE';
    assert({
      given: 'initial state and an input change on alignment',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('alignment', newAlignment))),
      expected: JSON.stringify({...initialState, alignment: newAlignment})
    });
  }

  {
    const newAlignment = 'LG';
    assert({
      given: 'initial state and an input change on alignment',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('alignment', newAlignment))),
      expected: JSON.stringify({...initialState, alignment: newAlignment})
    });
  }

  // size
  {
    const newSize = 'Small';
    assert({
      given: 'initial state and an input change on size',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('size', newSize))),
      expected: JSON.stringify({...initialState, size: newSize})
    });
  }

  {
    const newSize = 'Large';
    assert({
      given: 'initial state and an input change on size',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput('size', newSize))),
      expected: JSON.stringify({...initialState, size: newSize})
    });
  }

  // traits
  {
    const newTrait = 'fey';
    assert({
      given: 'initial state and an add trait action',
      should: 'change the correct state property',
      actual: JSON.stringify(reducer(undefined, changeInput(newTrait, true))),
      expected: JSON.stringify({...initialState, traits: [newTrait]})
    });
  }

  {
    const state = {...initialState, concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const newTrait = 'dragon';
    assert({
      given: 'a valid state and an add trait action',
      should: 'add the new trait to the traits array property',
      actual: JSON.stringify(reducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify({...state, traits: [...state.traits, newTrait]})
    });
  }

  {
    const state = {...initialState, concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const newTrait = 'humanoid';
    assert({
      given: 'a valid state and an add trait action for a trait already present in the traits property',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, changeInput(newTrait, true))),
      expected: JSON.stringify(state)
    });
  }

  {
    const trait = 'humanoid';
    assert({
      given: 'initial (empty) state and a deselect trait action',
      should: 'return the given initial state',
      actual: JSON.stringify(reducer(undefined, changeInput(trait, false))),
      expected: JSON.stringify(initialState)
    });
  }

  {
    const state = {...initialState, concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const trait = 'humanoid';
    assert({
      given: 'a valid state and a deselect trait action for a trait already present in the traits property',
      should: 'remove the trait from the traits property',
      actual: JSON.stringify(reducer(state, changeInput(trait, false))),
      expected: JSON.stringify({...state, traits: ['amphibious']})
    });
  }

  {
    const state = {...initialState, concept: 'fire', level: 1, alignment: 'CG', size: 'Large', traits: ['humanoid', 'amphibious']};
    const trait = 'fey';
    assert({
      given: 'a valid state and a deselect trait action for a trait absent from the traits property',
      should: 'return the given state',
      actual: JSON.stringify(reducer(state, changeInput(trait, false))),
      expected: JSON.stringify(state)
    });
  }

  // abilities
  {
    const should = 'change the scale property for Str'
    const scale = 'High';
    assert({
      given: 'initial state and an input change on Str scale',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Str_scale', scale))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Str: {
            ...initialState.abilities.Str, scale: scale
          }
        }
      })
    });
  }

  {
    const should = 'change the value property for Str'
    const value = 5;
    assert({
      given: 'initial state and an input change on Str value',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Str', value))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Str: {
            ...initialState.abilities.Str, value: value
          }
        }
      })
    });
  }

  {
    const should = 'change the scale property for Dex'
    const scale = 'High';
    assert({
      given: 'initial state and an input change on Dex scale',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Dex_scale', scale))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Dex: {
            ...initialState.abilities.Dex, scale: scale
          }
        }
      })
    });
  }

  {
    const should = 'change the value property for Dex'
    const value = 5;
    assert({
      given: 'initial state and an input change on Dex value',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Dex', value))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Dex: {
            ...initialState.abilities.Dex, value: value
          }
        }
      })
    });
  }

  {
    const should = 'change the scale property for Con'
    const scale = 'High';
    assert({
      given: 'initial state and an input change on Con scale',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Con_scale', scale))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Con: {
            ...initialState.abilities.Con, scale: scale
          }
        }
      })
    });
  }

  {
    const should = 'change the value property for Con'
    const value = 5;
    assert({
      given: 'initial state and an input change on Con value',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Con', value))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Con: {
            ...initialState.abilities.Con, value: value
          }
        }
      })
    });
  }

  {
    const should = 'change the scale property for Int'
    const scale = 'High';
    assert({
      given: 'initial state and an input change on Int scale',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Int_scale', scale))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Int: {
            ...initialState.abilities.Int, scale: scale
          }
        }
      })
    });
  }

  {
    const should = 'change the value property for Int'
    const value = 5;
    assert({
      given: 'initial state and an input change on Int value',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Int', value))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Int: {
            ...initialState.abilities.Int, value: value
          }
        }
      })
    });
  }

  {
    const should = 'change the scale property for Wis'
    const scale = 'High';
    assert({
      given: 'initial state and an input change on Wis scale',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Wis_scale', scale))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Wis: {
            ...initialState.abilities.Wis, scale: scale
          }
        }
      })
    });
  }

  {
    const should = 'change the value property for Wis'
    const value = 5;
    assert({
      given: 'initial state and an input change on Wis value',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Wis', value))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Wis: {
            ...initialState.abilities.Wis, value: value
          }
        }
      })
    });
  }

  {
    const should = 'change the scale property for Cha'
    const scale = 'High';
    assert({
      given: 'initial state and an input change on Cha scale',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Cha_scale', scale))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Cha: {
            ...initialState.abilities.Cha, scale: scale
          }
        }
      })
    });
  }

  {
    const should = 'change the value property for Cha'
    const value = 5;
    assert({
      given: 'initial state and an input change on Cha value',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Cha', value))),
      expected: JSON.stringify({
        ...initialState, abilities: {
          ...initialState.abilities, Cha: {
            ...initialState.abilities.Cha, value: value
          }
        }
      })
    });
  }

  // perception
  {
    const should = 'change the scale property for perception'
    const scale = 'High';
    assert({
      given: 'initial state and an input change on perception scale',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Perception_scale', scale))),
      expected: JSON.stringify({
        ...initialState, perception: {
          ...initialState.perception, scale: scale
        }
      })
    });
  }

  {
    const should = 'change the value property for perception'
    const value = 5;
    assert({
      given: 'initial state and an input change on perception value',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('Perception', value))),
      expected: JSON.stringify({
        ...initialState, perception: {
          ...initialState.perception, value: value
        }
      })
    });
  }

  // senses
  {
    const should = 'change the senses property'
    const senses = 'darkvision, scent (imprecise) 120 feet, true seeing';
    assert({
      given: 'initial state and an input change on senses',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('senses', senses))),
      expected: JSON.stringify({
        ...initialState, senses
      })
    });
  }

  // languages
  {
    const should = 'change the languages property'
    const languages = 'Common, Speak with Animals';
    assert({
      given: 'initial state and an input change on languages',
      should,
      actual: JSON.stringify(reducer(undefined, changeInput('languages', languages))),
      expected: JSON.stringify({
        ...initialState, languages
      })
    });
  }

});
