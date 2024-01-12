import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import githubIcon from '@/assets/images/icons/github.svg';
import TechSpin from '@/components/tech-spin';

interface INavItem {
  label: string;
  href: string;
}

export default function Showcase() {
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
      label: 'Stack',
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
    <section
      id='home'
      className="h-[660px] bg-[url('../assets/images/textures/showcase.png')] bg-no-repeat bg-cover bg-center sm:h-[700px] lg:h-[630px]"
    >
      <div className='h-[inherit] flex flex-col justify-center gap-[70px] lg:flex-row lg:justify-between lg:max-w-[900px] lg:m-auto xl:max-w-[1000px] 2xl:max-w-[1160px]'>
        <nav className='h-[60px] w-full bg-black bg-opacity-45 absolute top-0 left-0 sm:h-[70px]'>
          <div className='flex justify-between py-4 px-5 sm:py-5 lg:max-w-[900px] lg:m-auto lg:px-0 xl:max-w-[1000px] 2xl:max-w-[1160px]'>
            <button className='lg:hidden'>
              <Menu className='h-full w-auto' color='#FFF' />
            </button>

            <div className='hidden lg:flex text-[white] text-lg gap-9 xl:text-lg'>
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  className='cursor-pointer lg:hover:underline'
                  href={`#${href}`}
                >
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <Image
              className='h-full w-auto cursor-pointer'
              src={githubIcon}
              color=' #FFF'
              alt='Github logo'
            />
          </div>
        </nav>

        <div className='flex flex-col items-center justify-center gap-9 text-[white] lg:items-start lg:gap-14 xl:gap-[70px]'>
          <div className='flex flex-col items-center justify-center lg:items-start'>
            <h1 className='text-[38px] tracking-wider sm:text-[44px] lg:text-[52px] xl:text-[58px]'>
              Luiz Henrique
            </h1>

            <h2 className='text-lg tracking-wider translate-y-[-5px] sm:text-[22px] lg:translate-y-0 xl:text-[28px]'>
              Fullstack Jr Developer
            </h2>
          </div>

          <div className='flex gap-1'>
            <span className='underline text-[17px] tracking-wider underline-offset-[3px] cursor-pointer sm:text-lg xl:text-[22px]'>
              Veja meu trabalho
            </span>

            <ChevronDown className='w-6 h-auto' color='#FFF' />
          </div>
        </div>

        <div className='flex justify-center lg:items-center'>
          <TechSpin />
        </div>
      </div>
    </section>
  );
}
