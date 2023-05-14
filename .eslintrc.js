module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*",
  ],
  "overrides": [
    {
      /**
       * -----------------------------------------------------
       * TYPESCRIPT FILES (COMPONENTS, SERVICES ETC) (.ts)
       * -----------------------------------------------------
       */
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": [
          "tsconfig.json",
        ],
        "createDefaultProgram": true
      },
      "plugins": [
        "import",
        "rxjs"
      ],
      /**
       * -----------------------------------------------------
       * Recommend Lint Setting
       * -----------------------------------------------------
       */
      "extends": [
        'plugin:@angular-eslint/recommended',
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        /**
         * -----------------------------------------------------
         *  Convention Setting
         * -----------------------------------------------------
         */
        // 0. Typescript
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/consistent-type-definitions": "warn",
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            "allowSingleExtends": true
          }
        ],

        // 2. References
        "prefer-const": "error",
        "no-const-assign": "warn",
        "no-var": "error",
        "@typescript-eslint/no-shadow": [
          "warn",
          {
            "hoist": "all"
          }
        ],

        // 3. Objects
        "no-new-object": "warn",
        "object-shorthand": "warn",
        "quote-props": [
          "warn",
          "as-needed"
        ],
        "no-prototype-builtins": "warn",
        "prefer-object-spread": "warn",

        // 4. Arrays
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "array-callback-return": "warn",

        // 5. Destructuring
        "prefer-destructuring": [
          "warn",
          {
            "object": false,
            "array": false
          }
        ],
        // 6. Strings
        "@typescript-eslint/quotes": [
          "warn",
          "single",
          {
            "allowTemplateLiterals": true
          }
        ],
        "prefer-template": "warn",
        "template-curly-spacing": "warn",
        "no-eval": "warn",
        "no-useless-escape": "warn",

        // 7. Functions
        "wrap-iife": "warn",
        "no-loop-func": "warn",
        "prefer-rest-params": "error",
        "no-new-func": "warn",
        "space-before-function-paren": [
          "warn",
          {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "never"
          }
        ],
        "space-before-blocks": "warn",
        "no-param-reassign": "warn",
        "prefer-spread": "error",
        "function-paren-newline": "off",

        // 8. Arrow Functions
        "prefer-arrow-callback": "warn",
        "arrow-spacing": "warn",
        "arrow-parens": [
          "warn",
          "always"
        ],
        "arrow-body-style": ["warn", "as-needed"],
        "no-confusing-arrow": "warn",
        "implicit-arrow-linebreak": "off",

        // 9. Classes And Constructors
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["warn"],
        "no-dupe-class-members": "off",
        "class-methods-use-this": "off",
        "constructor-super": "off",

        // 10. Modules
        "no-duplicate-imports": "warn",
        "import/no-mutable-exports": "warn",
        "import/prefer-default-export": "off",
        "import/no-webpack-loader-syntax": "warn",
        "import/extensions": "off",
        // eslint 속도 영향으로 off
        "import/no-deprecated": "off",

        // 11. Iterators and Generators
        "generator-star-spacing": "warn",

        // 12. Properties
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "warn",
        "no-restricted-properties": "warn",

        // 13. Variables
        "no-undef": "off",
        "one-var": [
          "warn",
          "never"
        ],
        "no-multi-assign": "warn",
        "no-plusplus": "warn",
        "operator-linebreak": [
          "warn",
          "before",
          {
            "overrides": {
              "=": "none"
            }
          }
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",

        // 14. Hoisting
        "no-use-before-define": "warn",

        // 15. Comparison Operators & Equality
        "eqeqeq": [
          "warn",
          "smart"
        ],
        "no-case-declarations": "warn",
        "no-nested-ternary": "warn",
        "no-unneeded-ternary": "warn",
        "no-mixed-operators": "warn",
        "no-bitwise": "warn",

        // 16. Block
        "nonblock-statement-body-position": "warn",
        "brace-style": [
          "warn",
          "1tbs",
          {
            "allowSingleLine": true
          }
        ],
        "no-else-return": "warn",

        // 17. Control Statements
        "no-labels": "warn",
        "no-unused-labels": "warn",

        // 18. Comments
        // Jsdoc 규칙을 커스텀 설정을 할 필요가 있음
        "jsdoc/newline-after-description": [
          "off"
        ],
        "jsdoc/no-types": [
          "off"
        ],

        // 19. Whitespace
        // editor 설정으로 대체되는 부분이 많음
        "eol-last": "warn",
        "max-len": [
          "warn",
          {
            "code": 140,
            "ignoreComments": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
          }
        ],
        "no-trailing-spaces": "warn",
        "newline-per-chained-call": "off",
        "no-multiple-empty-lines": "warn",

        // 20. Commas
        "comma-style": "warn",
        "comma-dangle": [
          "warn",
          "only-multiline"
        ],

        // 21. Semicolons
        "semi": "off",
        "@typescript-eslint/semi": [
          "error",
          "always"
        ],
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            "multiline": {
              "delimiter": "semi",
              "requireLast": true
            },
            "singleline": {
              "delimiter": "semi",
              "requireLast": true
            }
          }
        ],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",

        // 22. Type Casting & Coercion
        "radix": "warn",
        "no-new-wrappers": "warn",

        // 23. Naming Conventions
        "camelcase": "off",
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            "selector": "property",
            "format": [
              "camelCase",
              "snake_case",
              "UPPER_CASE"
            ],
            "leadingUnderscore": "allow"
          },
          {
            "selector": "classProperty",
            "modifiers": [
              "readonly"
            ],
            "format": [
              "camelCase",
              "UPPER_CASE"
            ],
            "leadingUnderscore": "allow"
          }
        ],
        "id-length": "warn",
        "new-cap": "off",
        "rxjs/finnish": [
          "warn",
          {
            "types": {
              "^Store$": false,
              "^EventEmitter$": false
            }
          }
        ],

        // 28. Standard Library
        "no-restricted-globals": "warn",

        // 29. Testing
        "no-console": [
          "warn",
          {
            "allow": [
              "log",
              "info",
              "warn",
              "error"
            ]
          }
        ],
        "no-debugger": "warn",

        // 32.Error
        "no-throw-literal": "warn",

        // 33. Statetement
        "no-fallthrough": "warn",

        // 34. Expressions
        "no-new": "warn",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "warn",

        // 35. Angular Component
        "@typescript-eslint/member-ordering": [
          "error",
          {
            "classes": [
              "field",
              ["decorated-field", "decorated-get", "decorated-set"],
              "constructor",
              "method"
            ],
            "classExpressions": [
              "field",
              ["decorated-field", "decorated-get", "decorated-set"],
              "constructor",
              "method"
            ],
            "interfaces": [
              ["field", "signature"],
              "constructor",
              "method",
            ],
            "typeLiterals": [
              ["field", "signature"],
              "constructor",
              "method",
            ],
          }
        ],
        /**
         * -----------------------------------------------------
         * Eslint recommended Setting for Typescript
         * -----------------------------------------------------
         */
        "getter-return": "off",
        "no-dupe-args": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",
        /**
         * -----------------------------------------------------
         * Typesript-eslint recommended Setting
         * -----------------------------------------------------
         */
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-types": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-inferrable-types": [
          "error",
          {
            "ignoreParameters": true
          }
        ],
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        /**
         * Typesript-eslint recommended Setting(requiring-type-checking)
         */
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-for-in-array": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/unbound-method": [
          "error",
          {
            "ignoreStatic": true
          }
        ],

        /**
         * -----------------------------------------------------
         * Etc Setting
         * -----------------------------------------------------
         */
        "@typescript-eslint/explicit-member-accessibility": [
          "off",
          {
            "accessibility": "explicit"
          }
        ],
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/unified-signatures": "warn",
        "prefer-arrow/prefer-arrow-functions": "off",
        "no-caller": "warn",
        "guard-for-in": "warn",
        "no-undef-init": "warn",
        "no-underscore-dangle": [
          "warn",
          {
            "allowAfterThis": true
          }
        ],
        "curly": "warn",
        "id-blacklist": "warn",
        "id-match": "warn",

        /**
         * -----------------------------------------------------
         * Rxjs Recommend Setting
         * -----------------------------------------------------
         */
        "rxjs/no-async-subscribe": "error",
        "rxjs/no-create": "error",
        "rxjs/no-ignored-notifier": "error",
        "rxjs/no-ignored-replay-buffer": "error",
        "rxjs/no-ignored-takewhile-value": "error",
        'rxjs/no-implicit-any-catch': [
          'error',
          {
            'allowExplicitAny': true,
          },
        ],
        "rxjs/no-index": "error",
        "rxjs/no-internal": "error",
        "rxjs/no-nested-subscribe": "error",
        "rxjs/no-redundant-notify": "error",
        "rxjs/no-sharereplay": ["error", {allowConfig: true}],
        "rxjs/no-subject-unsubscribe": "error",
        "rxjs/no-unbound-methods": "error",
        "rxjs/no-unsafe-subject-next": "error",
        "rxjs/no-unsafe-takeuntil": "error",
        /**
         * -----------------------------------------------------
         * Angular-Eslint Recommend Setting
         * -----------------------------------------------------
         */
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/component-selector": [
          "warn",
          {
            "type": "element",
            "prefix": [
              "app",
            ],
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/directive-selector": [
          "warn",
          {
            "type": "attribute",
            "prefix": [
              "app",
            ],
            "style": "camelCase"
          }
        ],
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-output-native": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@angular-eslint/contextual-lifecycle": "error",
        "@angular-eslint/no-empty-lifecycle-method": "error",
        "@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/use-lifecycle-interface": "warn",
      }
    },

    /**
     * -----------------------------------------------------
     * LINT COMPONENT TEMPLATES
     * -----------------------------------------------------
     */
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
      ],
      "rules": {
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/attributes-order": "error"
      }
    }
  ]
}
