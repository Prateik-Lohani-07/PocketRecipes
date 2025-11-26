import { Recipe } from '@/src/beans/Recipe';
import RecipeDetails from '@/src/components/recipe-details/RecipeDetails';
import { getRecipe } from '@/src/services/recipeService';
import { theme } from '@/src/utils/theme';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

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
						if (route.name === 'index')
							return null;

						return (
							<View style={styles.header}>
								<Pressable style={[ styles.backButton, styles.navButton ]} onPress={() => navigation.goBack()}>
									<AntDesign name="arrow-left" color="white" size={20} />
								</Pressable>

								<Pressable style={[ styles.bookmarkButton, styles.navButton ]}>
									<Feather name="bookmark" size={24} color="white" />
								</Pressable>
							</View>
						);
					}
				}}
			/>
			<RecipeDetails recipe={recipe} />
		</>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 100,
		backgroundColor: theme.colors.bg,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	navButton: {
		width: 40,
		height: 40,
		borderRadius: '100%',
		backgroundColor: theme.colors.primary,
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	backButton: {
		marginLeft: 15,
	},
	bookmarkButton: {
		marginRight: 15,
	},
});