# 🚀 JavaScript Mastery

![CI](https://github.com/YOUR-USERNAME/javascript-mastery/actions/workflows/ci.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)
![Tested with Jest](https://img.shields.io/badge/tested_with-Jest-C21325?logo=jest&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

My JavaScript journey from **basics** to **advanced** concepts, organized step by step.
Every lesson includes notes, runnable examples, exercises with solutions and **automated tests**.
It ends with **FinTrack**, a full-stack capstone project that combines JavaScript with
**Node.js, SQL, Python and Java**.

---

## 📑 Table of Contents

- [About](#-about)
- [Repository Structure](#-repository-structure)
- [How Each Lesson Works](#-how-each-lesson-works)
- [Getting Started](#-getting-started)
- [Roadmap and Progress](#-roadmap-and-progress)
- [Capstone Project: FinTrack](#-capstone-project-fintrack)
- [Tech Stack](#-tech-stack)
- [Timeline](#-timeline)
- [Contact](#-contact)

---

## 📖 About

This repository documents how I learn and practise JavaScript. It is organized into three
levels plus a capstone project:

1. **Basics**: the building blocks of the language
2. **Intermediate**: modern JavaScript, the DOM and small browser apps
3. **Advanced**: async code, design patterns, data structures, algorithms and Node.js
4. **Capstone**: a real multi-language application

Every solution is checked by tests that run automatically on GitHub Actions with each push.

---

## 📂 Repository Structure

```
javascript-mastery/
├── README.md
├── package.json                 # ESLint, Prettier, Jest
├── .github/workflows/ci.yml     # runs lint + tests on every push
│
├── 01-basics/
│   ├── 01-variables-types/
│   ├── 02-operators-conditions/
│   ├── 03-loops/
│   ├── 04-functions/
│   ├── 05-arrays/
│   ├── 06-objects/
│   ├── 07-strings/
│   └── exercises/               # FizzBuzz, palindrome, calculator
│
├── 02-intermediate/
│   ├── 01-scope-hoisting-closures/
│   ├── 02-this-call-apply-bind/
│   ├── 03-es6-plus/             # destructuring, spread, modules
│   ├── 04-higher-order-functions/   # map / filter / reduce
│   ├── 05-dom-manipulation/
│   ├── 06-events/
│   ├── 07-error-handling/
│   ├── 08-json-localstorage/
│   └── mini-projects/           # to-do app, quiz app, weather app
│
├── 03-advanced/
│   ├── 01-prototypes-classes-inheritance/
│   ├── 02-async-callbacks-promises-async-await/
│   ├── 03-event-loop/
│   ├── 04-generators-iterators/
│   ├── 05-design-patterns/      # module, singleton, observer, factory
│   ├── 06-functional-programming/   # currying, composition, immutability
│   ├── 07-data-structures/      # stack, queue, linked list, tree, graph
│   ├── 08-algorithms/           # sorting, searching, recursion, DP
│   ├── 09-performance/          # debounce, throttle, memoization
│   ├── 10-testing-with-jest/
│   └── 11-nodejs/               # fs, streams, Express REST API
│
└── 04-capstone-fintrack/        # multi-language project
```

---

## 🧩 How Each Lesson Works

Every topic folder follows the same layout:

| File | Purpose |
|---|---|
| `README.md` | Explanation of the concept, key points and common mistakes |
| `examples.js` | Small examples you can run with `node examples.js` |
| `exercises.js` | Practice problems with my solutions |
| `exercises.test.js` | Jest tests that prove the solutions work |

---

## ⚙️ Getting Started

**Requirements:** [Node.js](https://nodejs.org/) 20 or newer and [Git](https://git-scm.com/).

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/javascript-mastery.git
cd javascript-mastery

# Install the development tools
npm install

# Run all tests
npm test

# Run the tests for one topic only
npm test -- 03-loops

# Run the examples of a lesson
node 01-basics/03-loops/examples.js

# Check and format the code
npm run lint
npm run format
```

---

## 🗺️ Roadmap and Progress

### Level 1: Basics ✅

- [x] [Variables and Types](./01-basics/01-variables-types)
- [x] [Operators and Conditions](./01-basics/02-operators-conditions)
- [x] [Loops](./01-basics/03-loops)
- [x] [Functions](./01-basics/04-functions)
- [x] [Arrays](./01-basics/05-arrays)
- [x] [Objects](./01-basics/06-objects)
- [x] [Strings](./01-basics/07-strings)
- [x] [Exercises](./01-basics/exercises): FizzBuzz, palindrome, calculator

### Level 2: Intermediate

- [ ] [Scope, Hoisting and Closures](./02-intermediate/01-scope-hoisting-closures)
- [ ] [this, call, apply and bind](./02-intermediate/02-this-call-apply-bind)
- [ ] [ES6+ Features](./02-intermediate/03-es6-plus)
- [ ] [Higher-Order Functions](./02-intermediate/04-higher-order-functions)
- [ ] [DOM Manipulation](./02-intermediate/05-dom-manipulation)
- [ ] [Events](./02-intermediate/06-events)
- [ ] [Error Handling](./02-intermediate/07-error-handling)
- [ ] [JSON and localStorage](./02-intermediate/08-json-localstorage)
- [ ] [Mini-Projects](./02-intermediate/mini-projects): to-do app, quiz app, weather app

### Level 3: Advanced

- [ ] [Prototypes, Classes and Inheritance](./03-advanced/01-prototypes-classes-inheritance)
- [ ] [Callbacks, Promises and async/await](./03-advanced/02-async-callbacks-promises-async-await)
- [ ] [The Event Loop](./03-advanced/03-event-loop)
- [ ] [Generators and Iterators](./03-advanced/04-generators-iterators)
- [ ] [Design Patterns](./03-advanced/05-design-patterns)
- [ ] [Functional Programming](./03-advanced/06-functional-programming)
- [ ] [Data Structures](./03-advanced/07-data-structures)
- [ ] [Algorithms](./03-advanced/08-algorithms)
- [ ] [Performance](./03-advanced/09-performance)
- [ ] [Testing with Jest](./03-advanced/10-testing-with-jest)
- [ ] [Node.js](./03-advanced/11-nodejs)

### Level 4: Capstone

- [ ] [FinTrack: Smart Expense Tracker](./04-capstone-fintrack)

---

## 💰 Capstone Project: FinTrack

**FinTrack** is a smart expense tracker built as a small microservices app,
where each language does what it does best.

| Part | Language | What it does |
|---|---|---|
| Frontend | JavaScript | Dashboard to add expenses and view charts |
| Main API | Node.js + Express | Authentication (JWT), CRUD for expenses, calls the other services |
| Database | SQL (PostgreSQL) | Users, expenses, categories and budgets; views and analytics queries |
| Insights service | Python (FastAPI + pandas) | Auto-categorizes expenses and predicts next month's spending |
| Report service | Java (Spring Boot) | Monthly PDF reports and scheduled budget alerts |
| Glue | Docker Compose | Starts everything with one command |

```
   Frontend (JS) ──► API (Node.js + Express) ──► Insights (Python)
                            │
                            ├──► Reports (Java / Spring Boot)
                            ▼
                     PostgreSQL (SQL)
```

**Skills shown:** async JavaScript, REST API design, authentication, SQL joins and
aggregations, communication between services, testing and Docker.

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Language | JavaScript (ES2023) |
| Runtime | Node.js |
| Testing | Jest |
| Code quality | ESLint, Prettier |
| CI/CD | GitHub Actions |
| Capstone | Express, PostgreSQL, Python (FastAPI, pandas), Java (Spring Boot), Docker |

---

## 📅 Timeline

| Weeks | Focus |
|---|---|
| 1–3 | **Basics**: one topic every 2–3 days |
| 4–6 | **Intermediate**: plus 3 mini-projects |
| 7–9 | **Advanced**: data structures, algorithms and the Node.js API |
| 10–12 | **Capstone**: SQL and API, then frontend, Python service, Java service and Docker |

---

## 📬 Contact

- **GitHub:** (https://github.com/YOUR-USERNAME)](https://github.com/Nassim29-del)
- **LinkedIn:** (https://www.linkedin.com/in/YOUR-LINKEDIN/)](https://www.linkedin.com/in/nassim-bidel-15065b417/)

⭐ If you find this repository helpful, feel free to give it a star!

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
