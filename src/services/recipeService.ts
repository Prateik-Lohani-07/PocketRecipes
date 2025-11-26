import { recipes } from '@/src/mockdata/db.json';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Recipe, RecipeJSON, RecipeSchema } from "../beans/Recipe";

export const RECIPE_KEY = 'recipes';

export const getRecipe = async (key: string | number) => {
	try {
		const allRecipesString = await AsyncStorage.getItem(RECIPE_KEY);
		if (!allRecipesString) {
			throw new Error(`Data not found for key: ${key}`);
		}
		
		const allRecipesJSON: RecipeJSON[] = JSON.parse(allRecipesString);

		const recipeJSON = allRecipesJSON.find((recipe) => recipe.id === key);
		const recipe: Recipe = RecipeSchema.parse(recipeJSON);
		return recipe;

	} catch (error) {
		console.error(error);
		throw error;
	}

};

export const getAllRecipes = async () => {
	try {
		const allRecipesString = await AsyncStorage.getItem(RECIPE_KEY);

		if (!allRecipesString) {
			throw new Error(`Data not found`);
		}

		const allRecipes: RecipeJSON[] = JSON.parse(allRecipesString);
		const recipes: Recipe[] = allRecipes.map(recipe => RecipeSchema.parse(recipe));
		
		return recipes;

	} catch (error) {
		console.error(error);
		throw error;
	}

};

// TODO: logic needs update
// export const storeRecipe = async (key: string | number, recipe: Recipe) => {
// 	try {
// 		const recipeJSON = JSON.stringify(recipe)
// 		await AsyncStorage.setItem(String(key), recipeJSON)
// 	} catch (error) {
// 		console.error(error)
// 	}
// };

export const storeDefaultRecipes = async () => {
	try {
		await AsyncStorage.setItem(RECIPE_KEY, JSON.stringify(recipes));
	} catch (error) {
		console.error(error);
	}
}