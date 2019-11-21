const data = {
  scales: {
    full: [
      'Extreme',
      'High', 
      'Moderate', 
      'Low', 
      'Terrible', 
    ],
    common: [
      'Extreme',
      'High', 
      'Moderate', 
      'Low', 
    ],
    hp: [
      'High', 
      'Moderate', 
      'Low', 
    ],
    spell: [
      'Extreme',
      'High', 
      'Moderate', 
    ],
  },
  alignments: [
    'LG',
    'NG',
    'CG',
    'LN',
    'N',
    'CN',
    'LE',
    'NE',
    'CE',
  ],
  sizes: [
    'Tiny',
    'Small',
    'Medium',
    'Large',
    'Huge',
    'Gargantuan',
  ],
  traits: {
    byId: {
      // Types and subtypes
      "aberration": {
        id: "aberration",
        type: "monsterType",
      },
      
      "animal": {
        id: "animal",
        type: "monsterType",
      },
      
      "astral": {
        id: "astral",
        type: "monsterType",
      },
      
      "beast": {
        id: "beast",
        type: "monsterType",
      },

      "celestial": {
        id: "celestial",
        type: "monsterType",
        children: ["angel", "archon", "azata"],
      },
      "angel": {
        id: "angel",
        type: "monsterType",
        parent: "celestial",
      },
      "archon": {
        id: "archon",
        type: "monsterType",
        parent: "celestial",
      },
      "azata": {
        id: "azata",
        type: "monsterType",
        parent: "celestial",
      },

      "construct": {
        id: "construct",
        type: "monsterType",
      },
      
      "dragon": {
        id: "dragon",
        type: "monsterType",
      },
      
      "elemental": {
        id: "elemental",
        type: "monsterType",
      },

      "ethereal": {
        id: "ethereal",
        type: "monsterType",
      },

      "fey": {
        id: "fey",
        type: "monsterType",
      },
      
      "fiend": {
        id: "fiend",
        type: "monsterType",
        children: ["daemon", "demon", "devil", "rakshasa"],
      },
      "daemon": {
        id: "daemon",
        type: "monsterType",
        parent: "fiend",
      },
      "demon": {
        id: "demon",
        type: "monsterType",
        parent: "fiend",
      },
      "devil": {
        id: "devil",
        type: "monsterType",
        parent: "fiend",
      },
      "rakshasa": {
        id: "rakshasa",
        type: "monsterType",
        parent: "fiend",
      },

      "fungus": {
        id: "fungus",
        type: "monsterType",
      },

      "humanoid": {
        id: "humanoid",
        type: "monsterType",
        children: ["giant"],
      },
      "giant": {
        id: "giant",
        type: "monsterType",
        parent: "humanoid",
      },

      "monitor": {
        id: "monitor",
        type: "monsterType",
        children: ["aeon", "protean", "psychopomp"],
      },
      "aeon": {
        id: "aeon",
        type: "monsterType",
        parent: "monitor",
        children: ["inevitable"],
      },
      "inevitable": {
        id: "inevitable",
        type: "monsterType",
        parent: "aeon",
      },
      "protean": {
        id: "protean",
        type: "monsterType",
        parent: "monitor",
      },
      "psychopomp": {
        id: "psychopomp",
        type: "monsterType",
        parent: "monitor",
      },
      
      "ooze": {
        id: "ooze",
        type: "monsterType",
      },
      
      "plant": {
        id: "plant",
        type: "monsterType",
      },

      "undead": {
        id: "undead",
        type: "monsterType",
      },

      // Power sources
      "air": {
        id: "air",
        type: "powerSource",
      },
      "earth": {
        id: "earth",
        type: "powerSource",
      },
      "fire": {
        id: "fire",
        type: "powerSource",
      },
      "water": {
        id: "water",
        type: "powerSource",
      },
      "acid": {
        id: "acid",
        type: "powerSource",
      },
      "cold": {
        id: "cold",
        type: "powerSource",
      },
      "electricity": {
        id: "electricity",
        type: "powerSource",
      },

      // Other traits
      "amphibious": {
        id: "amphibious",
        type: "physical",
      },
      "aquatic": {
        id: "aquatic",
        type: "physical",
      },
      "incorporeal": {
        id: "incorporeal",
        type: "physical",
        children: ["spirit"],
      },
      "spirit": {
        id: "spirit",
        type: "physical",
        parent: "incorporeal",
      },
      "mindless": {
        id: "mindless",
        type: "physical",
      },
      "swarm": {
        id: "swarm",
        type: "physical",
      },

    },
    allIds: [
      "aberration", "animal", "astral", "beast", "celestial", "angel", "archon", 
      "azata", "construct", "dragon", "elemental", "ethereal", "fey", "fiend", 
      "daemon", "demon", "devil", "rakshasa", "fungus", "humanoid", "giant", 
      "monitor", "aeon", "inevitable", "protean", "psychopomp", "ooze", "plant", 
      "undead",
      "air", "earth", "fire", "water", "acid", "cold", "electricity",
      "amphibious", "aquatic", "incorporeal", "spirit", "mindless", "swarm",
    ],
  },
};

export default data;
export const getTraitIdsByType = (type) => data.traits.allIds.filter(item => data.traits.byId[item].type === type);
