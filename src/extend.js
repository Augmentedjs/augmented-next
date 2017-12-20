const extend = (...args) => {
  let i = 0;
  const l = args.length;
  for (i = 1; i < l; i++) {
    let key;
    for(key in args[i]) {
      if(args[i].hasOwnProperty(key)) {
        args[0][key] = args[i][key];
      }
    }
  }
  return args[0];
};

export default extend;
