import { Recipe } from '@/src/beans/Recipe';
import RecipeDetails from '@/src/components/recipe-details/RecipeDetails';
import { getRecipe } from '@/src/services/recipeService';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import RecipePageHeader from '@/src/components/headers/RecipePageHeader';

export default function RecipePage() {

	const { recipeId } = useLocalSearchParams();
	const [recipe, setRecipe] = useState<Recipe | null>(null);

	useEffect(() => {
		getRecipe(recipeId as string)
			.then((recipe) => setRecipe(recipe));

	}, [recipeId]);

	if (!recipe) return null;

	return (
		<>
			<Stack.Screen
				options={{
					title: '',
					headerTitle: '',
					headerBackVisible: true,
					header: ({ route, navigation }) => {
						if (route.name === 'index') return null;

						return (
							<RecipePageHeader navigation={navigation} recipe={recipe} />
						);
					}
				}}
			/>
			<RecipeDetails recipe={recipe} />
		</>
	)
}

