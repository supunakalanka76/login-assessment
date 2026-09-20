# Internship Login Assessment

<div align="center">
  
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Material UI](https://img.shields.io/badge/Material_UI-MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Authentication_%26_Hosting-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)

A responsive login interface built as part of an internship technical assessment. The application is developed with **React, Vite, TypeScript, and Material UI**, with **Firebase Authentication** used for Google sign-in and **Firebase Hosting** used for deployment.

</div>

---

## Live Demo

**Live Application:**
https://internship-login-assessment.web.app

--- 

## Overview

This project implements a modern and responsive login page based on the provided assessment design.

The application includes frontend email/password validation and Google authentication through Firebase. After successful Google authentication, the user is redirected to a separate page where their authentication token is displayed.

Email/password fields are included to reproduce the provided login interface and demonstrate client-side validation. As required by the assessment, email/password authentication itself is not implemented.

---

## Features

* Responsive login page
* Desktop and mobile layouts
* Material UI components and styling
* Email validation
* Password validation
* Password Show/Hide functionality
* Google Sign-In with Firebase Authentication
* Google account selection
* Authentication state handling
* Redirect after successful authentication
* Authentication token display
* Copy token functionality
* Sign-out functionality
* Protected token page
* Authentication persistence after page refresh
* Redirect authenticated users away from the login page
* Firebase Hosting deployment
* React Router SPA routing support

---

## Tech Stack

| Technology              | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| React                   | User interface                           |
| TypeScript              | Type-safe application development        |
| Vite                    | Development and production build tooling |
| Material UI             | UI components and responsive styling     |
| React Router            | Client-side routing                      |
| Firebase Authentication | Google authentication                    |
| Firebase Hosting        | Application hosting                      |
| React Hot Toast         | User feedback notifications              |

---

## Project Structure

```text
src/
├── assets/
│   └── hero.svg
│
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── PasswordField.tsx
│   │   └── SocialLogin.tsx
│   │
│   └── layout/
│       └── IllustrationPanel.tsx
│
├── config/
│   └── firebase.ts
│
├── pages/
│   ├── LoginPage.tsx
│   └── TokenPage.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── theme/
│   └── theme.ts
│
├── utils/
│   └── validation.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## Authentication Flow

The primary authentication flow is:

```text
Login Page
    ↓
Continue with Google
    ↓
Firebase Authentication
    ↓
Successful Authentication
    ↓
/token
    ↓
Display Authentication Token
```

Firebase Authentication also maintains the authenticated session when the page is refreshed.

If an authenticated user manually visits the login route, the application redirects them to `/token`.

If an unauthenticated user attempts to access `/token`, the application redirects them back to the login page.

---

## Email and Password Validation

The email and password form provides client-side validation.

### Email

The email field checks:

* The field is not empty
* The value follows a valid email format

### Password

The password field checks:

* The field is not empty
* The password contains at least 6 characters

The password can also be displayed or hidden using the **Show/Hide** control.

> Email/password authentication is intentionally not implemented. The assessment only requires validation for these inputs, while actual authentication is handled through Google and Firebase.

---

## Google Authentication

Google authentication is implemented using Firebase Authentication and `signInWithPopup`.

The Google provider is configured to display the account selector:

```ts
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
```

After authentication succeeds, the application redirects the user to:

```text
/token
```

---

## Token Page

After successful Google authentication, the token page displays:

* Authentication success status
* Signed-in user's email address
* Firebase authentication token
* Copy Token button
* Sign Out button

The token is retrieved from the authenticated Firebase user.

The **Copy Token** button copies the complete token to the clipboard.

The **Sign Out** button ends the Firebase session and redirects the user to the login page.

---

## Responsive Design

The interface is designed to adapt across desktop, tablet, and mobile screen sizes.

On larger screens, the application uses a two-column layout containing:

* Login form
* Illustration panel

On smaller screens, the illustration panel is hidden and the login form becomes the primary full-width content.

The interface was tested across common responsive viewport sizes.

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

A Firebase project is also required if you want to run Google Authentication using your own Firebase configuration.

### Clone the Repository

```bash
git clone <repository-url>
cd internship-login-assessment
```

Replace `<repository-url>` with the URL of this GitHub repository.

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

Use the Firebase configuration values from your own Firebase project.

The actual `.env` file is intentionally excluded from Git.

### Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Lint

```bash
npm run lint
```

Runs ESLint to check the project for code-quality issues.

### Production Build

```bash
npm run build
```

Creates the optimized production build inside the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

Runs the generated production build locally for testing.

---

## Firebase Setup

To use Google authentication with your own Firebase project:

1. Create or select a project in Firebase.
2. Add a Web App to the Firebase project.
3. Copy the Firebase configuration values into the local `.env` file.
4. Open **Firebase Authentication**.
5. Enable the **Google** sign-in provider.
6. Make sure the required development and production domains are authorized.

---

## Firebase Hosting

The application is deployed using Firebase Hosting.

The production build directory is:

```text
dist
```

The Hosting configuration includes an SPA rewrite so React Router routes such as `/token` continue to work when directly opened or refreshed.

Example configuration:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Build and Deploy

Create the latest production build:

```bash
npm run build
```

Then deploy Firebase Hosting:

```bash
firebase deploy --only hosting
```

---

## Security

Firebase configuration is loaded using Vite environment variables rather than being directly hardcoded into the source files.

Local environment files are excluded from version control.

Authentication tokens displayed by the application are temporary credentials and should not be shared publicly.

---

## Assessment Scope

This implementation intentionally focuses on the requirements of the technical assessment.

The following functionality is outside the scope of the project:

* Email/password backend authentication
* User registration backend
* Custom application backend
* Database integration
* Additional social authentication providers

The Apple and Facebook controls are included as visual elements to match the provided interface, while Google is the implemented authentication provider.

---

## 👨‍💻 Project Owner

**Supun Akalanka**

Graduate in Software Engineering

📧 Email: supunakalanka76@gmail.com

🔗 GitHub: https://github.com/supunakalanka76

🔗 LinkedIn: https://linkedin.com/in/supunakalanka76

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Supun Akalanka

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
```

---

<div align="center">

**⭐ If you found this project helpful, consider giving it a star! ⭐**

Made with ❤️ by **Supun Akalanka**

</div>
