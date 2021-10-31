module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "quotes": [2, "double"],
    "jsx-quotes": [2, "prefer-double"],
    "semi": [2, "always"],
    "indent": [2, 2],
    "comma-dangle": [2, {
      objects: "always-multiline",
    }],
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
