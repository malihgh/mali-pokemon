'use client';

import { useState } from 'react';
import Text from '@/core/components/Text';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="h-screen w-full bg-no-repeat bg-cover bg-[url('/images/background.png')] py-16">
      <div className="mx-[10%] py-8 bg-white flex flex-col justify-center items-center">
        <Text type="h1">Pokèdex</Text>
        <Text type="h3" className="mt-8 mb-2">
          Find your favorite Pokemon:
        </Text>

        <input
          type="text"
          placeholder="Search name..."
          className="p-2 border-solid border-2 border-gray-200 rounded-md w-2/3"
          value={search}
          onChange={e => setSearch(e.target.value)}></input>
      </div>
    </div>
  );
};

export default Home;