import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);








// GET: Bucar ou listar uma informação
// POST: Criar uma nova informação
// PUT: Atualizar uma informação
// DELETE: Deletar uma informação

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual ecurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação...
