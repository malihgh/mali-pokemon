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

  const capitalizeName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const newAbilities = abilities
    .filter(ability => ability.is_hidden)
    .map(ability => {
      return { name: capitalizeName(ability.ability.name) };
    });

  const newTypes = types.map(type => {
    return { name: capitalizeName(type.type.name) };
  });

  const newMoves = moves.map(move => {
    return { name: capitalizeName(move.move.name) };
  });

  const newStats = stats.map(stat => {
    return { name: capitalizeName(stat.stat.name), base_stat: stat.base_stat };
  });

  return {
    id,
    name: capitalizeName(name),
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
