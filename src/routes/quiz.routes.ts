import { Router } from "express";
import QuizController from "../controllers/controller";

const router = Router();

/**
 * @openapi
 * /api/quiz/countries:
 *   get:
 *     summary: Obtém todos os países
 *     parameters:
 *       - name: continent
 *         in: query
 *         description: Filtro opcional para o continente dos países
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de países
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   capital:
 *                     type: string
 *                   flag:
 *                     type: string
 *     tags:
 *       - Quiz
 */
router.get("/countries", QuizController.getAllCountries);

/**
 * @openapi
 * /api/quiz/country/{code}:
 *   get:
 *     summary: Obtém um país pelo código
 *     parameters:
 *       - name: code
 *         in: path
 *         description: Código do país
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do país
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 capital:
 *                   type: string
 *                 flag:
 *                   type: string
 *       400:
 *         description: Código do país é necessário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *     tags:
 *       - Quiz
 */
router.get("/country/:code", QuizController.getCountryByCode);

export default router;
