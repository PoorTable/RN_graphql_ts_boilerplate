import { useUseGetPokemonAbilitiesQuery } from "../__generated__/queries";
import React, { memo, useState } from "react";
import {
	ImageBackground,
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	ListRenderItem,
} from "react-native";
import { Ability, PokemonItem } from "../../__generated__/types";
import PokemonAbilities from "./PokemonAbilities";

const PokemonListComponent: React.FC<any> = memo(({ item }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	return (
		<TouchableOpacity
			onPress={() => {
				setIsVisible(!isVisible);
				console.log(isVisible);
			}}
		>
			<View style={styles.pokemonContainer} key={item?.id}>
				<ImageBackground
					source={{ uri: item?.image! }}
					resizeMode="cover"
					style={{ flex: 1, justifyContent: "flex-end" }}
				>
					{!isVisible ? (
						<Text>{item?.name}</Text>
					) : (
						<PokemonAbilities name={item?.name} />
					)}
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		alignContent: "space-between",
		justifyContent: "space-evenly",
	},
	pokemonContainer: {
		borderBottomWidth: 2,
		borderBottomColor: "black",
		height: 150,
		width: 150,
		justifyContent: "space-evenly",
		marginHorizontal: 10,
	},
});

export default PokemonListComponent;
