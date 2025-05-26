# 🧪 Cypress E2E Tests – Login, Registration, Profile & Article (CI/CD)

This project contains professional end-to-end tests written with **Cypress**, covering essential user flows for the [Conduit](https://conduit.mate.academy/) demo application.

## ✅ Test Coverage

- 🔐 **Login** – Valid and invalid login scenarios  
- 📝 **Registration** – New user registration using dynamically generated data via [faker.js](https://fakerjs.dev/)  
- 👤 **Profile** – Editing user profile information and verifying updates  
- ✍️ **Article** – Creating, editing, commenting, and deleting articles

## 🧱 Key Features

- **Randomized test data** – Ensures test isolation and reliability using Faker  
- **Reusable custom commands** – For login and other common actions  
- **CI/CD integration** – Automated test execution on push/pull via GitHub Actions  
- **Cypress best practices** – Clean selectors, clear assertions, modular structure

## 🚀 Tech Stack

- [Cypress](https://www.cypress.io/)  
- [Faker.js](https://fakerjs.dev/)  
- CI/CD: GitHub Actions

## 📂 Structure

- `cypress/e2e/` – Test specifications  
- `cypress/support/` – Custom commands and utilities  
- `cypress/fixtures/` – Test data

## 🏁 Getting Started

1. **Install dependencies:**  
   ```bash
   npm install
   ```

2. **Run tests locally:**  
   ```bash
   npx cypress open
   # or headless
   npx cypress run
   ```

3. **CI/CD:**  
   Tests run automatically on push via GitHub Actions.

---

**Author:** Dawid Kogut  
**License:** MIT