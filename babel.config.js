const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: isDev ? [require.resolve('react-refresh/babel')] : [],
};
