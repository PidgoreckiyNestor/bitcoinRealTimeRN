module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'metro-react-native-babel-preset',
      'react-native-dotenv'],
    plugins: ['transform-inline-environment-variables'],
  };
};
