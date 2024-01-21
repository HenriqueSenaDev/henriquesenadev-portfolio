'use client';

import { Menu } from 'lucide-react';
import { smoothScroll } from '@/utils/dom';
import githubIcon from '@/assets/images/icons/github.svg';
import Image from 'next/image';

interface INavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const navItems: INavItem[] = [
    {
      label: 'Home',
      href: 'home',
    },
    {
      label: 'Sobre',
      href: 'about',
    },
    {
      label: 'Stacks',
      href: 'stack',
    },
    {
      label: 'Projetos',
      href: 'projects',
    },
    {
      label: 'Contato',
      href: 'contact',
    },
  ];

  return (
    <nav className='fixed h-[60px] w-full bg-black bg-opacity-20 hover:bg-opacity-75 z-50 sm:h-[70px] lg:bg-opacity-60 lg:hover:bg-opacity-80'>
      <div className='flex justify-between py-4 px-5 sm:py-5 lg:max-w-[900px] lg:m-auto lg:px-0 xl:max-w-[1000px] 2xl:max-w-[1160px]'>
        <button className='lg:hidden'>
          <Menu className='h-full w-auto' color='#FFF' />
        </button>

        <div className='hidden lg:flex text-[white] text-lg gap-9 xl:text-lg'>
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              className='cursor-pointer lg:hover:underline'
              onClick={() => smoothScroll(href)}
            >
              <span>{label}</span>
            </a>
          ))}
        </div>

        <a href='https://github.com/HenriqueSenaDev' target='_blank'>
          <Image
            className='h-full w-auto cursor-pointer'
            src={githubIcon}
            color=' #FFF'
            alt='Github logo'
          />
        </a>
      </div>
    </nav>
  );
}
