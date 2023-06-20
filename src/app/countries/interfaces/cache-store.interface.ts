import { Country } from "./country";
import { Region } from "./region.type";

export interface CacheStore{
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion:RegionCoutries;
}
export interface TermCountries{
  term:string;
  countries: Country[];
}
export interface RegionCoutries{
  region:Region;
  countries: Country[];
}
