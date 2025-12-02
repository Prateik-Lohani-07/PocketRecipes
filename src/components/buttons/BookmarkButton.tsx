import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'

interface BookmarkButtonProps {
	onPress: (e: GestureResponderEvent) => void;
	size?: number;
};

export default function BookmarkButton({ onPress, size=36 }: BookmarkButtonProps) {
	return (
		<IconButton
			icon='bookmark-outline'
			mode='contained'
			onPress={onPress}
			containerColor='white'
			size={size}
			style={{ position: 'absolute', top: 10, right: 10 }}
		/>
	)
}

const styles = StyleSheet.create({})