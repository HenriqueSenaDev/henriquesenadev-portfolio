'use client';

import { ChevronDown } from 'lucide-react';
import { smoothScroll } from '@/utils/dom';
import TechSpin from '@/components/tech-spin';

export default function Showcase() {
  return (
    <section
      id='home'
      className="h-[660px] bg-[url('../assets/images/textures/showcase.png')] bg-no-repeat bg-cover bg-center sm:h-[700px] lg:h-[630px]"
    >
      <div className='h-[inherit] flex flex-col justify-center gap-[70px] lg:flex-row lg:justify-between lg:max-w-[900px] lg:m-auto xl:max-w-[1000px] 2xl:max-w-[1160px]'>
        <div className='flex flex-col items-center justify-center gap-9 text-[white] lg:items-start lg:gap-14 xl:gap-[70px]'>
          <div className='flex flex-col items-center justify-center lg:items-start'>
            <h1 className='text-[38px] tracking-wider sm:text-[44px] lg:text-[52px] xl:text-[58px]'>
              Luiz Henrique
            </h1>

            <h2 className='text-lg tracking-wider translate-y-[-5px] sm:text-[22px] lg:translate-y-0 xl:text-[28px]'>
              Fullstack Jr Developer
            </h2>
          </div>

          <a className='flex gap-1' onClick={() => smoothScroll('projects')}>
            <span className='underline text-[17px] tracking-wider underline-offset-[3px] cursor-pointer sm:text-lg xl:text-[22px]'>
              Veja meu trabalho
            </span>

            <ChevronDown className='w-6 h-auto' color='#FFF' />
          </a>
        </div>

        <div className='flex justify-center lg:items-center'>
          <TechSpin />
        </div>
      </div>
    </section>
  );
}
