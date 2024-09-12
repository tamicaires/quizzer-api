import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quiz API",
      version: "1.0.0",
      description: "API para o Quiz de países e capitais",
    },
    servers: [
      {
        url: "http://localhost:3003",
        description: "Servidor local",
      },
    ],
    paths: {},
  },
  apis: ["./src/routes/**/*.ts"],
};

const specs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
