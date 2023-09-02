export enum InstanceClass {
	man = 'Man',
	woman = 'Woman',
	youngmale = 'youngmale',
	youngfemale = 'youngfemale',
	cat = 'Cat'
}

export interface Theme {
	name: string;
	prompt: string;
	instance_classes: InstanceClass[];
}

export const prompts: Theme[] = [
	{
		name: 'Jedi',
		instance_classes: [],
		prompt:
			'realistic highly detailed illustration closeup portrait of @me as cowgirl wearing black cowgirl hat, looking straight into camera, dramatic wielding gun pose, original face, intricate, elegant, highly detailed, centered, digital painting, artstation, concept art, smooth, sharp focus, league of legends concept art, wlop'
	}
	
];

export const getThemes = (instanceClass: string | null) =>
	prompts.filter((item) => !item.instance_classes.includes(instanceClass as InstanceClass));

export const getTheme = (theme: string) => prompts.find((item) => item.name == theme);

export const getPrompt = (name: string) => prompts.find((prompt) => prompt.name == name)?.prompt;
