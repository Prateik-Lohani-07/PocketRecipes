import { Stack } from 'expo-router'
import React from 'react'

export default function ProfileLayout() {
	return (
		<Stack>
			<Stack.Screen 
				name='profile' 
				options={{
					title: 'Profile'
				}} 
			/>
			<Stack.Screen 
				name='lists' 
				options={{
					title: 'Your Lists'
				}}
			/>
		</Stack>
	)
}