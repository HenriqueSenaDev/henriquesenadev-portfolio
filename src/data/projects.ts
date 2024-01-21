import { IProject } from '@/types/projects';

import anmCrudList from '@/assets/images/projects/anm-crud/list.png';
import anmCrudForm from '@/assets/images/projects/anm-crud/form.png';
const anmCrud: IProject = {
  title: 'ANM CRUD',
  description:
    'Operações CRUD com persistência a banco de dados para gerenciamento de clientes e funcionários. Projeto acadêmico da EEEP Alfredo Nunes de Melo - Acopiara, CE.',
  githubLink: 'https://github.com/HenriqueSenaDev/anm-crud',
  technologies: ['java'],
  images: [anmCrudForm, anmCrudList],
};

export const projects: IProject[] = [anmCrud];
