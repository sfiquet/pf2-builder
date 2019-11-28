const abilityScales = {
  Extreme: {
    '-1': 3, 
    '0': 3, 
    '1': 5, 
    '2': 5, 
    '3': 5, 
    '4': 6, 
    '5': 6, 
    '6': 7, 
    '7': 7, 
    '8': 7, 
    '9': 7, 
    '10': 8, 
    '11': 8, 
    '12': 8, 
    '13': 9, 
    '14': 9, 
    '15': 9, 
    '16': 10, 
    '17': 10, 
    '18': 10, 
    '19': 11, 
    '20': 11, 
    '21': 11, 
    '22': 11, 
    '23': 11, 
    '24': 13, 
  },
  High: {
    '-1': 3, 
    '0': 3, 
    '1': 4, 
    '2': 4, 
    '3': 4, 
    '4': 5, 
    '5': 5, 
    '6': 5, 
    '7': 6, 
    '8': 6, 
    '9': 6, 
    '10': 7, 
    '11': 7, 
    '12': 7, 
    '13': 8, 
    '14': 8, 
    '15': 8, 
    '16': 9, 
    '17': 9, 
    '18': 9, 
    '19': 10, 
    '20': 10, 
    '21': 10, 
    '22': 10, 
    '23': 10, 
    '24': 12, 
  },
  Moderate: {
    '-1': 2, 
    '0': 2, 
    '1': 3, 
    '2': 3, 
    '3': 3, 
    '4': 3, 
    '5': 4, 
    '6': 4, 
    '7': 4, 
    '8': 4, 
    '9': 4, 
    '10': 5, 
    '11': 5, 
    '12': 5, 
    '13': 5, 
    '14': 5, 
    '15': 6, 
    '16': 6, 
    '17': 6, 
    '18': 6, 
    '19': 6, 
    '20': 7, 
    '21': 7, 
    '22': 8, 
    '23': 8, 
    '24': 9, 
  },
  Low: {
    '-1': 0, 
    '0': 0, 
    '1': 1, 
    '2': 1, 
    '3': 1, 
    '4': 2, 
    '5': 2, 
    '6': 2, 
    '7': 2, 
    '8': 3, 
    '9': 3, 
    '10': 3, 
    '11': 3, 
    '12': 4, 
    '13': 4, 
    '14': 4, 
    '15': 4, 
    '16': 5, 
    '17': 5, 
    '18': 5, 
    '19': 5, 
    '20': 6, 
    '21': 6, 
    '22': 6, 
    '23': 6, 
    '24': 7, 
  },
};

const perceptionScales = {
  Extreme: {
    '-1': 9, 
    '0': 10, 
    '1': 11, 
    '2': 12, 
    '3': 14, 
    '4': 15, 
    '5': 17, 
    '6': 18, 
    '7': 20, 
    '8': 21, 
    '9': 23, 
    '10': 24, 
    '11': 26, 
    '12': 27, 
    '13': 29, 
    '14': 30, 
    '15': 32, 
    '16': 33, 
    '17': 35, 
    '18': 36, 
    '19': 38, 
    '20': 39, 
    '21': 41, 
    '22': 43, 
    '23': 44, 
    '24': 46,
  },
  High: {
    '-1': 8, 
    '0': 9, 
    '1': 10, 
    '2': 11, 
    '3': 12, 
    '4': 14, 
    '5': 15, 
    '6': 17, 
    '7': 18, 
    '8': 19, 
    '9': 21, 
    '10': 22, 
    '11': 24, 
    '12': 25, 
    '13': 26, 
    '14': 28, 
    '15': 29, 
    '16': 30, 
    '17': 32, 
    '18': 33, 
    '19': 35, 
    '20': 36, 
    '21': 38, 
    '22': 39, 
    '23': 40, 
    '24': 42,
  },
  Moderate: {
    '-1': 5, 
    '0': 6, 
    '1': 7, 
    '2': 8, 
    '3': 9, 
    '4': 11, 
    '5': 12, 
    '6': 14, 
    '7': 15, 
    '8': 16, 
    '9': 18, 
    '10': 19, 
    '11': 21, 
    '12': 22, 
    '13': 23, 
    '14': 25, 
    '15': 26, 
    '16': 28, 
    '17': 29, 
    '18': 30, 
    '19': 32, 
    '20': 33, 
    '21': 35, 
    '22': 36, 
    '23': 37, 
    '24': 38,
  },
  Low: {
    '-1': 2, 
    '0': 3, 
    '1': 4, 
    '2': 5, 
    '3': 6, 
    '4': 8, 
    '5': 9, 
    '6': 11, 
    '7': 12, 
    '8': 13, 
    '9': 15, 
    '10': 16, 
    '11': 18, 
    '12': 19, 
    '13': 20, 
    '14': 22, 
    '15': 23, 
    '16': 25, 
    '17': 26, 
    '18': 27, 
    '19': 29, 
    '20': 30, 
    '21': 32, 
    '22': 33, 
    '23': 34, 
    '24': 36,
  },
  Terrible: {
    '-1': 0, 
    '0': 1, 
    '1': 2, 
    '2': 3, 
    '3': 4, 
    '4': 6, 
    '5': 7, 
    '6': 8, 
    '7': 10, 
    '8': 11, 
    '9': 12, 
    '10': 14, 
    '11': 15, 
    '12': 16, 
    '13': 18, 
    '14': 19, 
    '15': 20, 
    '16': 22, 
    '17': 23, 
    '18': 24, 
    '19': 26, 
    '20': 27, 
    '21': 28, 
    '22': 30, 
    '23': 31, 
    '24': 32,
  },
};

const getAbilityMod = (scale, level) => {
  if (!abilityScales[scale]) return;
  return abilityScales[scale][level];
}

const getPerception = (scale, level) => {
    if (!perceptionScales[scale]) return;
    return perceptionScales[scale][level];
}

export default {
  getAbilityMod,
  getPerception,
};