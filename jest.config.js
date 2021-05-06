module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: <test '..test_report'>,
      outputName: <report 'test'>,
    } ]
  ]
};