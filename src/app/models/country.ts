import { Continent } from './continent';

export interface Country {
  id?: number;
  name: string;
  code3: number;
  population: number;
  continent: Continent;
}
