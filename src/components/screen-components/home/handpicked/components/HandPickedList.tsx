import { Recipe } from '@/src/beans/Recipe';
import RecipeCard from '../../../../recipe-card/RecipeCard';
import { theme } from '@/src/styles/theme';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface HandPickedListProps {
	recipes: Recipe[];
};

export default function HandPickedList({ recipes }: HandPickedListProps) {
	return (
		<View style={[ styles.mainContainer ]}>
			<ScrollView 
				contentContainerStyle={[ styles.contentContainer ]} 
				horizontal 
				showsHorizontalScrollIndicator={false}
			>
				{
					recipes.map(recipe => (
						<RecipeCard 
							recipe={recipe} 
							href={`./${recipe.id}`}
							key={recipe.id} 
							horizontal={true}
						/>
					))
				}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'column',
		gap: 8,
	},
	headerText: {
		fontSize: theme.text.l,
	},
	contentContainer: {
		flexDirection: 'row',
		height: 300,
		justifyContent: 'space-between',
		gap: 20,
		overflow: 'visible',
		margin: 0,
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: theme.colors.accent,
	}
});