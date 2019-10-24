const format = mod => {
  if (typeof mod !== 'number'){
    return;
  }
  return mod > 0 ? `+${mod}` : `${mod}`;
};

export default format;