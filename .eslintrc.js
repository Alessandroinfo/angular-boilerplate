module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      excludedFiles: [
        "*.spec.ts",
        "*.d.ts",
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json",
          "tsconfig.spec.json",
          "tsconfig.server.json",
          "e2e/tsconfig.json"
        ],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        // Allow Angular Life Cycle empty methods and empty constructor
        "@angular-eslint/no-empty-lifecycle-method": "off",
        "no-empty-function": ["error", { "allow": ["constructors", "methods"] }],
        "@typescript-eslint/no-empty-function": ["error", { "allow": ["constructors", "methods"] }],
        "indent": [
          "error",
          2
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "quotes": [
          "error",
          "single"
        ],
        "semi": [
          "error",
          "always"
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    }
  ]
};
