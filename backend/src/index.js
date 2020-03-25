const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //app.use(cors({'http://meuapp.com'})); <-- seguran�a para apenas o proprio frontend acesse
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * M�todos HTTP:
 * 
 * GET: Buscar/listar uma informa��o do back-end
 * POST: Criar uma informa��o no back-end
 * PUT: Alterar uma informamo back-end
 * DELETE: Deletar uma informa��o no back-end
 */

/**
 * Tipos de par�metros:
 * 
 * Query Params: Par�metros nomeados enviados na rota ap�s o simbolo "?" (Filtros, pagina��o)
 * Route Params: Par�metros utilizados para identificar recursos
 * Request Body: Corpo da requisi��o, utilizado para criar ou alterar recursos
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