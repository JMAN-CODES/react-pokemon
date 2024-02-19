import { FC } from 'react';
import Pokelist from './pokemonList/pokelist';

const HomePage: FC = () => {

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Listing page</h3>
      <Pokelist></Pokelist>
    </div>
  );
};

export default HomePage;
