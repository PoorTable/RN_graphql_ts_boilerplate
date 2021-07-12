import React, { memo } from "react";
import {
	FlatList,
	ImageBackground,
	ScrollView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { PokemonItem } from "../__generated__/types";
import PokemonListComponent from "./components/PokemonListComponents";
import {
	useGetAllPokemonsQuery,
	useUseGetPokemonAbilitiesQuery,
} from "./__generated__/queries";

const PokemonListScreen = () => {
	const { data, loading } = useGetAllPokemonsQuery();

	if (loading && data?.pokemons?.results) {
		return (
			<>
				<Text>Loading...</Text>
			</>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={data?.pokemons?.results}
				renderItem={(itemData) => <PokemonListComponent item={itemData.item} />}
				numColumns={2}
			/>
		</View>
	);
};

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

export default PokemonListScreen;
