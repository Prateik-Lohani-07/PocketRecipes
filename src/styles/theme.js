export const colors = {
	yaleBlue: '#134276ff',
	coralGlow: '#ff8a65ff',
	steelBlue: '#759aabff',
	vanillaCustard: '#faf2a1ff',
	goldenSand: '#c6ca53ff',
	black: '#000',
	white: '#fff',
	redOxide: '#6D0000',
};

export const theme = {
	colors: {
		bg: colors.white,
		card: "#F7F7F7",
		text: "#222222",
		subtleText: "#555555",
		inactive: '#aaa',

		primary: colors.yaleBlue,
		onPrimary: colors.white,

		secondary: colors.steelBlue,
		onSecondary: colors.black,

		accent: colors.coralGlow,
		onAccent: colors.black,

		surfaceHighlight: colors.vanillaCustard,

		tertiary: colors.goldenSand,
		onTertiary: colors.redOxide,

		border: "#DDDDDD",
	},
	text: {
		'4xl': 26,
		'3xl': 24,
		'2xl': 22,
		xl: 20,	
		l: 18,
		m: 16,
		s: 14,
	},
	spacing: {
		s: 6,
		m: 12,
		l: 18,
		xl: 24,
	},
	rounded: {
		xs: 4,
		s: 6,
		m: 12,
		l: 20,
	},
	shadow: {
		card: {
			elevation: 3,
			shadowColor: "#000",
			shadowOpacity: 0.1,
			shadowOffset: { width: 0, height: 2 },
			shadowRadius: 6,
		}
	},
};
