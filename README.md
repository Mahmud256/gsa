# 📚 Group Study Assignment Automation Testing (Playwright)

## 🚀 Project Overview

This project is an **End-to-End Automation Testing Suite** built using **Playwright** for the *Online Group Study Assignment* web application.

The goal of this project is to automate and validate core functionalities such as:

* User Authentication
* Assignment Management (Create, Update, Delete)
* Authorization (Role-based access control)

---

## 🛠️ Tech Stack

* **Automation Tool:** Playwright
* **Language:** TypeScript
* **Framework:** Playwright Test Runner
* **Architecture:** Page Object Model (POM)
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
GSA/
│
├── playwright-script/                # Automation testing (Playwright)
│   │
│   ├── pages/                       # Page Object Model (POM)
│   │   ├── LoginPage.ts
│   │   ├── AssignmentPage.ts
│   │   └── UpdatePage.ts
│   │
│   ├── tests/                       # Test files
│   │   ├── auth/                    # Authentication tests
│   │   └── assignment/              # Assignment-related tests
│   │
│   ├── utils/                       # Test data & helper functions
│   │   ├── testData.ts
│   │   └── constants.ts
│   │
│   ├── fixtures/                    # Reusable fixtures
│   │   └── authFixture.ts
│   │
│   ├── screenshots/                 # Debug screenshots (failed tests)
│   │
│   └── playwright.config.ts         # Playwright configuration
│
├── GSA_Requirement/                 # Project requirements document
│
├── GSA_SQA_Test_Cases/              # Test cases documentation
│
├── GSA_Test_Plan/                   # Test plan document
│
└── Test_Summary_Report/             # Final test summary report
```

---

## 🔐 Features Automated

### ✅ Authentication

* User Registration (Email & Password)
* User Login
* Logout Functionality

---

### 📚 Assignment Management

#### ✔ Create Assignment

* Fill form with valid data
* Handle date picker
* Verify assignment creation (UI + API)

#### ✏️ Update Assignment

* Creator can update assignment ✅
* Unauthorized user cannot update ❌ *(Bug Identified)*
* Go to testData.ts then give your specific 'id' in 'updateA'

#### 🗑️ Delete Assignment

* Creator can delete assignment
* Target specific assignment using:
  * ID-based locator - Go to testData.ts then give your specific 'id' in 'deleteA'
---

## 🔒 Authorization Testing (Important)

* Verified that only creators should update/delete assignments
* 🚨 Found **security bug**:

  * Other users can update assignments (backend validation missing)

---

## 🧪 Testing Strategy

* **Positive Testing**

  * Valid user actions (Create, Update, Delete)

* **Negative Testing**

  * Unauthorized access validation

* **Dynamic Data**

  * Used `Date.now()` to generate unique test data

---

## 🛡️ Anti-Flaky Techniques Used

* `Promise.all()` for action + wait
* `waitForResponse()` for API validation
* `waitForLoadState('networkidle')`
* Strong assertions (`toBeVisible`)
* Retry mechanism (`retries: 2`)
* Screenshot on failure

---

## 📸 Debugging Features

* Auto Screenshot on failure
* Video recording for failed tests
* Trace viewer enabled

---

## ⚡ How to Run Tests

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run in headed mode
npx playwright test --headed
```

---

## 🌐 Live Application

🔗 [https://assignment-11-3a371.web.app](https://assignment-11-3a371.web.app)

---

## 📌 Key Learnings

* Handling flaky tests in real-world scenarios
* Understanding frontend vs backend validation
* Importance of API verification in automation
* Debugging silent failures
* Writing maintainable POM structure

---

## 🚀 Future Improvements

* Submit Assignment Automation (Modal + PDF)
* JWT Authentication Handling
* Full API Testing Integration
* CI/CD Pipeline Integration (GitHub Actions)

---

## 👨‍💻 Author

**Mahmudul Hasan Sarkar**