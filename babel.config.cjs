
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

// plugins: [
//   [
//     "module-resolver",
//     {
//       root: ["./src"],
//       alias: {
//         "@components": "./src/components"
//       }
//     }
//   ]
// ]