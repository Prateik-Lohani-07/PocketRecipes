import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recipe } from '@/src/beans/Recipe';
import { theme } from '@/src/utils/theme';
import DetailsHeader from './details-header';

interface RecipeDetailsProps {
	recipe: Recipe;
};

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
	return (
		<View style={styles.mainContainer}>
			<DetailsHeader
				name={recipe.name}
				desc={recipe.desc}
				time={'10 min'}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 24,
		paddingVertical: 18,
	},
});