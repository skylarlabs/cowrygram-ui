const ObjfromSession = (key, def) => {
  const data = window.sessionStorage.getItem(key);
  return data ? JSON.parse(data) : def;
};

const mapInputToStatex = (e, state) => {
  const {name, value} = e.target;
  state[name] = value;
}

export {
  ObjfromSession,
  mapInputToStatex
};