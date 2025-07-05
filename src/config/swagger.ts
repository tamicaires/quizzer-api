import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express"; // Import Express type

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
      // Consider adding your Render deployment URL here for production
      // {
      //   url: "https://your-render-app-name.onrender.com",
      //   description: "Servidor de produção (Render)",
      // },
    ],
    paths: {}, // Your API paths will be populated by swagger-jsdoc from your route files
  },
  // Ensure this path correctly points to your route files relative to where you run the build command
  // For example, if your build command is run from the project root, and routes are in src/routes,
  // then './src/routes/**/*.ts' is correct.
  apis: ["./src/routes/**/*.ts"],
};

const specs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  // Explicitly cast to 'any' to resolve TypeScript type mismatch issues.
  // This is a common workaround for this specific error with swagger-ui-express.
  app.use("/api-docs", swaggerUi.serve as any, swaggerUi.setup(specs) as any);
};
