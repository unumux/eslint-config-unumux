module.exports = {
    parser: "babel-eslint",
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "linebreak-style": ["warn", "unix"],
        semi: ["error", "always"],
        "no-console": "warn",
        "no-unused-vars": "warn"
    },
    env: {
        es6: true
    },
    parserOptions: {
        sourceType: "module"
    },
    extends: "eslint:recommended"
};
