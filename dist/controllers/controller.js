"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_service_1 = __importDefault(require("../services/quiz.service"));
class QuizController {
    static getAllCountries(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { continent } = req.query;
                const countries = yield quiz_service_1.default.getAllCountries(continent);
                res.json(countries);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro inesperado" });
                }
            }
        });
    }
    static getCountryByCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { code } = req.params;
                if (!code) {
                    return res.status(400).json({ error: "Código do país é necessário" });
                }
                const country = yield quiz_service_1.default.getCountryByCode(code);
                res.json(country);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro inesperado" });
                }
            }
        });
    }
}
exports.default = QuizController;
