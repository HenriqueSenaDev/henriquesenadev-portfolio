import { ITechnology } from '@/types/technology';
import javaIcon from '@/assets/images/icons/java.svg';
import springIcon from '@/assets/images/icons/spring.svg';
import javascriptIcon from '@/assets/images/icons/javascript.svg';
import typescriptIcon from '@/assets/images/icons/typescript.svg';
import reactIcon from '@/assets/images/icons/react.svg';
import nestjsIcon from '@/assets/images/icons/nestjs.svg';
import nextjsIcon from '@/assets/images/icons/nextjs.svg';
import postgresqlIcon from '@/assets/images/icons/postgresql.svg';
import apacheAntIcon from '@/assets/images/icons/apache-ant.svg';
import apacheMavenIcon from '@/assets/images/icons/apache-maven.svg';
import tailwindCssIcon from '@/assets/images/icons/tailwind-css.svg';
import axiosIcon from '@/assets/images/icons/axios.svg';
import jwtIcon from '@/assets/images/icons/jwt.svg';
import reactHookFormIcon from '@/assets/images/icons/react-hook-form.svg';
import reactQueryIcon from '@/assets/images/icons/react-query.svg';
import vitesjsIcon from '@/assets/images/icons/vitejs.svg';

export const technologies: ITechnology[] = [
  {
    name: 'java',
    iconSrc: javaIcon,
    includeSpin: true,
  },
  {
    name: 'spring',
    iconSrc: springIcon,
    includeSpin: true,
  },
  {
    name: 'javascript',
    iconSrc: javascriptIcon,
  },
  {
    name: 'typescript',
    iconSrc: typescriptIcon,
    includeSpin: true,
  },
  {
    name: 'react',
    iconSrc: reactIcon,
    includeSpin: true,
  },
  {
    name: 'nestjs',
    iconSrc: nestjsIcon,
    includeSpin: true,
  },
  {
    name: 'nextjs',
    iconSrc: nextjsIcon,
    includeSpin: true,
    dark: true,
  },
  {
    name: 'postgresql',
    iconSrc: postgresqlIcon,
  },
  {
    name: 'apache ant',
    iconSrc: apacheAntIcon,
  },
  {
    name: 'apache maven',
    iconSrc: apacheMavenIcon,
  },
  {
    name: 'tailwind css',
    iconSrc: tailwindCssIcon,
  },
  {
    name: 'vitesjs',
    iconSrc: vitesjsIcon,
  },
  {
    name: 'axios',
    iconSrc: axiosIcon,
  },
  {
    name: 'jwt',
    iconSrc: jwtIcon,
  },
  {
    name: 'react hook form',
    iconSrc: reactHookFormIcon,
  },
  {
    name: 'react query',
    iconSrc: reactQueryIcon,
  },
];
