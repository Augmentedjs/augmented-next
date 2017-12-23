const pad = (p, str, padLeft) => {
  if (typeof str === "undefined") {
    return p;
  }
  if (padLeft) {
    return `${p}${str}`;
  } else {
    return `${str}${p}`;
  }
};

export default pad;
