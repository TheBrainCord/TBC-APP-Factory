# TBC-APP-Factory — Setup Guide

## 1. Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 20+ | https://nodejs.org |
| Yarn | 1.x | `npm i -g yarn` |
| EAS CLI | latest | `npm i -g eas-cli` |
| Git | any | https://git-scm.com |

---

## 2. GitHub Secrets (Required for CI/CD)

Go to **GitHub → your repo → Settings → Secrets and variables → Actions** and add:

| Secret | Where to get it | Required for |
|--------|----------------|--------------|
| `EXPO_TOKEN` | expo.dev → Account → Access Tokens | EAS builds in CI |
| `SUPABASE_URL` | supabase.com → Project → Settings → API | DB/Auth at build time |
| `SUPABASE_ANON_KEY` | supabase.com → Project → Settings → API | DB/Auth at build time |

### How to get `EXPO_TOKEN`
1. Go to https://expo.dev
2. Click your avatar → **Access Tokens**
3. Create a new token → copy it → paste into GitHub secret `EXPO_TOKEN`

---

## 3. EAS Project Setup (one-time per app)

```bash
# Log in to EAS
eas login

# Link an app to EAS (run inside the app folder)
cd apps/TBC-KDelivery
eas init          # creates/links an EAS project, writes projectId into app.json
```

After `eas init`, commit the updated `app.json` (it will contain `"extra": { "eas": { "projectId": "..." } }`).

---

## 4. Local Development

```bash
# Install all workspace dependencies from repo root
yarn install

# Start a specific app
yarn start:kdelivery
yarn start:explorer

# Run directly on Android device/emulator
cd apps/TBC-KDelivery && yarn android
```

---

## 5. Adding a New TBC App

```bash
# 1. Copy the template
cp -r templates/TBC-AppTemplate apps/TBC-AppName

# 2. Edit these fields in the new app:
#    apps/TBC-AppName/package.json   → "name": "@tbc/TBC-AppName"
#    apps/TBC-AppName/app.json       → name, slug, scheme, android.package

# 3. Add a start script to root package.json
#    "start:appname": "yarn workspace @tbc/TBC-AppName start"

# 4. Run eas init inside the new app folder
cd apps/TBC-AppName && eas init

# 5. Add .env from .env.example
cp ../../.env.example .env && nano .env
```

---

## 6. Environment Variables (Local)

Each app reads `EXPO_PUBLIC_*` variables at runtime.

```bash
# Create .env inside the app folder (never commit this)
cp .env.example apps/TBC-KDelivery/.env
# Fill in real values
```

---

## 7. Suggested Future Integrations (Business Perspective)

These are not yet installed — add them as your apps grow:

| Capability | Package | Notes |
|------------|---------|-------|
| Push notifications | `expo-notifications` + FCM | Requires Google Services JSON |
| Crash reporting | `@sentry/react-native` | Free tier available |
| Analytics / funnels | `posthog-react-native` | Self-hostable, GDPR-friendly |
| In-app purchases | `react-native-purchases` (RevenueCat) | Handles Play Store billing |
| OTA updates | `expo-updates` | Ship fixes without full APK |
| Offline-first DB | `@op-engineering/op-sqlite` | SQLite with Drizzle ORM |
| Deep links / QR | `expo-linking` | Built into Expo Router |
| Biometric auth | `expo-local-authentication` | Fingerprint / face unlock |
| Location | `expo-location` | Delivery, fitness, maps |
| Camera / QR scan | `expo-camera` | Scanning, document capture |
| Image upload | `expo-image-picker` + Supabase Storage | Profile photos, receipts |
