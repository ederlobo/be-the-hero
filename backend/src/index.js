const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //app.use(cors({'http://meuapp.com'})); <-- segurança para apenas o proprio frontend acesse
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informamo back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

/**
 * Entidades: 
 *      ONG,
 *      Caso
 */

/**
 * Funcionalidades: 
 *      Login de ONG,
 *      Cadastro de ONG, 
 *      Logout de ONG,
 *      Cadastrar novos caso, 
 *      Deletar casos, 
 *      Listar casos especificos de uma ONG, 
 *      Listar todos os casos,
 *      Entrar em contato com a ONG
 */