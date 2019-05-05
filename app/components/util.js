export const mapInputToState = (e, state) => {
  const {name, value} = e.target;
  const data = {};
  data[name] = value;
  return { ...state, ...data };
}


export const mapInputToStatex = (e, state) => {
  const {name, value} = e.target;
  state[name] = value;
}

export const cls = (...klasses) => {
  return klasses.filter(e => !!e).join(' ')
}

export const togglestate = ({ currentTarget }, state) => {
  const { toggle } = currentTarget.dataset;
  const value = state[toggle];
  const toggled = {}; toggled[toggle] = !value;
  return toggled;
}

export const clsIf = (def, condition, cls) => {
  return def + (condition ? ` ${cls}` : '');
}

export const search = (source, query) => (
  source.toLowerCase().indexOf(query.toLowerCase()) != -1
)