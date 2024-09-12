import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Importe o middleware cors
import { setupSwagger } from './config/swagger';
import quizRoutes from './routes/quiz.routes';

const app = express();
const port = process.env.PORT || 3003;


app.use(cors({
  origin: '*',
}));

app.use(bodyParser.json());
app.use('/api/quiz', quizRoutes);

// Configurar Swagger
setupSwagger(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Documentação Swagger disponível em http://localhost:${port}/api-docs`);
});
