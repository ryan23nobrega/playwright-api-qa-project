const { test, expect } = require('@playwright/test');

test.describe('API - Usuários', () => {
  test('GET - deve listar usuários', async ({ request }) => {
    const response = await request.get('/users');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('email');
  });

  test('GET - deve buscar usuário por ID', async ({ request }) => {
    const response = await request.get('/users/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.email).toContain('@');
    expect(body).toHaveProperty('address');
    expect(body).toHaveProperty('company');
  });

  test('GET - deve retornar objeto vazio para usuário inexistente', async ({ request }) => {
    const response = await request.get('/users/9999');

    expect(response.status()).toBe(404);

    const body = await response.json();

    expect(body).toEqual({});
  });
});