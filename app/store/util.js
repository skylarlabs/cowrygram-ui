const ObjfromSession = (key, def) => {
  const data = window.sessionStorage.getItem(key);
  return data ? JSON.parse(data) : def;
};

const mapInputToStatex = (e, state) => {
  let { name, value } = e.target;

  if (name.indexOf('.') != -1) {
    const obj = name.split('.');
    const objKey = obj[0];

    if (!state[objKey]) {
      state[objKey] = {};
    }

    state[objKey][obj[1]] = value;
    return;
  }

  state[name] = value;
}

export {
  ObjfromSession,
  mapInputToStatex
};