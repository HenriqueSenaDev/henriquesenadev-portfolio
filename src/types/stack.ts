import { TechName } from './technology';

export interface IStackGroup {
  techName: TechName;
  label: string;
  items: string[];
}

export interface IStack {
  name: string;
  groups: IStackGroup[];
}
