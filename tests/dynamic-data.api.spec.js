const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { ApiHelper } = require('../utils/apiHelper');

test.describe('API - Dados dinâmicos', () => {
  test('POST - deve criar post com dados dinâmicos', async ({ request }) => {
    const api = new ApiHelper(request);

    const novoPost = {
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      userId: faker.number.int({ min: 1, max: 10 }),
    };

    const response = await api.post('/posts', novoPost);

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toHaveProperty('id');
    expect(body.title).toBe(novoPost.title);
    expect(body.body).toBe(novoPost.body);
    expect(body.userId).toBe(novoPost.userId);
  });
});