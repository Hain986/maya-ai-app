# Maya AI App

Maya AI is a futuristic AI companion experience built for both web and Android. This repository includes:

- a responsive web app with a 3D avatar scene
- an Android-ready Expo mobile shell
- an API backend scaffold for live AI chat using OpenAI

## Stack

- Web: React + Vite + TypeScript
- 3D UI: Three.js + React Three Fiber
- Mobile: Expo + React Native
- Backend: Express + OpenAI-compatible API
- Design: futuristic dark UI with a female avatar

## Apps

- `apps/web` — web version of Maya AI
- `apps/mobile` — Android-ready Expo app
- `apps/api` — backend AI chat API

## Setup

1. Copy the environment template:

```bash
cp .env.example .env
```

2. Add your OpenAI API key inside `.env` if you want live AI responses.

3. Install packages:

```bash
npm install
```

4. Start backend:

```bash
npm run dev:api
```

5. Start the web app:

```bash
npm run dev:web
```

6. Start the mobile app:

```bash
npm run dev:mobile
```

## Notes

This project is structured as a production-ready starter for a Maya AI companion app. You can add:

- voice chat
- persistent conversation memory
- sign-in flows
- premium personalization
- Android APK build setup
- real deployment to web/mobile hosting
