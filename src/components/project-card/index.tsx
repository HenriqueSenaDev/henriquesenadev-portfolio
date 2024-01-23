'use client';

import Image, { ImageLoader } from 'next/image';
import { useState } from 'react';
import { IProject } from '@/types/projects';
import { technologies } from '@/data/technologies';
import { ChevronLeft, ChevronRight, Github, MousePointer2 } from 'lucide-react';
import { projectImageLoader } from '@/utils/optimizing';

export default function ProjectCard(project: IProject) {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const {
    title,
    description,
    images,
    githubLink,
    webLink,
    technologies: usedTechnologies,
  } = project;

  function addIndex() {
    if (imgIndex === images.length - 1) {
      return setImgIndex(0);
    }
    setImgIndex(imgIndex + 1);
  }

  function subIndex() {
    if (imgIndex === 0) {
      return setImgIndex(images.length - 1);
    }
    setImgIndex(imgIndex - 1);
  }

  return (
    <div className='min-w-full px-5'>
      <div className='rounded-[20px] text-white p-6 pb-11 bg-white bg-opacity-5 max-w-[320px] m-auto shadow-[0_0_10px_4px_rgba(255,255,255,0.2)] sm:max-w-[360px] lg:max-w-[820px] lg:p-9 xl:max-w-[920px] xl:p-11 2xl:max-w-[950px]'>
        <div className='flex flex-col lg:flex-row lg:gap-8 xl:gap-10'>
          <div className='relative lg:w-[45%]'>
            <div className='flex items-center w-full aspect-video mb-6'>
              <Image
                src={images[imgIndex]}
                loader={projectImageLoader as ImageLoader}
                className='rounded-lg'
                width={360}
                height={202}
                alt='project thumb'
              />
            </div>

            <div className='flex gap-2 items-center justify-center max-w-[80%] m-auto'>
              <ChevronLeft
                className='h-[22px] w-auto aspect-square mr-3 bg-white bg-opacity-10 rounded-[50%] cursor-pointer sm:h-6'
                onClick={subIndex}
              />

              {images.map((img, index) => (
                <div
                  key={index}
                  // eslint-disable-next-line
                  className={`h-[7px] aspect-square rounded-[50%] bg-white ${index === imgIndex ? 'bg-opacity-90' : 'bg-opacity-20'}`}
                />
              ))}

              <ChevronRight
                className='h-[22px] w-auto aspect-square ml-3 bg-white bg-opacity-10 rounded-[50%] cursor-pointer sm:h-6'
                onClick={addIndex}
              />
            </div>
          </div>

          <div className='flex flex-col lg:flex-1 lg:gap-6'>
            <div className='flex flex-col gap-2 text-justify mt-5 mb-6 lg:m-0 lg:gap-3'>
              <h2 className='text-2xl xl:text-[26px]'>{title}</h2>

              <p className='text-sm sm:text-base lg:text-[17px] xl:text-lg'>
                {description}
              </p>
            </div>

            <div className='flex gap-6 text-white underline text-[15px] underline-offset-2 sm:text-base lg:text-[17px] xl:text-lg'>
              <a
                className='flex items-center gap-[10px] cursor-pointer hover:text-slate-300'
                href={githubLink}
                target='_blank'
              >
                <Github className='w-5 aspect-square text-[inherit] sm:w-[22px]' />

                <span>Acesse o código</span>
              </a>

              {webLink && (
                <a
                  className='flex gap-[10px] items-center cursor-pointer hover:text-slate-300'
                  href={webLink}
                  target='_blank'
                >
                  <MousePointer2 className='rotate-90 w-5 aspect-square text-[inherit] sm:w-[22px]' />

                  <span>Visitar</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-3 items-center text-[17px] mt-9 sm:text-lg lg:text-2xl xl:text-2xl 2xl:gap-5'>
          <h3>Tecnologias:</h3>

          {usedTechnologies.map((tech) => {
            const iconSrc = technologies.find((x) => x.name == tech)?.iconSrc;

            return (
              <Image
                className='h-8 sm:h-9 lg:h-10 2xl:h-12'
                key={tech}
                src={iconSrc as string}
                alt={`${tech} icon`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
