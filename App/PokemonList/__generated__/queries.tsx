import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type GetAllPokemonsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPokemonsQuery = (
  { __typename: 'Query' }
  & { pokemons?: Types.Maybe<(
    { __typename: 'PokemonList' }
    & { results?: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'PokemonItem' }
      & Pick<Types.PokemonItem, 'id' | 'name' | 'image' | 'url'>
    )>>> }
  )> }
);

export type UseGetPokemonAbilitiesQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type UseGetPokemonAbilitiesQuery = (
  { __typename: 'Query' }
  & { pokemon?: Types.Maybe<(
    { __typename: 'Pokemon' }
    & { abilities?: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'Ability' }
      & { ability?: Types.Maybe<(
        { __typename: 'BaseName' }
        & Pick<Types.BaseName, 'name' | 'url'>
      )> }
    )>>> }
  )> }
);


export const GetAllPokemonsDocument = gql`
    query GetAllPokemons {
  pokemons {
    results {
      id
      name
      image
      url
    }
  }
}
    `;
export type GetAllPokemonsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>, 'query'>;

    export const GetAllPokemonsComponent = (props: GetAllPokemonsComponentProps) => (
      <ApolloReactComponents.Query<GetAllPokemonsQuery, GetAllPokemonsQueryVariables> query={GetAllPokemonsDocument} {...props} />
    );
    

