import { MagnifyingGlassPlus } from 'phosphor-react';

import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <strong className='block text-white text-2xl font-black'>
          Não encontrou seu duo?
        </strong>
        <span className='block text-zinc-400'>
          Publique um anúncio para encontrar novos players!
        </span>

        <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white hover:bg-violet-600 rounded flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
