const path = require('path');
const {setupBuildTest, readFiles} = require('../../test-utils');

const cwd = path.join(__dirname);
let files = {};

const SEARCH_STRING = `import template from './hello.hbs.js'`;

describe('plugin API: resolve compound extensions()', () => {
  beforeAll(() => {
    setupBuildTest(__dirname);

    files = readFiles(cwd);
  });

  it('points at .hbs.js', () => {
    expect(files['/build/_dist_/hello.js']).toEqual(expect.stringContaining(SEARCH_STRING));
  });

  it('produces .hbs.js', () => {
    expect(files['/build/_dist_/hello.hbs.js']).toEqual(expect.stringContaining(`export default "<h1>Hello world</h1>"`));
  });

});
