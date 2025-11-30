import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/src/styles/theme';
import { subHeader2 } from '@/src/styles/text';

interface IngredientsProps {
	ingredients: string[];
};

export default function Ingredients({ ingredients }: IngredientsProps) {
	
	return (
		<View>
			<Text style={ subHeader2 }>Ingredients</Text>

			<View>
				{ 
					ingredients.map((ing, index) => (
						<View key={index}>
							<Text style={styles.ingredientText}>{'\u2022'} {ing}</Text>
						</View>
					)) 
				}			
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	ingredientText: {
		fontSize: theme.text.s,
	}
});