export interface ITechnology {
  name: TechName;
  iconSrc: string;
  dark?: boolean;
  includeSpin?: boolean;
}

export type TechName =
  | 'java'
  | 'spring'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nestjs'
  | 'nextjs'
  | 'postgresql'
  | 'apache ant'
  | 'apache maven'
  | 'tailwind css'
  | 'jwt'
  | 'axios'
  | 'react hook form'
  | 'react query'
  | 'vitesjs';

export type TechColorMap = {
  [Property in TechName]: string;
};
