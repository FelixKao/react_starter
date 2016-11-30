const context = require.context('../modules/', true, /reducer\.js$/);
const keys = context.keys();

const reducers = keys.reduce(function(res, v) {
  let str0 = v.replace(/\/reducer.js$/,'');
  let str1 = str0.replace(/^.\//,'');
  res[str1] = context(v).default;
  return res;
},{});

export default reducers;
