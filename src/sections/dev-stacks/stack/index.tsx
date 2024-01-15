import { technologies } from '@/data/technologies';
import { IStack } from '@/types/stack';
import { TechColorMap } from '@/types/technology';
import stackBaseImg from '@/assets/images/vectors/stack-base.svg';
import Image from 'next/image';

export default function Stack({ name, groups }: IStack) {
  const colorVariants: TechColorMap = {
    java: 'bg-[#B51616]',
    spring: 'bg-[#55AA1E]',
    javascript: 'bg-[#D0BB06]',
    typescript: 'bg-[#084ACA]',
    react: 'bg-[#087EA4]',
    nextjs: 'bg-[#101010F8]',
    nestjs: 'bg-[#EA2845]',
  };

  return (
    <div className='min-w-[100%] lg:min-w-[unset]'>
      <h1 className='text-white text-lg text-center mx-auto mb-[18px] sm:text-xl 2xl:text-2xl'>{`${name} Stack`}</h1>

      <div className='max-w-[190px] flex flex-col gap-3 m-auto h-[75vh] overflow-auto tiny-scroll sm:max-w-[210px] lg:max-w-[230px] 2xl:max-w-[250px]'>
        {groups.map(({ techName, label, items }) => {
          const bgClass = colorVariants[techName];
          const tech = technologies.find((x) => x.name === techName);

          return (
            <div className='flex flex-col gap-[18px]' key={techName}>
              <div>
                <div
                  // eslint-disable-next-line
                  className={`flex justify-center items-center m-auto w-[50px] aspect-square rounded-[50%] ${tech?.dark ? 'bg-[#101010]' : 'bg-white'}`}
                >
                  <Image
                    className='aspect-square'
                    src={tech?.iconSrc as string}
                    alt={`${techName} icon`}
                  />
                </div>

                <h2 className='text-sm text-white mt-2 text-center sm:text-base 2xl:text-xl'>
                  {label}
                </h2>
              </div>

              <div className='flex flex-col text-sm text-[white] bg-transparent'>
                {items.map((item) => (
                  <div
                    key={item}
                    className={`${bgClass} text-center py-3 px-5 first:rounded-t-xl last:rounded-b-xl border-b-[1px] border-white last:border-0 sm:text-base xl:text-[17px] 2xl:text-lg`}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Image
        className='max-w-[290px] m-auto -translate-y-14 sm:max-w-[310px] sm:-translate-y-16 lg:max-w-[340px] lg:-translate-y-[72px] 2xl:max-w-[390px] 2xl:-translate-y-[78px]'
        src={stackBaseImg}
        alt='stack base supporting the items'
      />
    </div>
  );
}
