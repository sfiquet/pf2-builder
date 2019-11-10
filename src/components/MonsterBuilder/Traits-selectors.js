import data from '../../data/data';

export const getAllAncestors = trait => {
  const traitNode = data.traits.byId[trait];
  if (!traitNode){
    return;
  }

  if (!traitNode.parent) {
    return [];
  }
  
  return [traitNode.parent, ...getAllAncestors(traitNode.parent)]
};

export const getAllDescendants = trait => {
  const traitNode = data.traits.byId[trait];
  if (!traitNode){
    return;
  }

  if (!traitNode.children){
    return [];
  }

  return traitNode.children.reduce((acc, childId) => [...acc, childId, ...getAllDescendants(childId)], []);
};

export const getAllTraits = traitState => {
  if (!Array.isArray(traitState)) return [];

  const allTraits = [...traitState, ...traitState.map(trait => getAllAncestors(trait)).reduce((acc, arr) => [...acc, ...arr], [])];
  return [...new Set(allTraits)];
};
