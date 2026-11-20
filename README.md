# Toolfab Workforce Demo

**Toolfab Engineering Industries Pvt. Ltd. · Thuvakudi**

A small demo project with two separate apps and one Firebase backend.

```text
toolfab-workforce/
├── web/                 # HR + Department Head portal (React + Vite)
├── mobile/              # Employee Android app (React Native + Expo)
├── functions/           # Firebase Cloud Functions
├── firestore.rules
├── firestore.indexes.json
├── firebase.json
└── .github/workflows/   # GitHub Pages deployment for web
```

## Firebase setup

The Firebase demo configuration is already written directly in the source code. No `.env` files or PowerShell environment variables are needed. If you ever change Firebase projects, update both files:

- `web/src/firebaseConfig.ts`
- `mobile/src/firebaseConfig.ts`

These are public Firebase client settings. Never add service-account JSON or private keys to either app.

### Create demo user profiles once

In Firebase Console → Authentication, create the three demo accounts. Then in Firestore create a `users` collection with one document per account. Each document ID must be that account's exact Authentication UID. Use these values:

| Account | `role` | `department` | `active` |
|---|---|---|---|
| HR | `hr` | `All` | `true` |
| Department Head | `department_head` | `IT` | `true` |
| Employee | `employee` | `IT` | `true` |

Each profile also needs `uid` (same as document ID), `displayName`, and `email`. Create `departments/IT` with `name: "IT"` and `active: true`.

Demo account UIDs already created:
- HR: `rxXgo9rqiZOlGJDoHKFiiVUjP3l2`
- Department Head: `Q5KG2f7e2udnDr4tdEsUSFTSDK93`
- Employee: `rmNp7vrMFgeMDSPbDWvr8SJTMZ12`

## Run the web portal

Open PowerShell in the project root, then run:

```powershell
cd web
npm install
npm run dev
```

Build it with `npm run build` from the `web` folder. HR and Department Heads sign in here.

## Run the employee mobile app

Open a **second** PowerShell window in the project root:

```powershell
cd mobile
npm install
npm start
```

Use Expo Go or an Android emulator. To create an installable Android APK, sign in to Expo and run from `mobile`:

```powershell
npx eas-cli login
npx eas-cli build --platform android --profile preview
```

## Deploy Firebase backend (one time)

Cloud Functions require the Firebase Blaze plan. From the project root:

```powershell
npm install -g firebase-tools
firebase login
firebase use toolfab-8ded9
firebase deploy --only firestore:rules,firestore:indexes
cd functions
npm install
npm run build
cd ..
firebase deploy --only functions
```

Set a Google Cloud budget and email alerts. Budget alerts notify you; they are not a hard spending limit.

## Publish the web portal with GitHub Pages

Push this folder to a GitHub repository on `main`, then open repository Settings → Pages and select **GitHub Actions**. Add `YOUR_USERNAME.github.io` to Firebase Authentication → Authorized domains. The included workflow builds the `web` folder and publishes it.

## Demo scope

- Employees submit leave and overtime requests in the mobile app and track their statuses.
- HR sees company-wide requests, employee summaries and CSV export.
- Department Heads see and review requests for their own department.
- No check-in/check-out or physical attendance tracking is included. “No approved leave” does not prove physical presence.
- Leave days are counted as inclusive calendar days. Approved OT hours are approved requested hours, not independently verified work hours.

**Demo note:** Source files and configuration have been prepared, but you must install dependencies, deploy Firebase rules/functions and test the three accounts in your own Firebase project before presenting.
