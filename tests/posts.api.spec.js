const { test, expect } = require('@playwright/test');

test.describe('API - Posts', () => {
  test('POST - deve criar um novo post', async ({ request }) => {
    const response = await request.post('/posts', {
      data: {
        title: 'Projeto API com Playwright',
        body: 'Criando testes automatizados de API',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Projeto API com Playwright');
    expect(body.body).toBe('Criando testes automatizados de API');
    expect(body.userId).toBe(1);
  });

  test('PUT - deve atualizar um post completo', async ({ request }) => {
    const response = await request.put('/posts/1', {
      data: {
        id: 1,
        title: 'Post atualizado com PUT',
        body: 'Atualização completa do recurso',
        userId: 1,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe('Post atualizado com PUT');
    expect(body.body).toBe('Atualização completa do recurso');
    expect(body.userId).toBe(1);
  });

  test('PATCH - deve atualizar parcialmente um post', async ({ request }) => {
    const response = await request.patch('/posts/1', {
      data: {
        title: 'Título atualizado com PATCH',
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe('Título atualizado com PATCH');
  });

  test('DELETE - deve deletar um post', async ({ request }) => {
    const response = await request.delete('/posts/1');

    expect(response.status()).toBe(200);
  });

  const { ApiHelper } = require('../utils/apiHelper');

test('POST - usando ApiHelper', async ({ request }) => {
  const api = new ApiHelper(request);

  const response = await api.post('/posts', {
    title: 'Teste com helper',
    body: 'Automação API com Playwright',
    userId: 1,
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body).toHaveProperty('id');
  expect(body.title).toBe('Teste com helper');
});
});