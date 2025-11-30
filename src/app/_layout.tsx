import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";
import 'reflect-metadata';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../styles/theme';

export default function RootLayout() {
	return (
		<>
			<Tabs 
				screenOptions={{ headerShown: false, tabBarActiveTintColor: theme.colors.primary }} 
				initialRouteName="(home)"
			>
				<Tabs.Screen 
					name="(home)" 
					options={{
						title: 'Home',
						tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
					}}
				/>
				<Tabs.Screen 
					name="(profile)" 
					options={{
						title: 'Profile',	
						tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} />,
					}}
				/>
			</Tabs>

			<StatusBar backgroundColor={theme.colors.primary} />
		</>
	);
}
