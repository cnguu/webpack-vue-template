module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 'warn',

    // vue
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/one-component-per-file': 'off',
    'vue/prefer-import-from-vue': 'off',
  },
  globals: {
    __APP_INFO__: true,
    __NO_DATA__: true,
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
  },
};
