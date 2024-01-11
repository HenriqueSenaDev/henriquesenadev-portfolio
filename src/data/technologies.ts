import javaIcon from '@/assets/images/icons/java.svg';
import springIcon from '@/assets/images/icons/spring.svg';
import typescriptIcon from '@/assets/images/icons/typescript.svg';
import reactIcon from '@/assets/images/icons/react.svg';
import nestjsIcon from '@/assets/images/icons/nestjs.svg';
import nextjsIcon from '@/assets/images/icons/nextjs.svg';

export interface ITechnology {
  name: string;
  description: string;
  iconSrc: string;
}

export const technologies: ITechnology[] = [
  {
    name: 'Java',
    description: 'Java',
    iconSrc: javaIcon,
  },
  {
    name: 'Spring',
    description: 'Spring',
    iconSrc: springIcon,
  },
  {
    name: 'Typescript',
    description: 'Typescript',
    iconSrc: typescriptIcon,
  },
  {
    name: 'React',
    description: 'React',
    iconSrc: reactIcon,
  },
  {
    name: 'NestJS',
    description: 'NestJS',
    iconSrc: nestjsIcon,
  },
  {
    name: 'NextJS',
    description: 'NextJS',
    iconSrc: nextjsIcon,
  },
];
