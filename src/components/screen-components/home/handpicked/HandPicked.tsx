import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '@/src/beans/Recipe';
import HandPickedList from './components/HandPickedList'
import { getAllRecipes, storeDefaultRecipes } from '@/src/services/recipeService';
import { theme } from '@/src/styles/theme';

export default function HandPicked() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	// TODO: call the recommended API 
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
		<View style={styles.container}>
			<Text style={[styles.headerText, { marginLeft: 20 }]}>Handpicked For You</Text>
			<HandPickedList recipes={recipes} />
		</View>
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
		fontSize: theme.text['2xl'],
		color: theme.colors.subtleText,
		fontWeight: 'bold',
	},
})