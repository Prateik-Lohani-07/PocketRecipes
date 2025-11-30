import { PressableProps, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Recipe } from '@/src/beans/Recipe';
import DetailsHeader from './components/DetailsHeader';
import Video from './components/Video';
import { theme } from '@/src/styles/theme';
import Ingredients from './components/Ingredients';
import Steps from './components/Steps';

interface RecipeDetailsProps {
	recipe: Recipe;
};

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
	return (
		<ScrollView>
			<View style={styles.mainContainer}>
				<DetailsHeader
					name={recipe.name}
					desc={recipe.desc}

					// TODO: add time to cook in the database
					time={'10 min'}
				/>

				<Video videoSource={recipe.videoLink} />
				<Ingredients ingredients={recipe.ingredients} />
			</View>

			<View style={[ styles.stepContainer, styles.mainContainer ]}>
				<Steps steps={recipe.steps} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: theme.spacing.xl,
		paddingVertical: theme.spacing.l,
		flexDirection: 'column',
		gap: 8,
	},
	stepContainer: {
		backgroundColor: theme.colors.primary,
	},
});