const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

const webpackConfig = require('./styleguide.webpack.js');
const { version } = require('./package.json');

module.exports = {
  title: `Half-Earth Components | ${version}`,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700'
        }
      ]
    }
  },
  theme: { fontFamily: { base: '"Lato", sans-serif' } },
  skipComponentsWithoutExample: true,
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const componentName = camelCase(dirname.split('/').slice(-1)[0]);

    return `import { ${upperFirst(componentName)} } from 'he-components';`;
  },
  webpackConfig
};
