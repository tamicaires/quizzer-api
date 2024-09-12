// src/config/swagger.ts

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quiz API',
      version: '1.0.0',
      description: 'API para o Quiz de países e capitais',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
    paths: {}, // Adicionando o campo paths como vazio para evitar erros de tipo
  },
  apis: ['./src/routes/**/*.ts'], // Ajuste o caminho para onde seus arquivos de rota estão localizados
};

const specs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
