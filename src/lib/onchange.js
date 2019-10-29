const getOnChangeArgs = onChangeEvent => {
  if (!onChangeEvent){
    return;
  }
  
  const target = onChangeEvent.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  
  return [target.name, value];
};

export default getOnChangeArgs;