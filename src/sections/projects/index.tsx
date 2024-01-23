'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/project-card';

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  function addIndex() {
    if (projectIndex === projects.length - 1) {
      return setProjectIndex(0);
    }
    setProjectIndex(projectIndex + 1);
  }

  function subIndex() {
    if (projectIndex === 0) {
      return setProjectIndex(projects.length - 1);
    }
    setProjectIndex(projectIndex - 1);
  }

  return (
    <section
      id='projects'
      className="flex flex-col gap-12 bg-[url('../assets/images/textures/projects-dark.png')] bg-cover bg-center bg-no-repeat pt-6 pb-20 text-center relative text-white lg:pt-9 lg:pb-24 xl:pt-12"
    >
      <h1 className='text-2xl tracking-[4px] lg:text-[28px] xl:text-4xl'>
        Projetos
      </h1>

      <motion.div className='flex' animate={{ x: `-${projectIndex}00%` }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>

      <div className='flex gap-2 relative m-auto w-[320px] justify-center'>
        {projects.map((project, index) => (
          <div
            key={project.title}
            // eslint-disable-next-line
            className={`h-[7px] aspect-square rounded-[50%] bg-white ${index === projectIndex ? 'bg-opacity-90' : 'bg-opacity-20'}`}
          />
        ))}

        <ChevronLeft
          className='absolute h-7 w-auto aspect-square left-8 -top-2 bg-white bg-opacity-10 rounded-[50%] cursor-pointer sm:h-8'
          onClick={subIndex}
        />

        <ChevronRight
          className='absolute h-7 w-auto aspect-square right-8 -top-2 bg-white bg-opacity-10 rounded-[50%] cursor-pointer sm:h-8'
          onClick={addIndex}
        />
      </div>
    </section>
  );
}
