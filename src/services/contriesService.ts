import api from "./api";

interface ICountry {
  id: number;
  imgSrc: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
}

async function listAllCountries(): Promise<ICountry[]> {
  const result = await api.get("all");

  return result.data.map((country: any) => ({
    id: country.area,
    imgSrc: country.flag,
    countryName: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
  }));
}

export { listAllCountries };

export type { ICountry };
