"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controllers/controller"));
const router = (0, express_1.Router)();
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
router.get("/countries", controller_1.default.getAllCountries);
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
router.get("/country/:code", controller_1.default.getCountryByCode);
exports.default = router;
