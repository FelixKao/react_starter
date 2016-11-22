// Use require.context to require reducers automatically
// Ref: https://webpack.github.io/docs/context.html
const context = require.context('./', false, /\.jsx?$/);
const keys = context.keys().filter(item => item !== './index.js');

const reducers = keys.reduce((memo1, key) => {
  const memo = memo1;
  var a = memo;

  memo[key.match(/([^\/]+)\.jsx?$/)[1]] = context(key);
  return memo;
}, {});

export default reducers;
