module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended', 
		'plugin:@typescript-eslint/recommended', 
		'plugin:svelte/recommended',
	],
	plugins: [
		'@typescript-eslint'
	],
	ignorePatterns: ['*.cjs'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: "./tsconfig.json",
		extraFileExtensions: [".svelte"],
	},
	overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
	"rules": {
    "semi": ["error", "never"], /// Give errors on semicolons
    "max-len": ["error", { "code": 150, "tabWidth": 2, "ignoreComments": true, "ignoreTrailingComments": true }],
    "linebreak-style": "off", /// Turn on if we want to use linux line endings, but git should automatically do that.
    "object-curly-newline": ["error", { /// Error on inline objects 
      "ObjectExpression": { "multiline": true, "minProperties": 6 },
      "ObjectPattern": { "multiline": true, "minProperties": 6 },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
		'@typescript-eslint/no-inferrable-types': 0, /// Remove not specifying a type when not needed
		'@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true,
        arrowCallSignature: true,
        arrowParameter: true,
        callSignature: true,
        memberVariableDeclaration: true,
        parameter: true,
        propertyDeclaration: true,
        objectDestructuring: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
      },
    ], /// Always define types
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
