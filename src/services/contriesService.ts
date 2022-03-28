import api from "./api";

interface ICountry {
  imgSrc: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface ICountryDetail extends ICountry {
  subRegion: string;
  nativeName: string;
  topLevelDomain: string[];
  curencies: string[];
  languages: string[];
  borders: string[];
}

async function listAllCountries(): Promise<ICountry[]> {
  const result = await api.get("all");

  return result.data.map(
    (country: any): ICountry => ({
      imgSrc: country.flag,
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital,
    })
  );
}

async function getCountryByName(countryName: string): Promise<ICountryDetail> {
  const result = await api.get(`name/${countryName}`);
  const data = result.data[0];

  return {
    imgSrc: data.flag,
    name: data.name,
    population: data.population,
    region: data.region,
    capital: data.capital,
    borders: data.borders,
    curencies: data.currencies.map((currency: any) => currency.name),
    languages: data.languages.map((language: any) => language.name),
    nativeName: data.nativeName,
    subRegion: data.subregion,
    topLevelDomain: data.topLevelDomain,
  };
}

export { listAllCountries, getCountryByName };
export type { ICountry, ICountryDetail };
