const { test, expect } = require('@playwright/test');

test('Mock API - simulação de resposta', async ({ page }) => {
  await page.route('https://jsonplaceholder.typicode.com/posts/1', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 1,
        title: 'Mockado',
        body: 'Resposta simulada',
        userId: 99,
      }),
    });
  });

  const response = await page.goto('https://jsonplaceholder.typicode.com/posts/1');
  const body = JSON.parse(await response.text());

  expect(response.status()).toBe(200);
  expect(body.title).toBe('Mockado');
  expect(body.body).toBe('Resposta simulada');
  expect(body.userId).toBe(99);
});