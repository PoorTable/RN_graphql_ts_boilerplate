
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import React from 'react';
import {View, Text} from "react-native";
import PokemonListScreen from './PokemonList/PokemonListScreen';


function App() {

    //** Here you can place your GraphQL endpoint */
    const ENDPOINT = "https://mazipan-gql-pokeapi.herokuapp.com/graphql";

    const apolloHttpLink = createHttpLink({
        uri: ENDPOINT,
        credentials: 'same-origin',
    });

    const apolloAuthLink = setContext(async (_, { headers }) => {
        return {
            headers: {
                ...headers,
                // authorization: `Bearer ${process.env.AUTH_TOKEN}`,
            },
            
        };
    });

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: apolloAuthLink.concat(apolloHttpLink) as any,
    });

    return (
        <ApolloProvider client={client}>
            <PokemonListScreen/>
        </ApolloProvider>
    );
}

export default App;
