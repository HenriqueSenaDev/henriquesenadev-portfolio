'use client';

import { useState } from 'react';
import { javaStack, js_ts_Stack } from '@/data/stacks';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Stack from './stack';

export default function DevelopmentStacks() {
  const [activeStack, setActiveStack] = useState<'java' | 'js/ts'>('java');
  const [xTranslate, setXTranslate] = useState<object>({});

  function toogleStack() {
    if (window.innerWidth >= 1024) return { x: 0 };

    if (activeStack === 'java') {
      setActiveStack('js/ts');
      setXTranslate({ x: '-100%' });
    } else {
      setActiveStack('java');
      setXTranslate({ x: '0%' });
    }
  }

  return (
    <section className="bg-[url('../assets/images/textures/stacks-gray.png')] bg-no-repeat bg-cover bg-center">
      <div className='flex items-center justify-center bg-matte-black h-[74px] text-xl text-white lg:text-[22px] 2xl:text-2xl'>
        <h1>Stacks de Desenvolvimento</h1>
      </div>

      <div className='pt-12 relative'>
        <div
          // eslint-disable-next-line
          className={`h-8 flex justify-center items-center aspect-square absolute top-12 left-[50%] z-50  bg-white bg-opacity-10 rounded-[50%] md:h-10 md:top-10 lg:hidden ${activeStack === 'java' ? 'translate-x-20' : '-translate-x-32 rotate-180'}`}
          onClick={toogleStack}
        >
          <ChevronRight color='white' />
        </div>

        <motion.div
          className='flex lg:w-[900px] lg:m-auto lg:flex lg:justify-center lg:gap-[120px] xl:w-[1000px] xl:gap-[160px] 2xl:w-[1160px] 2xl:gap-[210px]'
          animate={xTranslate}
        >
          <Stack {...javaStack} />

          <Stack {...js_ts_Stack} />
        </motion.div>
      </div>
    </section>
  );
}
