# Toolfab Employee Mobile App

React Native + Expo app for employees. Firebase settings are in `src/firebaseConfig.ts`; no `.env` file is required.

Run from this folder:

```powershell
npm install
npm start
```

Create an Android APK (Expo account required):

```powershell
npx eas-cli login
npx eas-cli build --platform android --profile preview
```

Use an employee account only. See the root README for one-time Firebase profile setup.
