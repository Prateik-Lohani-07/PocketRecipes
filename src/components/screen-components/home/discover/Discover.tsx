import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllRecipes, storeDefaultRecipes } from '@/src/services/recipeService';
import { Recipe } from '@/src/beans/Recipe';
import RecipeCard from '../../../recipe-card/RecipeCard';
import { flex } from '@/src/styles/container';

export default function Discover() {

	const [recipes, setRecipes] = useState<Recipe[]>([]);

	// TODO: call the discover recipes API 
	useEffect(() => {
		async function loadInitialData() {
			const alreadySet = await AsyncStorage.getAllKeys();

			// clears out the async storage
			// await AsyncStorage.clear();

			if (!alreadySet || alreadySet.length === 0) {
				storeDefaultRecipes();
			}

			setRecipes(await getAllRecipes());
		}

		loadInitialData();
	}, []);

	if (recipes.length === 0) return null;

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			{
				recipes.map((recipe, i) => (
					<RecipeCard
						recipe={recipe}
						href={`./${recipe.id}`}
						key={recipe.id}
						horizontal={false}
					/>
				))
			}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		...flex('col'),
		
		paddingVertical: 16,
		paddingHorizontal: 12,
		gap: 18,	
	},
})