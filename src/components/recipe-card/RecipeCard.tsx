import { Recipe } from '@/src/beans/Recipe';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, DimensionValue } from 'react-native';
import RecipeCardHorizontal from './RecipeCardHorizontal';
import RecipeCardVertical from './RecipeCardVertical';

interface RecipeCardProps {
	recipe: Recipe;
	href: Href;
	horizontal?: boolean;
};

export default function RecipeCard({ recipe, href, horizontal=true }: RecipeCardProps) {

	const router = useRouter();

	const onPress = () => {
		router.navigate(href);
	}

	const mainContainerDimensions: { width: DimensionValue | undefined, height: DimensionValue | undefined } 
									= horizontal 
									? { width: Dimensions.get('screen').width * 0.8, height: '100%' } 
									: { width: '100%', height: Dimensions.get('screen').height * 0.4 }
									;

	return (
		horizontal 
		? <RecipeCardHorizontal recipe={recipe} onPress={onPress} />
		: <RecipeCardVertical recipe={recipe} onPress={onPress} />
	);
}
