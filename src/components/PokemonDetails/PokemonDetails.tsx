import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface ability {
  name: string;
  url: string;
}
interface abilities {
  ability: ability;
  is_hidden: boolean;
  slot: number;
}
interface PokeDetail {
  id ?: number;
  abilities: abilities[];
  base_experience: number;
  weight: number;
}
const PokemonDetails: FC = () => {
  var [PokeDetail, setPokeDetail] = useState<PokeDetail>();
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    axios.get<PokeDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => setPokeDetail(response.data))
  }, []);
  console.log(PokeDetail)
  return (
    <>
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Summary page</h3>

      <img className="flex justify-center items-center" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
      <h2 className="text-2xl font-bold my-5">Ability 1: {PokeDetail?.abilities[0].ability.name}</h2>
      <h2 className="text-2xl font-bold my-5">Ability 2: {PokeDetail?.abilities[1].ability.name}</h2>
      <h3 className="text-2xl font-bold my-5">Base Experience: {PokeDetail?.base_experience}</h3>
      <h3 className="text-2xl font-bold my-5">Weight: {PokeDetail?.weight}</h3>
    </div>
    </>
  );
};
export default PokemonDetails;