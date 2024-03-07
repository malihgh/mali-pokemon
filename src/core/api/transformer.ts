import { PokemonDataType } from '@/pages/Home/types';
import { PokemonDetailsServerType } from './types';

export const transformPokemonDetails = (
  props: PokemonDetailsServerType
): PokemonDataType => {
  const {
    id,
    name,
    base_experience,
    sprites,
    abilities,
    types,
    moves,
    height,
    weight,
    stats
  } = props;

  const newAbilities = abilities
    .filter(ability => ability.is_hidden)
    .map(ability => {
      return { name: ability.ability.name };
    });

  const newTypes = types.map(type => {
    return { name: type.type.name };
  });

  const newMoves = moves.map(move => {
    return { name: move.move.name };
  });

  const newStats = stats.map(stat => {
    return { name: stat.stat.name, base_stat: stat.base_stat };
  });

  return {
    id,
    name,
    base_experience,
    sprite_image: { front: sprites.front_default, back: sprites.back_default },
    abilities: newAbilities,
    types: newTypes,
    moves: newMoves,
    height,
    weight,
    stats: newStats
  };
};
