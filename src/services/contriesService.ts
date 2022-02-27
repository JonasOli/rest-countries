import api from "./api";

interface ICountry {
  imgSrc: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
}

async function listAllCountries(): Promise<ICountry[]> {
  const result = await api.get("all");

  return result.data.map((country: any) => ({
    imgSrc: country.flag,
    countryName: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
  }));
}

export { listAllCountries };
export type { ICountry };
