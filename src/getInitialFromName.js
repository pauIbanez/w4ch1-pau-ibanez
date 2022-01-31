const getInitialFromName = (name) => {
  const prefixes = ["el", "la", "de", "the"];

  const destructuredName = name.split(" ");

  if (destructuredName.length === 1) {
    return name[0];
  }

  if (prefixes.some((prefix) => prefix === destructuredName[0].toLowerCase())) {
    return destructuredName[1][0];
  } else {
    return destructuredName[0][0];
  }
};

export default getInitialFromName;
