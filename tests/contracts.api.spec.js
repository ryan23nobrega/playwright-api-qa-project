const { test, expect } = require('@playwright/test');

test.describe('API - Contract Testing', () => {
  test('GET - deve validar contrato do usuário', async ({ request }) => {
    const response = await request.get('/users/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('username');
    expect(body).toHaveProperty('email');
    expect(body).toHaveProperty('address');
    expect(body).toHaveProperty('phone');
    expect(body).toHaveProperty('website');
    expect(body).toHaveProperty('company');

    expect(typeof body.id).toBe('number');
    expect(typeof body.name).toBe('string');
    expect(typeof body.username).toBe('string');
    expect(typeof body.email).toBe('string');
    expect(typeof body.address).toBe('object');
    expect(typeof body.company).toBe('object');
  });

  test('GET - deve validar contrato da lista de posts', async ({ request }) => {
    const response = await request.get('/posts');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    const firstPost = body[0];

    expect(firstPost).toHaveProperty('userId');
    expect(firstPost).toHaveProperty('id');
    expect(firstPost).toHaveProperty('title');
    expect(firstPost).toHaveProperty('body');

    expect(typeof firstPost.userId).toBe('number');
    expect(typeof firstPost.id).toBe('number');
    expect(typeof firstPost.title).toBe('string');
    expect(typeof firstPost.body).toBe('string');
  });
});