import { PokemonDataType } from '@/core/api/types';

const pokemonDataDefault = (): PokemonDataType[] => [
  {
    id: 132,
    name: 'ditto',
    base_experience: 101,
    // https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png ---> Has better quality
    sprite_image: {
      front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
    },
    abilities: [{ name: 'Limber' }],
    types: [{ name: 'Normal', color: 'normal' }],
    moves: [{ name: 'Transform' }],
    height: 3,
    weight: 40,
    stats: [
      { base_stat: 48, name: 'Hp' },
      { base_stat: 48, name: 'Attack' },
      { base_stat: 48, name: 'Defense' },
      { base_stat: 48, name: 'Special Attack' },
      { base_stat: 48, name: 'Special Defense' },
      { base_stat: 48, name: 'Speed' }
    ]
  }
];
export default pokemonDataDefault;
