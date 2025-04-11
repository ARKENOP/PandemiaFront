import { Country } from './country';
import { Disease } from './disease';

export interface GlobalData {
  id?: number;
  date: Date;
  totalCases: number;
  newCases: number;
  totalDeaths: number;
  newDeaths: number;
  totalRecovered: number;
  newRecovered: number;
  activeCases: number;
  seriousCritical: number;
  totalTests: number;
  testsPerMillion: number;
  country: Country;
  disease: Disease;
}
