import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/src/styles/theme';
import { smallText } from '@/src/styles/text';

interface LabelProps {
	text: string;
	icon?: any;
	color?: string;
	backgroundColor?: string;
};

export default function Label({ text, icon, backgroundColor=theme.colors.accent, color=theme.colors.onAccent }: LabelProps) {
	return (
		<View style={[ styles.container, { backgroundColor } ]}>
			{/* TODO: figure out a type safe way to print an icon */}
			{icon && (<Text>{icon}</Text>)}
			
			<Text style={[ smallText, { color } ]}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		padding: 4,
		borderRadius: 8,
		alignSelf: 'flex-start',
	},
})