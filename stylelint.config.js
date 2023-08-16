module.exports = {
  customSyntax: "postcss-html",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-prettier",
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "property-no-vendor-prefix": null,
    "selector-pseudo-element-colon-notation": null,
    "selector-class-pattern": null,
    "rule-empty-line-before": null,
    "font-family-name-quotes": null,
  },
};
