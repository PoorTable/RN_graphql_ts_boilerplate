import { useUseGetPokemonAbilitiesQuery } from "../__generated__/queries";
import React, { memo, useEffect, useState } from "react";
import {
	ImageBackground,
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	ListRenderItem,
} from "react-native";
import { Ability, PokemonItem } from "../../__generated__/types";

const PokemonAbilities = memo(({ name }: any) => {
	const { data, loading } = useUseGetPokemonAbilitiesQuery({
		variables: { name: name },
	});
	useEffect(() => {
		console.log(name);
	}, [data]);
	if (loading)
		return (
			<>
				<Text> Loading...</Text>
			</>
		);

	return (
		<>
			{data?.pokemon?.abilities!.map((item) => {
				return <Text>{item?.ability?.name}</Text>;
			})}
		</>
	);
});

export default PokemonAbilities;

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
