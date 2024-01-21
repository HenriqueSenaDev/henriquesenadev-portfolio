import { IStack, IStackGroup } from '@/types/stack';

const javaLanguageGroup: IStackGroup = {
  techName: 'java',
  label: 'Java Language',
  items: [
    'Programação Orientada a Objetos',
    'Collections e Estruturas de Dados',
    'Programação Funcional e Lambda',
    'Manipulação de Data e Hora',
    'Exception Handling',
    'Generics',
    'Java IO',
    'Swing UI',
    'Apache Ant',
    'Apache Maven',
  ],
};

const springFrameworkGroup: IStackGroup = {
  techName: 'spring',
  label: 'Spring',
  items: [
    'Apache Tomcat',
    'Spring Web e RESTful Apis',
    'Controller Exception Handler',
    'Beans e IoC config',
    'Data JPA e HibernateORM',
    'SecurityFilterChain',
    'JWT Authentication',
    'Api Docs',
  ],
};

const javaScriptGroup: IStackGroup = {
  techName: 'javascript',
  label: 'JavaScript Language',
  items: [
    'DOM',
    'JSModules',
    'Programação Orientada a Objetos',
    'Programação Funcional',
    'Promises e Assincronismo',
    'Package Managers (Npm, Yarn)',
    'Bundlers',
  ],
};

const typeScriptGroup: IStackGroup = {
  techName: 'typescript',
  label: 'TypeScript',
  items: [
    'Types e Interfaces',
    'Built-in types',
    'TSC: transpilation',
    'tsconfig',
    'Generics',
    'Decorators',
  ],
};

const reactGroup: IStackGroup = {
  techName: 'react',
  label: 'React',
  items: [
    'Components and lifecycle',
    'State management',
    'React Hooks (state, effect, context, ref)',
    'Conditional Rendering',
    'TailwindCSS',
    'NodeRefs',
    'SPAs – ViteJS',
  ],
};

const nextjsGroup: IStackGroup = {
  techName: 'nextjs',
  label: 'NextJS',
  items: [
    'App route dir',
    'Client and Server components',
    'Assets optimization (images, fonts)',
  ],
};

const nestjsGroup: IStackGroup = {
  techName: 'nestjs',
  label: 'NestJS',
  items: ['Nest modules', 'RESTful Apis', 'JWT Authentication', 'Guards'],
};

export const js_ts_Stack: IStack = {
  name: 'JS/TS',
  groups: [
    javaScriptGroup,
    typeScriptGroup,
    reactGroup,
    nextjsGroup,
    nestjsGroup,
  ],
};

export const javaStack: IStack = {
  name: 'Java',
  groups: [javaLanguageGroup, springFrameworkGroup],
};
