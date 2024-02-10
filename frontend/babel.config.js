module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        'moduleName': 'react-native-dotenv',
        'envName': 'APP_ENV',
        'path': '../.env',
        'safe': false,
        'allowUndefined': true,
        'verbose': false
      }]
    ]
  };
};
