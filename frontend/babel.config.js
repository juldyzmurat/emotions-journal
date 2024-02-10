module.exports = function(api) {
  api.cache(true);
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
