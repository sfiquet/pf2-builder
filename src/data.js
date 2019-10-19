export default {
  values: ['terrible', 'low', 'moderate', 'high', 'extreme'],
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
  typeTraits: [
    'aberration',
    'animal',
    'astral',
    'beast',
    'celestial',
    'construct',
    'dragon',
    'elemental',
    'ethereal',
    'fey',
    'fiend',
    'fungus',
    'giant',
    'humanoid',
    'monitor',
    'ooze',
    'plant',
    'undead',
  ],
  energyTraits: [
    'air',
    'fire',
    'earth',
    'water',
    'acid',
    'cold',
    'electricity',
  ],
  categoryTraits: [
    'aeon',
    'angel',
    'archon',
    'azata',
    'daemon',
    'demon',
    'devil',
    'inevitable',
    'protean',
    'psychopomp',
    'rakshasa',
    'spirit',
  ],
  physicalTraits: [
    'amphibious',
    'aquatic',
    'incorporeal',
    'mindless',
    'swarm',
  ],
  roadmaps: {
    'Brute': {
      perception: 'low',
      Str: ['high', 'extreme'],
      Con: ['moderate', 'high'],
      Dex: ['terrible', 'low'],
      Int: ['terrible', 'low'],
      Cha: ['terrible', 'low'],
      Wis: ['terrible', 'low'],
      AC: ['low', 'moderate'],
      Fort: 'high',
      saves: [
        {
          Reflex: 'low',
          Will: 'low',
        },
        {
          Reflex: 'moderate',
          Will: 'low',
        },
        {
          Reflex: 'low',
          Will: 'moderate',
        },
      ],
      HP: 'high',
      strike: [
        {
          attack: 'high',
          damage: 'high',
        },
        {
          attack: 'moderate',
          damage: 'extreme'
        },
      ]
    },
    'Magical Striker': {},
    'Skill Paragon': {},
    'Skirmisher': {},
    'Sniper': {},
    'Soldier': {},
    'Spellcaster': {},
  },
};
