import Discover from '@/src/components/screen-components/home/discover/Discover';
import HandPicked from '@/src/components/screen-components/home/handpicked/HandPicked';
import { flex } from '@/src/styles/container';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Home() {
	return (
		<>
			<Stack.Screen options={{ title: 'Home' }} />

			<ScrollView contentContainerStyle={[ flex('col', 'center'), styles.homeContainer ]}>
				<HandPicked />
				<Discover />
			</ScrollView>
		</>
	)
};

const styles = StyleSheet.create({
	homeContainer: {
		gap: 16,
	},
});