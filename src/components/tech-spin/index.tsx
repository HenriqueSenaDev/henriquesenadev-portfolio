'use client';

import { ITechnology } from '@/types/technology';
import { technologies } from '@/data/technologies';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Coordinates = {
  x: number;
  y: number;
};

interface ISpinTech extends ITechnology {
  degree: number;
}

export default function TechSpin() {
  const [spinTechs, setSpinTechs] = useState<ISpinTech[]>(() => {
    const spinTechs = technologies.filter((x) => x.includeSpin);
    const radiansGap = 360 / spinTechs.length;

    return spinTechs.map((tech, index) => ({
      ...tech,
      degree: radiansGap * (index - 1),
    }));
  });

  const squareRef = useRef<HTMLElement | null>(null);

  function calculateCoordinates(degree: number): Coordinates | undefined {
    if (squareRef.current === null) return undefined;

    const radians = (degree * Math.PI) / 180;
    const radius = (squareRef.current as HTMLElement).clientWidth / 2;

    return {
      x: radius * Math.cos(radians),
      y: radius * Math.sin(radians) + radius * 1.3,
    };
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSpinTechs((prevState) =>
        prevState.map((tech) => ({
          ...tech,
          degree: tech.degree - 0.5,
        })),
      );
    }, 100);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      className='w-[65%] aspect-square bg-red relative max-w-[230px] lg:h-[220px] lg:w-auto lg:-translate-x-[20%] xl:h-[240px]'
      ref={(node) => {
        squareRef.current = node;
      }}
    >
      {spinTechs.map(({ name, iconSrc, degree }) => {
        const coordinates = calculateCoordinates(degree);

        return (
          <motion.div key={name} animate={coordinates}>
            <Image
              className='absolute h-14 w-auto bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] xl:h-16'
              src={iconSrc}
              alt={`${name} logo`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
