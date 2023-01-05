module.exports = {
  '*.{vue,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,yaml,yml,md,html}': 'prettier --write',
  'package.json': 'sort-package-json',
};
