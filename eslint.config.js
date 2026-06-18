const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2017,
            globals: {
                ...globals.node,
                ...globals.es2017
            }
        },
        rules: {
            "indent": ["error", 4],
            "linebreak-style": ["error", "unix"],
            "semi": ["error", "always"],
            "no-cond-assign": ["error", "always"]
        }
    }
];
