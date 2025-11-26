import { z } from 'zod';

export const RecipeSchema = z.object({
	id: z.string(),
	name: z.string(),
	steps: z.array(z.string()),
	ingredients: z.array(z.string()),
	desc: z.string(),
	video_link: z.string(),
	image: z.string(),
})
	.transform((data) => ({
		id: data.id,
		name: data.name,
		steps: data.steps,
		ingredients: data.ingredients,
		desc: data.desc,
		videoLink: data.video_link,
		image: data.image
	}));

export function recipeToJSON(recipe: Recipe) {
	return {
		id: recipe.id,
		name: recipe.name,
		desc: recipe.desc	,
		steps: recipe.steps,
		video_link: recipe.videoLink,  // back to snake_case
		ingredients: recipe.ingredients,
		image: recipe.image,
	};
}


export type Recipe = z.output<typeof RecipeSchema>;
export type RecipeJSON = z.input<typeof RecipeSchema>;