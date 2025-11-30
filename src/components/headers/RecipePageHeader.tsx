import { Recipe } from '@/src/beans/Recipe';
import { flex } from '@/src/styles/container';
import { onPrimary, subHeader1 } from '@/src/styles/text';
import { theme } from '@/src/styles/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';


interface RecipePageHeaderProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
	recipe: Recipe;
};

export default function RecipePageHeader({ navigation, recipe }: RecipePageHeaderProps) {
	return (
		<View style={styles.header}>
			<View style={styles.headerContent}>
				<Pressable style={[styles.backButton, styles.navButton]} onPress={() => navigation.goBack()}>
					<AntDesign name="arrow-left" color="white" size={20} />
				</Pressable>

				<Text style={[subHeader1, onPrimary]}>{recipe.name}</Text>

				<Pressable style={[styles.bookmarkButton, styles.navButton]}>
					<FontAwesome name="bookmark" size={24} color={theme.colors.tertiary} />
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 100,
		backgroundColor: theme.colors.primary,
	},
	headerContent: {
		...flex('row', 'center', 'space-between'),

		marginTop: 45,
	},
	navButton: {
		width: 40,
		height: 40,
		borderRadius: '100%',
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