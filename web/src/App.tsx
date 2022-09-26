import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as Dialog from '@radix-ui/react-dialog';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles/main.css';

import logoImage from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { api } from './services/api';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get('games').then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt='logo' />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu{' '}
        <span className='text-transparent bg-nlw-gradient bg-clip-text'>
          duo
        </span>{' '}
        está aqui.
      </h1>

      <Swiper
        slidesPerView={6}
        navigation={true}
        modules={[Navigation, Virtual]}
        className='max-w-[1344px] mt-16'
        virtual
      >
        {games.map((game, index) => (
          <SwiperSlide key={game.id} virtualIndex={index}>
            <GameBanner
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
