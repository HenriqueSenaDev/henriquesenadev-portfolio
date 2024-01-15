import SocialButton from '@/components/social-button';
import { Github, Linkedin, Mail } from 'lucide-react';
import contactImg from '@/assets/images/vectors/contact.svg';
import Image from 'next/image';

export default function Contact() {
  return (
    <section
      id='contact'
      className='flex px-2 pt-6 pb-10 min-[340px]:px-5 lg:items-center lg:max-w-[900px] lg:m-auto xl:max-w-[1000px] xl:pt-10 xl:pb-[72px]'
    >
      <Image
        className='hidden lg:block h-[230px] xl:h-[260px] 2xl:h-[290px]'
        src={contactImg}
        alt='smartphone with two people in a message chat'
      />

      <div className='text-center max-w-[320px] m-auto sm:max-w-[350px] lg:max-w-[400px] 2xl:max-w-[480px]'>
        <h1
          className='text-2xl underline underline-offset-4 lg:text-[28px] 2xl:text-[36px]
        '
        >
          Contato
        </h1>

        <p className='text-base leading-[18px] mt-5 mb-9 md:text-[17px] lg:text-lg xl:text-xl xl:leading-6 2xl:text-[22px] 2xl:my-9 2xl:max-w-[440px] 2xl:m-auto'>
          Me encontre para juntos construirmos software de grande valor para o
          mercado e mais diversos clientes!
        </p>

        <div className='flex flex-col items-center gap-5 2xl:gap-6'>
          <div className='flex justify-between w-full 2xl:gap-11'>
            <SocialButton
              className='social-button bg-matte-black'
              href='https://github.com/HenriqueSenaDev'
              contact='HenriqueSenaDev'
              icon={<Github className='h-4 w-auto lg:h-5 2xl:h-6' />}
            />

            <SocialButton
              href='https://www.linkedin.com/in/henriquesena-dev-002a4829b/'
              className='social-button bg-[#0E76A8]'
              contact='HenriqueSena Dev'
              icon={<Linkedin className='h-4 w-auto lg:h-5 2xl:h-6' />}
            />
          </div>

          <SocialButton
            href='mailto:acopsenadeveloper@gmail.com'
            className='social-button bg-[#B51616]'
            contact='acopsenadeveloper@gmail.
          com'
            icon={<Mail className='h-4 w-auto lg:h-5 2xl:h-6' />}
          />
        </div>
      </div>
    </section>
  );
}
