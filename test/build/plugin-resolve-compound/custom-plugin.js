const jsStringEscape = require('js-string-escape');
const { readFileSync } = require('fs');

module.exports = function () {
  return {
    resolve: {
      input: [".hbs"],
      output: [".hbs.js"]
    },
    async load({filePath}) {
      // a fake template compiler
      return `export default "${jsStringEscape(readFileSync(filePath,'utf8').trim())}"`
    },
  };
};
