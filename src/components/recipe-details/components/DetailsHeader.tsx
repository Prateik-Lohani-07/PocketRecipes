import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/src/styles/theme';
import Label from '../../labels/Label';

interface DetailsHeaderProps {
	name: string;
	desc: string;
	time: string;
};

export default function DetailsHeader({ name, desc, time }: DetailsHeaderProps) {
	return (
		<View style={styles.mainContainer}>
			<View>
				<Text style={styles.headerText}>{name}</Text>
				<Text style={styles.descText}>{desc}</Text>
			</View>
			
			
			<Label 
				text={time} 
				icon={(<Ionicons name="timer-outline" size={18} />)} 
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'column',
		gap: 12,
	},
	headerText: {
		fontSize: theme.text['4xl'],
		fontWeight: 'bold',
	},
	descText: {
		fontSize: theme.text['m'],
		fontWeight: 'light',
	},
	cookTimeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		backgroundColor: theme.colors.accent,
		padding: 4,
		borderRadius: 8,
		alignSelf: 'flex-start',
	},
	timeText: {
		fontSize: theme.text.s,
		color: 'white',
	},
})