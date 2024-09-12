// src/services/quiz.service.ts

import axios from "axios";

class QuizService {
  private static BASE_URL = "https://servicodados.ibge.gov.br/api/v1/paises/AF";

  static async getAllCountries() {
    try {
      const response = await axios.get(QuizService.BASE_URL);
      const countries = response.data.map((country: any) => ({
        name: country.nome.abreviado,
        capital: country.governo.capital.nome || "N/A",
        flag: `https://www.countryflags.io/${country.id["ISO-3166-1-ALPHA-2"]}/flat/64.png`,
      }));

      return countries;
    } catch (error) {
      throw new Error("Não foi possível obter a lista de países.");
    }
  }

  static async getCountryByCode(code: string) {
    try {
      const response = await axios.get(`${QuizService.BASE_URL}/${code}`);
      const country = response.data;
      return {
        name: country.nome.abreviado,
        capital: country.governo.capital.nome || "N/A",
        flag: `https://www.countryflags.io/${country.id["ISO-3166-1-ALPHA-2"]}/flat/64.png`,
      };
    } catch (error) {
      throw new Error("Não foi possível encontrar o país.");
    }
  }
}

export default QuizService;
