export default function (plop) {
	plop.setHelper('pascalCase', (text) => text
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
		.join(""));
	// create your generators here
	plop.setGenerator("Page", {
		description: "add a new page",
		prompts: [
			{
				type: "input",
				name: "pageName",
				message: "page name please",
			},
		], // array of inquirer prompts
		actions: [
			{
				type: "add",
				path: "src/app/pages/{{pascalCase pageName}}Page.tsx",
				templateFile: "templates/page.hbs",
			},

		], // array of actions
	});
	plop.setGenerator("Common Component", {
		description: "add a new component",
		prompts: [
			{
				type: "input",
				name: "componentName",
				message: "component name please",
			},
		], // array of inquirer prompts
		actions: [
			{
				type: "add",
				path: "src/app/components/{{pascalCase componentName}}.tsx",
				templateFile: "templates/commonComponent.hbs",
			},
		],
	});
}
