import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";
import 'reflect-metadata';

export default function RootLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }} initialRouteName="(home)">
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
	);
}
