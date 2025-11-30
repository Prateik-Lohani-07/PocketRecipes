import { FlexAlignType, ViewStyle } from "react-native";

type Justify = | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;

export function flex(
	dir: "row" | "col",
	align: FlexAlignType = "flex-start",
	justify: Justify = "flex-start"
): ViewStyle {
	return {
		flexDirection: dir === "row" ? "row" : "column",
		alignItems: align,
		justifyContent: justify,
	};
}
