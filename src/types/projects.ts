import { TechName } from './technology';

export interface IProject {
  title: string;
  description: string;
  githubLink: string;
  webLink?: string;
  technologies: TechName[];
  images: string[];
}
