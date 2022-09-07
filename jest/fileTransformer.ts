/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  process() {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(`img`))};`
    };
  }
};
