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
			'realistic closeup portrait of @me as a young indian cricket player, highly detailed, looking straight into camera, cricket background, intricate details,wearing the iconic blue jersey of the Indian cricket team, art by marko djurdjevic,greg rutkowski,wlop, fredperry,digital painting,rossdraws.'
	}
	
];

export const getThemes = (instanceClass: string | null) =>
	prompts.filter((item) => !item.instance_classes.includes(instanceClass as InstanceClass));

export const getTheme = (theme: string) => prompts.find((item) => item.name == theme);

export const getPrompt = (name: string) => prompts.find((prompt) => prompt.name == name)?.prompt;
