import Image from 'next/image';
import devSelfie from '@/assets/images/entities/dev-selfie.png';
import dukeWine from '@/assets/images/entities/duke-wine.png';
import duke from '@/assets/images/entities/duke.png';
import awsBadge from '@/assets/images/icons/badge.svg';
import { User, Cake, MapPin, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col px-5 pt-8 pb-9 gap-11 items-center relative max-w-[360px] lg:max-w-[900px] lg:px-0 lg:py-16 lg:gap-6 xl:max-w-[1000px] 2xl:max-w-[1160px]'>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-10 2xl:gap-[70px]'>
          <div className='flex flex-col justify-center items-center relative gap-8 lg:flex-row 2xl:gap-16'>
            <Image
              className='w-[120px] h-auto rounded-xl sm:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[190px]'
              src={devSelfie}
              alt='my selfie'
            />

            <Image
              className='absolute top-32 left-4 w-20 lg:w-28 lg:-left-16 lg:-bottom-10 lg:top-[unset] 2xl:w-36 2xl:-left-24 2xl:-bottom-20'
              src={dukeWine}
              alt='Java mascot Duke with glass of wine'
            />

            <div className='flex flex-col gap-8 lg:gap-6 2xl:gap-10'>
              <div className='flex flex-col gap-3 items-center lg:items-start  2xl:gap-5'>
                {[
                  {
                    content: 'Luiz Henrique Nunes Sena',
                    Icon: User,
                  },
                  {
                    content: '16/08/2005 - 18 anos',
                    Icon: Cake,
                  },
                  {
                    content: 'Acopiara - CE, Brasil',
                    Icon: MapPin,
                  },
                ].map(({ content, Icon }) => (
                  <div key={content} className='flex gap-[10px] 2xl:gap-5'>
                    <Icon />

                    <span className='text-base md:text-[17px] xl:text-xl'>
                      {content}
                    </span>
                  </div>
                ))}
              </div>

              <div className='flex gap-2 bg-light-gray rounded-2xl py-3 px-4 shadow-light max-w-[250px] 2xl:max-w-[280px]'>
                <Image
                  className='h-full'
                  src={awsBadge}
                  alt='AWS Academy Cloud Foundations badge'
                />

                <div className='flex flex-col items-center text-center justify-center gap-1 text-sm xl:text-[15px] 2xl:text-[17px]'>
                  <span>AWS Academy Cloud Foundations</span>

                  <span>Badge (Insígnia)</span>
                </div>
              </div>
            </div>
          </div>

          <ul className='flex flex-col gap-3 text-base list-disc pl-5 md:text-[17px] lg:flex-1 lg:justify-center lg:gap-5 xl:text-xl 2xl:text-[22px]'>
            <li>
              Desenvolvedor autodidata em busca da primeira oportunidade no
              mercado de trabalho.
            </li>

            <li>
              Fullstack com foco na Web através das linguagens Java e
              TypeScript.
            </li>

            <li>Perfil generalista frontend e especialista backend.</li>

            <li>
              Sempre interessado nos benefícios trazidos pelas tecnologias e
              pronto para desafios.
            </li>
          </ul>
        </div>

        <Image
          className='absolute right-4 bottom-7 w-16 lg:w-20 lg:bottom-12 2xl:w-[100px] 2xl:-right-6'
          src={duke}
          alt='Java mascot Duke'
        />

        <button className='flex gap-2 items-center text-sm border-black border-[1px] py-2 px-3 rounded-xl max-w-[152px] shadow-light hover:bg-slate-200 xl:text-base 2xl:text-[17px] 2xl:max-w-[170px] 2xl:gap-3'>
          <Mail className='h-5 xl:h-7' />

          <span>Fale comigo!</span>
        </button>
      </div>
    </div>
  );
}
