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
  | 'nextjs';

export type TechColorMap = {
  [Property in TechName]: string;
};
