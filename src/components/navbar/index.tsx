'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { smoothScroll } from '@/utils/dom';
import githubIcon from '@/assets/images/icons/github.svg';

interface INavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isOpenRef = useRef<boolean>(false);

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
      label: 'Projetos',
      href: 'projects',
    },
    {
      label: 'Stacks',
      href: 'stack',
    },
    {
      label: 'Contato',
      href: 'contact',
    },
  ];

  function toggleNav() {
    setIsOpen(!isOpen);
    isOpenRef.current = !isOpen;
  }

  useEffect(() => {
    const navbar = document.getElementById('nav') as HTMLElement;

    function checkOutClick(evt: MouseEvent) {
      const target = evt.target as HTMLElement;
      if (!navbar.contains(target) && isOpenRef.current) {
        setIsOpen(false);
      }
    }

    window.addEventListener('click', checkOutClick);

    function cleanUp() {
      window.removeEventListener('click', checkOutClick);
    }

    return cleanUp;
    // eslint-disable-next-line
  }, []);

  return (
    <nav
      id='nav'
      // eslint-disable-next-line
      className={`fixed w-full bg-black ${isOpen ? 'bg-opacity-85' : 'bg-opacity-20'} z-50 text-white lg:h-[70px] lg:bg-opacity-60 lg:hover:bg-opacity-80`}
    >
      <div className='flex justify-between py-4 px-5 sm:py-5 lg:max-w-[900px] lg:m-auto lg:px-0 xl:max-w-[1000px] 2xl:max-w-[1160px]'>
        <button id='nav-menu' className='lg:hidden' onClick={toggleNav}>
          <Menu className='h-full w-auto' color='#FFF' />
        </button>

        <div className='hidden lg:flex text-lg gap-9 xl:text-lg'>
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

      {isOpen && (
        <div className='flex flex-col p-3 gap-2 -translate-y-6 text-base md:text-lg lg:hidden'>
          {navItems.map(({ label, href }) => (
            <a key={href} className='m-auto' onClick={() => smoothScroll(href)}>
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
