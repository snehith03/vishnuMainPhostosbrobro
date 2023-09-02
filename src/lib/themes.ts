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
			'8k portrait of @me, d & d, fantasy, intricate, elegant,, highly detailed, digital painting, artstation, concept art, matte, sharp focus, illustration, hearthstone, art by artgerm and greg rutkowski and alphonse mucha, 8k'
	}
	
];

export const getThemes = (instanceClass: string | null) =>
	prompts.filter((item) => !item.instance_classes.includes(instanceClass as InstanceClass));

export const getTheme = (theme: string) => prompts.find((item) => item.name == theme);

export const getPrompt = (name: string) => prompts.find((prompt) => prompt.name == name)?.prompt;
