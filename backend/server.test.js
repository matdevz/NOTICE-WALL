const app = require('./server');
const request = require('supertest');

describe('Tests server routes', () => {
    it('Test route Get', async () => {
        const res = await request(app).get('/api/get');
        expect(res.statusCode).toBe(200);
    });

    it('Test route Post', async () => {
        const res = await request(app)
            .post('/api/post')
            .send({ title: 'myTitle', description: 'myDescription' });

        console.log(res);
        expect(res.statusCode).toBe(200);
    });
});
