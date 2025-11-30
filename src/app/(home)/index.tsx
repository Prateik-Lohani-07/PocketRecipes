import { Recipe } from '@/src/beans/Recipe';
import RecipeCardList from '@/src/components/RecipeCardList';
import { getAllRecipes, storeDefaultRecipes } from '@/src/services/recipeService';
import { theme } from '@/src/styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

	const [recipes, setRecipes] = useState<Recipe[]>([]);

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
		<>
			<Stack.Screen options={{ title: 'Home' }} />
			<View style={ styles.container }>
				<Text style={[ styles.headerText, { marginLeft: 20 } ]}>Handpicked For You! 😋</Text>
				<RecipeCardList recipes={recipes} />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		gap: 8,
		width: '100%',
		paddingTop: 16,
	},
	headerText: {
		fontSize: theme.text.l,
		fontWeight: 'bold',
	},
})