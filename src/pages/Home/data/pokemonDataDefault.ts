import { PokemonDataType } from '../types';

export const pokemonDataDefault: PokemonDataType[] = [
  {
    id: 132,
    name: 'ditto',
    base_experience: 101,
    // https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png
    sprite_image: {
      //   front:
      //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
    },
    abilities: [{ name: 'limber' }],
    types: [{ name: 'normal' }, { name: 'superMali' }],
    moves: [{ name: 'transform' }],
    height: 3,
    weight: 40,
    stats: [
      { base_stat: 48, name: 'hp' },
      { base_stat: 48, name: 'attack' },
      { base_stat: 48, name: 'defense' },
      { base_stat: 48, name: 'special-attack' },
      { base_stat: 48, name: 'special-defense' },
      { base_stat: 48, name: 'speed' }
    ]
  }
];
