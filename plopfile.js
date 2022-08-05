/* eslint-disable func-names */
module.exports = function(plop) {
	plop.setGenerator('Component', {
		description: 'create components in /components',
		prompts: [
			{
				type: 'prompt',
				name: 'componentName',
				message: 'Name of your component:',
			},
			{
				type: 'confirm',
				name: 'withTranslation',
				message: 'Do you want to add translation?',
				default: false,
			},
		],
		actions: answers => {
			const actions = [
				{
					type: 'add',
					path: './components/{{properCase componentName}}/index.js',
					templateFile: './config/plop/component/index.js.plop',
				},
				{
					type: 'add',
					path: './components/{{properCase componentName}}/{{properCase componentName}}.styl',
					templateFile: './config/plop/component/component.styl.plop',
				},
			];

			if (answers.withTranslation) {
				actions.push({
					type: 'add',
					path: './components/{{properCase componentName}}/{{properCase componentName}}.jsx',
					templateFile: './config/plop/component/component.withTranslation.jsx.plop',
				});
			} else {
				actions.push({
					type: 'add',
					path: './components/{{properCase componentName}}/{{properCase componentName}}.jsx',
					templateFile: './config/plop/component/component.jsx.plop',
				});
			}

			return actions;
		},
	});

	plop.setGenerator('Namespace', {
		description: 'create namespace in /public/static/locales',
		prompts: [
			{
				type: 'prompt',
				name: 'componentName',
				message: 'Name of your namespace:',
			},
		],
		actions: answers => {
			const actions = [
				{
					type: 'add',
					path: './public/static/locales/ru/{{camelCase componentName}}.json',
					templateFile: './config/plop/namespace/namespace.json.plop',
				},
				{
					type: 'add',
					path: './public/static/locales/en/{{camelCase componentName}}.json',
					templateFile: './config/plop/namespace/namespace.json.plop',
				},
			];

			return actions;
		},
	});

	plop.setGenerator('Story', {
		description: 'add story to component',
		prompts: [
			{
				type: 'prompt',
				name: 'componentName',
				message: 'Name of component to add story:',
			},
			{
				type: 'list',
				name: 'componentPath',
				message: 'Component path:',
				choices: ['components/ui', 'components'],
			},
			{
				type: 'confirm',
				name: 'withRedux',
				message: 'Do you want to mock redux store?',
				default: false,
			},
			{
				when: response => {
					return response.withRedux;
				},
				type: 'prompt',
				name: 'storeName',
				message: 'Name of Redux Store (empty for default):',
				default: 'meta',
			},
		],
		actions: answers => {
			const actions = [];
			const path = answers.componentPath;
			const isUi = answers.componentPath === 'components/ui';
			const storeMockPath = `${isUi ? '../' : ''}../../.storybook/mocksRedux`;
			const storyPath = isUi ? 'UI/' : 'Components/';

			if (answers.withRedux) {
				actions.push({
					type: 'add',
					data: { storeMockPath, storyPath },
					path: `./${path}/{{properCase componentName}}/{{properCase componentName}}.stories.jsx`,
					templateFile: `./config/plop/story/story.withRedux.${answers.storeName === 'meta' ? 'meta.' : ''}jsx.plop`,
				});
			} else {
				actions.push({
					type: 'add',
					data: { storeMockPath, storyPath },
					path: `./${path}/{{properCase componentName}}/{{properCase componentName}}.stories.jsx`,
					templateFile: './config/plop/story/story.jsx.plop',
				});
			}

			return actions;
		},
	});
};
