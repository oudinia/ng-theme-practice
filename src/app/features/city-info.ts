export interface CityInfo {
  population: number;
  climat: string;
}


export const cities: Array<City> = [
  {
    "city": "rabat",
    "population": 600000,
    "climat": "rainy"
  },
  {
    "city": "casablanca",
    "population": 3000000,
    "climat": "sunny"
  },
  {
    "city": "tanger",
    "population": 1000000,
    "climat": "sunny"
  }
];

export interface City {
  city: string;
  population: number;
  climat: string;
}
