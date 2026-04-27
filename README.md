# 🚀 Automação de Testes de API com Playwright

Projeto completo de automação de testes API utilizando Playwright, cobrindo cenários reais do dia a dia de um QA, incluindo validações, contratos, autenticação, mocks e dados dinâmicos.

---

## 🎯 Objetivo

Criar uma suíte robusta de testes automatizados para APIs REST, demonstrando boas práticas de organização, reutilização de código e validação de respostas.

---

## 🧪 Cenários Automatizados

### 👤 Usuários

* ✅ Listar usuários (GET)
* ✅ Buscar usuário por ID
* ✅ Validar usuário inexistente (404)

### 📝 Posts

* ✅ Criar post (POST)
* ✅ Atualizar post (PUT)
* ✅ Atualização parcial (PATCH)
* ✅ Deletar post (DELETE)

### 🔐 Autenticação

* ✅ Requisição com token válido
* ✅ Requisição sem token
* ✅ Requisição com token inválido

### 📄 Validação de Contrato

* ✅ Estrutura da resposta validada (schema básico)
* ✅ Tipos de dados conferidos

### 🎲 Dados Dinâmicos

* ✅ Uso de faker para geração de dados aleatórios

### 🎭 Mock de API

* ✅ Interceptação de requisição
* ✅ Simulação de resposta customizada

---

## 🧱 Estrutura do Projeto

```
playwright-api-qa-project
│
├── tests
│   ├── users.api.spec.js
│   ├── posts.api.spec.js
│   ├── contracts.api.spec.js
│   ├── dynamic-data.api.spec.js
│   ├── mock.api.spec.js
│   └── auth.api.spec.js
│
├── utils
│   └── apiHelper.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Tecnologias Utilizadas

* JavaScript
* Node.js
* Playwright
* Faker.js
* GitHub Actions (CI/CD)

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/playwright-api-qa-project.git
```

### 2. Instalar dependências

```
npm install
```

### 3. Executar os testes

```
npx playwright test
```

---

## 📊 Relatório de Testes

Após execução:

```
npx playwright show-report
```

---

## 🔄 Integração Contínua (CI/CD)

O projeto está preparado para rodar no GitHub Actions automaticamente a cada push, garantindo qualidade contínua do código.

---

## 🧠 Boas Práticas Aplicadas

* Separação de responsabilidades
* Reutilização com API Helper
* Testes independentes
* Uso de dados dinâmicos
* Validação de contrato
* Simulação de cenários reais (mock)
* Organização escalável

---

## 📌 Considerações

A API utilizada (JSONPlaceholder) não possui autenticação real, por isso alguns cenários foram simulados para representar comportamentos esperados em ambientes reais.

---

## 👨‍💻 Autor

Ryan Nóbrega
🔗 https://github.com/ryan23nobrega
🔗 https://www.linkedin.com/in/ryantech23




