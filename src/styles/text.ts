import { TextStyle } from 'react-native';
import { theme } from './theme';

export const header: TextStyle = {
	fontWeight: "bold",
	textDecorationStyle: "dotted",
	textDecorationColor: "black",
};

export const mainHeader: TextStyle = {
	...header,
	fontSize: theme.text['3xl'],
};

export const subHeader1: TextStyle = {
	...header,
	fontSize: theme.text['2xl'],
};

export const subHeader2: TextStyle = {
	...header,
	fontSize: theme.text.l,
};

export const subHeader3: TextStyle = {
	...header,
	fontSize: theme.text.m,
};

export const smallText: TextStyle = {
	fontSize: theme.text.s,
};

export const onPrimary: TextStyle = {
	color: theme.colors.onPrimary,
};

export const onCard: TextStyle = {
	color: theme.colors.primary,
};

export const onTertiary: TextStyle = {
	color: theme.colors.onTertiary,
};

export const bold: TextStyle = {
	fontWeight: 'bold',
};
