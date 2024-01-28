import { IProject } from '@/types/projects';

const anmCrud: IProject = {
  title: 'ANM CRUD',
  description:
    'Operações CRUD com persistência a banco de dados para gerenciamento de clientes e funcionários. Projeto acadêmico da EEEP Alfredo Nunes de Melo - Acopiara, CE.',
  githubLink: 'https://github.com/HenriqueSenaDev/anm-crud',
  technologies: ['java', 'postgresql', 'apache ant'],
  images: ['anm-crud/form.png', 'anm-crud/list.png'],
};

const presenterAdmin: IProject = {
  title: 'Presenter Admin',
  description:
    'Gerenciamento de eventos com competições entre equipes e avaliações de jurados, integrado juntamente ao projeto presenter-web. Projeto acadêmico realizado na EEEP Alfredo Nunes de Melo, Acopiara - CE, Brasil.',
  githubLink: 'https://github.com/HenriqueSenaDev/presenter-admin',
  technologies: ['java', 'postgresql', 'apache ant'],
  images: [
    'presenter-admin/cadastro.png',
    'presenter-admin/menu.png',
    'presenter-admin/ranking.png',
    'presenter-admin/sorteador.png',
    'presenter-admin/temporizador.png',
  ],
};

const presenterWeb: IProject = {
  title: 'Presenter Web',
  description:
    'Gerenciamento de eventos com competições entre equipes e avaliações de jurados, integrado juntamente ao projeto presenter-admin. Projeto acadêmico realizado na EEEP Alfredo Nunes de Melo, Acopiara - CE, Brasil.',
  githubLink: 'https://github.com/HenriqueSenaDev/presenter-web',
  technologies: [
    'typescript',
    'react',
    'vitesjs',
    'java',
    'spring',
    'jwt',
    'postgresql',
    'apache maven',
  ],
  images: [
    'presenter-web/landing.png',
    'presenter-web/events-library.png',
    'presenter-web/event.png',
  ],
};

const mindLab: IProject = {
  title: 'MindLab',
  description:
    'Estrutura de plataforma virtual para o ensino de programação a pessoas com o Transtorno do Espectro Autista (TEA). Princípios neurocientíficos e metodologias de ensino eficazes, como personalização do tema do ambiente de estudo, videoaulas e FAQ.',
  githubLink: 'https://github.com/HenriqueSenaDev/mind-lab',
  webLink: 'https://mind-lab-frontend.vercel.app',
  technologies: ['typescript', 'react', 'vitesjs'],
  images: [
    'mind-lab/showcase.png',
    'mind-lab/personalization.png',
    'mind-lab/home.png',
    'mind-lab/lesson.png',
    'mind-lab/theme.png',
    'mind-lab/home-colored.png',
  ],
};

export const projects: IProject[] = [
  presenterWeb,
  presenterAdmin,
  mindLab,
  anmCrud,
];
