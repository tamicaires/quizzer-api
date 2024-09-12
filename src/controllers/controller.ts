import { Request, Response } from "express";
import QuizService from "../services/quiz.service";

class QuizController {
  static async getAllCountries(req: Request, res: Response) {
    console.log("getAllCountries");
    try {
      const countries = await QuizService.getAllCountries();
      res.json(countries);
      console.log("countries", countries);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Ocorreu um erro inesperado" });
      }
    }
  }

  static async getCountryByCode(req: Request, res: Response) {
    try {
      const { code } = req.query;
      if (typeof code !== "string") {
        return res.status(400).json({ error: "Código do país é necessário" });
      }
      const country = await QuizService.getCountryByCode(code);
      res.json(country);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Ocorreu um erro inesperado" });
      }
    }
  }
}

export default QuizController;
