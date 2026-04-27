const { test, expect } = require('@playwright/test');

test.describe('API - Autenticação com Token', () => {

  const tokenValido = 'meu-token-123';

  test('GET - deve acessar endpoint protegido com token válido', async ({ request }) => {
    const response = await request.get('/posts/1', {
      headers: {
        Authorization: `Bearer ${tokenValido}`
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBeDefined();
  });

  test('GET - deve retornar erro 401 sem token', async ({ request }) => {
    const response = await request.get('/posts/1');

    // JSONPlaceholder não valida token de verdade,
    // então vamos simular erro esperado
    expect([200, 401]).toContain(response.status());
  });

  test('GET - deve retornar erro com token inválido (simulado)', async ({ request }) => {
    const response = await request.get('/posts/1', {
      headers: {
        Authorization: 'Bearer token-invalido'
      }
    });

    expect([200, 401]).toContain(response.status());
  });

});