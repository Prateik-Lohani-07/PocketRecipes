import { Recipe } from '@/src/beans/Recipe';
import { theme } from '@/src/styles/theme';
import React from 'react';
import { Dimensions, GestureResponderEvent, Image, PressableProps, StyleSheet, Text, View, ViewStyle } from 'react-native';
import PushButton from '../buttons/PushButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { flex } from '@/src/styles/container';
import { subHeader1 } from '@/src/styles/text';
import { Button, IconButton } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BookmarkButton from '../buttons/BookmarkButton';

interface RecipeCardProps {
	recipe: Recipe;
	onPress: PressableProps['onPress'];
	cardStyle?: ViewStyle;
};

export default function RecipeCardVertical({ recipe, onPress, cardStyle }: RecipeCardProps) {

	const onLike = (e: GestureResponderEvent) => {
		e.stopPropagation();
		
		// TODO: add API call to increase likes
		console.log('Liked!');
	}

	const onBookmark = (e: GestureResponderEvent) => {
		e.stopPropagation();
		
		// TODO: add API call to increase likes
		console.log('Bookmarked!');
	}

	return (
		<PushButton onPress={onPress} containerStyle={{...styles.mainContainer, ...cardStyle}}>
			<View style={styles.contentContainer}>

				<View style={[ styles.imageContainer, { position: 'relative', height: '60%' }]}>
					<Image source={{ uri: recipe.image }} style={styles.image} />

					<BookmarkButton onPress={onBookmark} />
				</View>

				{/* Main Content */}
				<View style={styles.mainContent}>
					<View style={[ flex('row', 'center', 'space-between'), { width: '100%' } ]}>
						<Text style={subHeader1}>
							{ recipe.name }
						</Text>

						<Button icon="heart" mode='contained' onPress={onLike}>
							{'4.7K'}
						</Button>
					</View>

					<Text numberOfLines={2} style={styles.cardDesc}>{recipe.desc}</Text>
				</View>

			</View>
		</PushButton>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		width: '100%', 
		height: Dimensions.get('screen').height * 0.4,
		borderRadius: theme.rounded.m,
		backgroundColor: theme.colors.card,
		elevation: 3,
	},
	contentContainer: {
		...flex('col'),

		width: '100%',
		height: '100%',

		gap: 4,
	},
	mainContent: {
		...flex('col'),

		gap: 4,
		paddingVertical: theme.spacing.s,
		paddingHorizontal: theme.spacing.m,
	},
	imageContainer: {
		width: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
		borderTopLeftRadius: theme.rounded.m,
		borderTopRightRadius: theme.rounded.m,
	},
	cardDesc: {
		fontSize: theme.text.s,
		color: theme.colors.subtleText,
	},
});