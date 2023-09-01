import { PRIVATE_REPLICATE_INSTANCE_TOKEN } from '$env/static/private';

export function getNegativePrompt() {
	return '(disfigured), (bad art), (deformed), (poorly drawn), (extra limbs), strange colours, blurry, boring, sketch, lacklustre, repetitive, cropped hands ,cropped face, cover face, cover visage, mutated hands , black and white , blurred ,strange face . strange teeth, strange eyes';
}

export function getSubjectName() {
	return PRIVATE_REPLICATE_INSTANCE_TOKEN;
}

export const getRefinedInstanceClass = (instanceClass: string | null) => {
	return instanceClass === 'man' || instanceClass === 'woman' ? 'person' : instanceClass;
};

export function getReplacedPrompt(prompt: string, instanceClass: string | null) {
	return prompt.replaceAll('@me', `${getSubjectName()} ${getRefinedInstanceClass(instanceClass)}`);
}
