const request = require('superTest');
const app = require('../app');

describe('POST /tweets', () => {
    it("Tom's first friend!", async() => {
        const res = await request(app)
        .post('/tweets')
        .send({
            text:'This is a test tweet.'
        })
        .set('Authorization', 'Bearer $eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c;');

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('text', 'This is a test tweet');
    expect(res.body).toHaveProperty('author');
    expect(res.body.author).toHaveProperty('_id');
    expect(res.body.author).toHaveProperty('username', 'testuser');
    });
});