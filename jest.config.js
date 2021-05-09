module.exports = {
  verbose: true,
  roots: ['<rootDir>'],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
