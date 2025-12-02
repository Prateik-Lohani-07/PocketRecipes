import { Recipe } from '@/src/beans/Recipe';
import { theme } from '@/src/styles/theme';
import React from 'react';
import { Dimensions, Image, PressableProps, StyleSheet, Text, View } from 'react-native';
import PushButton from '../buttons/PushButton';

interface RecipeCardProps {
	recipe: Recipe;
	onPress: PressableProps['onPress'];
};

export default function RecipeCardHorizontal({ recipe, onPress }: RecipeCardProps) {
	return (
		<PushButton onPress={onPress} containerStyle={{...styles.mainContainer}}>
			<View style={styles.contentContainer}>
				
				<Text style={styles.cardHeaderText}>
					{ recipe.name }
					</Text>
				
				<Image source={{ uri: recipe.image }} style={styles.image} />

				<Text style={styles.cardDesc}>{recipe.desc}</Text>
			
			</View>
		</PushButton>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		width: Dimensions.get('screen').width * 0.8, 
		height: '100%',
		borderRadius: theme.rounded.m,
		padding: theme.spacing.m,
		borderWidth: 2,
		backgroundColor: theme.colors.card,
		overflow: 'visible'
	},
	contentContainer: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		gap: 4,
	},
	cardHeaderText: {
		fontSize: theme.text.m,
		color: theme.colors.text,
		fontWeight: 'bold',
	},
	cardDesc: {
		fontSize: theme.text.s,
		color: theme.colors.subtleText,
	},
	image: {
		width: '100%',
		height: '60%',
		borderRadius: theme.rounded.m,
		borderWidth: 1,	
	}
});