/**
 * __useGetAllPokemonsQuery__
 *
 * To run a query within a React component, call `useGetAllPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPokemonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPokemonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>(GetAllPokemonsDocument, options);
      }
export function useGetAllPokemonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>(GetAllPokemonsDocument, options);
        }
export type GetAllPokemonsQueryHookResult = ReturnType<typeof useGetAllPokemonsQuery>;
export type GetAllPokemonsLazyQueryHookResult = ReturnType<typeof useGetAllPokemonsLazyQuery>;
export type GetAllPokemonsQueryResult = ApolloReactCommon.QueryResult<GetAllPokemonsQuery, GetAllPokemonsQueryVariables>;
export const UseGetPokemonAbilitiesDocument = gql`
    query useGetPokemonAbilities($name: String!) {
  pokemon(name: $name) {
    abilities {
      ability {
        name
        url
      }
    }
  }
}
    `;
export type UseGetPokemonAbilitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UseGetPokemonAbilitiesQuery, UseGetPokemonAbilitiesQueryVariables>, 'query'> & ({ variables: UseGetPokemonAbilitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UseGetPokemonAbilitiesComponent = (props: UseGetPokemonAbilitiesComponentProps) => (
      <ApolloReactComponents.Query<UseGetPokemonAbilitiesQuery, UseGetPokemonAbilitiesQueryVariables> query={UseGetPokemonAbilitiesDocument} {...props} />
    );
    

/**
 * __useUseGetPokemonAbilitiesQuery__
 *
 * To run a query within a React component, call `useUseGetPokemonAbilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUseGetPokemonAbilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUseGetPokemonAbilitiesQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUseGetPokemonAbilitiesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<UseGetPokemonAbilitiesQuery, UseGetPokemonAbilitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UseGetPokemonAbilitiesQuery, UseGetPokemonAbilitiesQueryVariables>(UseGetPokemonAbilitiesDocument, options);
      }
export function useUseGetPokemonAbilitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UseGetPokemonAbilitiesQuery, UseGetPokemonAbilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UseGetPokemonAbilitiesQuery, UseGetPokemonAbilitiesQueryVariables>(UseGetPokemonAbilitiesDocument, options);
        }
export type UseGetPokemonAbilitiesQueryHookResult = ReturnType<typeof useUseGetPokemonAbilitiesQuery>;
export type UseGetPokemonAbilitiesLazyQueryHookResult = ReturnType<typeof useUseGetPokemonAbilitiesLazyQuery>;
export type UseGetPokemonAbilitiesQueryResult = ApolloReactCommon.QueryResult<UseGetPokemonAbilitiesQuery, UseGetPokemonAbilitiesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Upload: any;
}


export interface Ability {
  __typename: 'Ability';
  ability?: Maybe<BaseName>;
  is_hidden?: Maybe<Scalars['Boolean']>;
  slot?: Maybe<Scalars['Int']>;
}

export interface BaseName {
  __typename: 'BaseName';
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface BaseResponse {
  __typename: 'BaseResponse';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  response?: Maybe<Scalars['JSON']>;
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export interface GameIndex {
  __typename: 'GameIndex';
  game_index?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
}

export interface HeldItem {
  __typename: 'HeldItem';
  item?: Maybe<BaseName>;
  version_details?: Maybe<Array<Maybe<VersionDetail>>>;
}


export interface Move {
  __typename: 'Move';
  move?: Maybe<BaseName>;
  version_group_details?: Maybe<Array<Maybe<VersionGroupDetail>>>;
}

export interface Mutation {
  __typename: 'Mutation';
  hello?: Maybe<BaseResponse>;
}

export interface Pokemon {
  __typename: 'Pokemon';
  abilities?: Maybe<Array<Maybe<Ability>>>;
  base_experience?: Maybe<Scalars['Int']>;
  forms?: Maybe<Array<Maybe<BaseName>>>;
  game_indices?: Maybe<Array<Maybe<GameIndex>>>;
  height?: Maybe<Scalars['Int']>;
  held_items?: Maybe<Array<Maybe<HeldItem>>>;
  id?: Maybe<Scalars['Int']>;
  is_default?: Maybe<Scalars['Boolean']>;
  location_area_encounters?: Maybe<Scalars['String']>;
  moves?: Maybe<Array<Maybe<Move>>>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  species?: Maybe<BaseName>;
  sprites?: Maybe<Sprite>;
  stats?: Maybe<Array<Maybe<Stat>>>;
  types?: Maybe<Array<Maybe<Type>>>;
  weight?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
}

export interface PokemonItem {
  __typename: 'PokemonItem';
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
}

export interface PokemonList {
  __typename: 'PokemonList';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<PokemonItem>>>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename: 'Query';
  pokemonsByAbility?: Maybe<BaseResponse>;
  pokemonsByEggGroup?: Maybe<BaseResponse>;
  pokemonsByGender?: Maybe<BaseResponse>;
  pokemonsByGrowthRate?: Maybe<BaseResponse>;
  pokemonsByMove?: Maybe<BaseResponse>;
  pokemonsByNature?: Maybe<BaseResponse>;
  pokemons?: Maybe<PokemonList>;
  pokemon?: Maybe<Pokemon>;
  encounter?: Maybe<BaseResponse>;
  move?: Maybe<BaseResponse>;
}


export interface QueryPokemonsByAbilityArgs {
  ability: Scalars['String'];
}


export interface QueryPokemonsByEggGroupArgs {
  eggGroup: Scalars['String'];
}


export interface QueryPokemonsByGenderArgs {
  gender: Scalars['String'];
}


export interface QueryPokemonsByGrowthRateArgs {
  growthRate: Scalars['String'];
}


export interface QueryPokemonsByMoveArgs {
  move: Scalars['String'];
}


export interface QueryPokemonsByNatureArgs {
  nature: Scalars['String'];
}


export interface QueryPokemonsArgs {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}


export interface QueryPokemonArgs {
  name: Scalars['String'];
}


export interface QueryEncounterArgs {
  encounter: Scalars['String'];
}


export interface QueryMoveArgs {
  move: Scalars['String'];
}

export interface Sprite {
  __typename: 'Sprite';
  back_default?: Maybe<Scalars['String']>;
  back_female?: Maybe<Scalars['String']>;
  back_shiny?: Maybe<Scalars['String']>;
  back_shiny_female?: Maybe<Scalars['String']>;
  front_default?: Maybe<Scalars['String']>;
  front_female?: Maybe<Scalars['String']>;
  front_shiny?: Maybe<Scalars['String']>;
  front_shiny_female?: Maybe<Scalars['String']>;
}

export interface Stat {
  __typename: 'Stat';
  base_stat?: Maybe<Scalars['Int']>;
  effort?: Maybe<Scalars['Int']>;
  stat?: Maybe<BaseName>;
}

export interface Type {
  __typename: 'Type';
  slot?: Maybe<Scalars['Int']>;
  type?: Maybe<BaseName>;
}


export interface VersionDetail {
  __typename: 'VersionDetail';
  rarity?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
}

export interface VersionGroupDetail {
  __typename: 'VersionGroupDetail';
  level_learned_at?: Maybe<Scalars['Int']>;
  move_learn_method?: Maybe<BaseName>;
  version_group?: Maybe<BaseName>;
}
