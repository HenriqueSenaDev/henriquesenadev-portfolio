import { ITechnology } from '@/types/technology';
import javaIcon from '@/assets/images/icons/java.svg';
import springIcon from '@/assets/images/icons/spring.svg';
import javascriptIcon from '@/assets/images/icons/javascript.svg';
import typescriptIcon from '@/assets/images/icons/typescript.svg';
import reactIcon from '@/assets/images/icons/react.svg';
import nestjsIcon from '@/assets/images/icons/nestjs.svg';
import nextjsIcon from '@/assets/images/icons/nextjs.svg';

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
];
