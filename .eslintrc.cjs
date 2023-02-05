module.exports = {
    root: true,
    extends: ["@nuxt/eslint-config"],
    rules: {
        eqeqeq: "off",
        curly: "error",
        quotes: ["warn", "single"],
        "vue/multi-word-component-names": "warn"
    }
};