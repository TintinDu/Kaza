module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 0,
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
