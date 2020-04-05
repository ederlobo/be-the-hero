const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); // "destroi" a base antes de executar os testes
        await connection.migrate.latest(); // "recria" a basae antes de executar os testes
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', '') para setar header
            .send({
                nome: "Teste de Integracao",
                email: "contato@asdsad.cc",
                whatsapp: "1234567890",
                cidade: "Rio do Sul",
                uf: "SC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});