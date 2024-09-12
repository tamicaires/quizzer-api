import countries from "../countries.json";

interface CountryData {
  country_name: string;
  capital?: string;
  country_code: string;
  continent: string;
}

interface Country {
  name: string;
  capital: string;
  flag: string;
}

class QuizService {
  private static countries: CountryData[] = countries;

  static async getAllCountries(continent?: string): Promise<Country[]> {
    try {
      const filteredCountries = continent
        ? this.countries.filter((country) => country.continent === continent)
        : this.countries;

      return filteredCountries.map((country) => ({
        name: country.country_name,
        capital: country.capital || "N/A",
        continent: country.continent,
        flag: `https://flagcdn.com/w640/${country.country_code.toLowerCase()}.png`,
      }));
    } catch (error) {
      throw new Error("Não foi possível obter a lista de países.");
    }
  }

  static async getCountryByCode(code: string): Promise<Country> {
    try {
      const country = this.countries.find((c) => c.country_code === code);
      if (!country) {
        throw new Error("País não encontrado.");
      }
      return {
        name: country.country_name,
        capital: country.capital || "N/A",
        flag: `https://flagcdn.com/w640/${code.toLowerCase()}.png`,
      };
    } catch (error) {
      throw new Error("Não foi possível encontrar o país.");
    }
  }
}

export default QuizService;
