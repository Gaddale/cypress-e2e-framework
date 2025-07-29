# 🚀 Cypress E2E Automation with GitHub Actions

This project demonstrates how to implement **End-to-End Testing with Cypress**, fully integrated into a **GitHub Actions CI/CD workflow**.

> ✅ **Primary Objective**: Automate E2E tests (Login → Add to Cart → Checkout) and execute them on every push using **GitHub Actions**.

---

## 📌 Test Scenario - SauceDemo E2E Flow

This test automates the complete flow on [SauceDemo](https://www.saucedemo.com):

1. 🔐 Login with valid credentials (from fixture).
2. 🛍️ Add a product to the cart.
3. 💳 Complete the checkout process.

---

## 🏗️ Project Structure (POM + GitHub Actions)
```bash

Cypress-E2E/
├── .github/
│ └── workflows/
│ └── main.yml # GitHub Actions Cypress workflow
│
├── cypress/
│ ├── e2e/
│ │ └── tests/
│ │ └── test.cy.js # Main E2E test case
│ │
│ ├── fixtures/
│ │ └── credentials.json # Test data (user credentials)
│ │
│ ├── Pages/
│ │ ├── LoginPage.js
│ │ ├── ProductsPage.js
│ │ └── CheckoutPage.js # Page Object Model (POM) structure
│ │
│ ├── support/
│ │ ├── commands.js # Custom Cypress commands
│ │ └── e2e.js # Support config
│
├── cypress.config.js # Cypress configuration
├── package.json # Node dependencies
├── package-lock.json
```
---

## ⚙️ GitHub Actions CI Integration

This project is built to trigger tests automatically on **every push to the `main` branch** using [GitHub Actions](https://docs.github.com/en/actions/concepts/overview).

### 🔧 `.github/workflows/main.yml`

```yaml
name: End-to-End Tests

on: [push]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - run: npm ci
      - run: npx cypress run
```

---

## Steps:

1.  **Clone or download** the repository.
2.  Navigate to the project directory:
    ```bash
    cd cypress-e2e-framework
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Run Tests in CLI** (generates reports):
    ```bash
    npx cypress run
    ```
