# Chọi Deyyy UI

React + TypeScript + Vite frontend for the Chọi Deyyy website. Deployed on Vercel with a serverless contact API.

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

Other scripts:

```bash
npm run build    # Typecheck + production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Environment configuration

Environment values are split between **client** variables (bundled into the browser) and **server-only** variables (used by the contact API).

Copy `.env.example` as a reference, then configure the files below.

| File | Purpose |
|------|---------|
| `.env.development` | Client URLs for local development |
| `.env.production` | Client URLs for production builds |
| `.env.local` | Local secrets for `vercel dev` (gitignored) |
| `.env.example` | Safe template with variable names only |

### Client variables (`VITE_` prefix)

These are public in the browser bundle. Do not put secrets here.

```env
VITE_GOOGLE_FORM_URL=
VITE_CONTACT_API_URL=
```

| Variable | Used by | Description |
|----------|---------|-------------|
| `VITE_GOOGLE_FORM_URL` | NavBar `ĐĂNG KÍ` button | Google Form URL opened in a new tab |
| `VITE_CONTACT_API_URL` | Contact page form | Backend **base URL** (the client appends `/api/contact`) |

**Development** (`.env.development`):

```env
VITE_GOOGLE_FORM_URL=https://forms.gle/your-dev-form-id
VITE_CONTACT_API_URL=http://localhost:3000
```

**Production** (`.env.production`):

```env
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/your-prod-form-id/viewform
VITE_CONTACT_API_URL=https://api.example.com
```

The contact client sends requests to `POST {VITE_CONTACT_API_URL}/api/contact`. Do not include `/api/contact` in the environment variable.

### Server-only variables (no `VITE_` prefix)

These are **not** exposed to the frontend. Configure them in `.env.local` for local API testing, or in your hosting platform for production.

```env
CONTACT_RECIPIENT_EMAIL=
EMAIL_FROM_ADDRESS=
EMAIL_PROVIDER_API_KEY=
```

| Variable | Description |
|----------|-------------|
| `CONTACT_RECIPIENT_EMAIL` | Destination inbox for contact form submissions |
| `EMAIL_FROM_ADDRESS` | Verified sender address used by the email provider |
| `EMAIL_PROVIDER_API_KEY` | Resend API key for sending email |

Never commit real API keys or passwords. Files like `.env`, `.env.local`, and `.env.*.local` are gitignored.

## NavBar registration button

The `ĐĂNG KÍ` button in the NavBar reads `VITE_GOOGLE_FORM_URL` and opens the Google Form in a new tab with `noopener,noreferrer`.

- Development uses the URL from `.env.development`
- Production uses the URL from `.env.production`
- If the URL is missing, the button is disabled and a warning is logged in development

## Contact form

The Contact page submits through `src/services/contact.ts` to `POST {VITE_CONTACT_API_URL}/api/contact`.

Field mapping:

| Frontend | Backend |
|----------|---------|
| Email | `email` |
| Số điện thoại | `phone` (optional, omitted when empty) |
| Họ và tên/Tên doanh nghiệp | `name` |
| Ghi chú | `message` |

The request also includes `formStartedAt` and a hidden `website` honeypot. Subject is omitted so the backend uses its default.

### Local development

Run the frontend:

```bash
npm run dev
```

Run the backend on port `3000`, then set:

```env
VITE_CONTACT_API_URL=http://localhost:3000
```

The frontend origin is expected to be `http://localhost:5173`. If submissions return `403`, verify the backend allowed-origin configuration.

## Project structure

```
src/
  config/env.ts          # Typed client environment access
  services/contact.ts  # Contact form API client
  types/                 # Shared TypeScript types
  utils/                 # Validation and helpers
  pages/                 # Route-level pages
  components/            # Shared components
api/
  contact.ts             # Vercel serverless contact endpoint
```

## Security notes

- Frontend `VITE_*` variables are visible in the browser bundle.
- Do not put SMTP credentials, email passwords, or private API keys in client env files.
- Store production secrets in Vercel environment settings, not in committed files.
- Use `.env.example` for documentation only — no real values.
