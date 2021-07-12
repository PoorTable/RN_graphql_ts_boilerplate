export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Ability = {
  __typename?: 'Ability';
  ability?: Maybe<BaseName>;
  is_hidden?: Maybe<Scalars['Boolean']>;
  slot?: Maybe<Scalars['Int']>;
};

export type BaseName = {
  __typename?: 'BaseName';
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  response?: Maybe<Scalars['JSON']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GameIndex = {
  __typename?: 'GameIndex';
  game_index?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
};

export type HeldItem = {
  __typename?: 'HeldItem';
  item?: Maybe<BaseName>;
  version_details?: Maybe<Array<Maybe<VersionDetail>>>;
};


export type Move = {
  __typename?: 'Move';
  move?: Maybe<BaseName>;
  version_group_details?: Maybe<Array<Maybe<VersionGroupDetail>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  hello?: Maybe<BaseResponse>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
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
};

export type PokemonItem = {
  __typename?: 'PokemonItem';
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type PokemonList = {
  __typename?: 'PokemonList';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<PokemonItem>>>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
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
};


export type QueryPokemonsByAbilityArgs = {
  ability: Scalars['String'];
};


export type QueryPokemonsByEggGroupArgs = {
  eggGroup: Scalars['String'];
};


export type QueryPokemonsByGenderArgs = {
  gender: Scalars['String'];
};


export type QueryPokemonsByGrowthRateArgs = {
  growthRate: Scalars['String'];
};


export type QueryPokemonsByMoveArgs = {
  move: Scalars['String'];
};


export type QueryPokemonsByNatureArgs = {
  nature: Scalars['String'];
};


export type QueryPokemonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPokemonArgs = {
  name: Scalars['String'];
};


export type QueryEncounterArgs = {
  encounter: Scalars['String'];
};


export type QueryMoveArgs = {
  move: Scalars['String'];
};

export type Sprite = {
  __typename?: 'Sprite';
  back_default?: Maybe<Scalars['String']>;
  back_female?: Maybe<Scalars['String']>;
  back_shiny?: Maybe<Scalars['String']>;
  back_shiny_female?: Maybe<Scalars['String']>;
  front_default?: Maybe<Scalars['String']>;
  front_female?: Maybe<Scalars['String']>;
  front_shiny?: Maybe<Scalars['String']>;
  front_shiny_female?: Maybe<Scalars['String']>;
};

export type Stat = {
  __typename?: 'Stat';
  base_stat?: Maybe<Scalars['Int']>;
  effort?: Maybe<Scalars['Int']>;
  stat?: Maybe<BaseName>;
};

export type Type = {
  __typename?: 'Type';
  slot?: Maybe<Scalars['Int']>;
  type?: Maybe<BaseName>;
};


export type VersionDetail = {
  __typename?: 'VersionDetail';
  rarity?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
};

export type VersionGroupDetail = {
  __typename?: 'VersionGroupDetail';
  level_learned_at?: Maybe<Scalars['Int']>;
  move_learn_method?: Maybe<BaseName>;
  version_group?: Maybe<BaseName>;
};
