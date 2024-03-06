import { PokemonDataType } from '@/pages/Home/types';
import { PokemonDetailsServerType } from './types';
import { myColors } from './pokemonTypesColors';

export const capitalizeName = (name: string) => {
  const newName = name.split('-');

  if (newName.length > 1) {
    return (
      newName[0].charAt(0).toUpperCase() +
      newName[0].slice(1) +
      ' ' +
      newName[1].charAt(0).toUpperCase() +
      newName[1].slice(1)
    );
  } else return name.charAt(0).toUpperCase() + name.slice(1);
};

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
      return { name: capitalizeName(ability.ability.name) };
    });

  const newTypes = types.map(type => {
    return {
      name: capitalizeName(type.type.name),
      color: ` bg-[${myColors.get(type.type.name) ?? '#777'}]`
    };
  });

  const newMoves = moves.map(move => {
    return { name: capitalizeName(move.move.name) };
  });

  const newStats = stats.map(stat => {
    return { name: capitalizeName(stat.stat.name), base_stat: stat.base_stat };
  });

  return {
    id,
    name: name,
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
