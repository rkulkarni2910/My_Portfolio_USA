# Rohan Kulkarni — Portfolio (React + Vite + Tailwind)

**Quick Start**

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Locally preview the build (optional)

```bash
npm run preview
# or to run the included Node server:
npm start
```

Replace `public/resume.pdf` with your actual resume PDF to enable "Download Resume" button. Also add your profile image to `public/profile.jpg` (replace the placeholder file) — this image will be shown in the Hero section.

---

**Deploy to Azure (recommended: Static Web Apps)**

- Option A (Azure Static Web Apps - easiest):
  1. Push this repo to GitHub.
  2. In the Azure Portal, create a new **Static Web App** and connect your GitHub repo.
  3. Set the build output folder to `dist` (Vite default) and let Azure create a GitHub Action.

- Option B (Azure App Service using Node server):
  1. Build: `npm run build`
  2. ZIP the `dist` folder (or the whole project with `server.js`) and deploy using `az webapp deployment source config-zip` OR use `az webapp up`.
  3. Make sure to set a Node runtime and the `PORT` env var is used by the server (server.js honors `process.env.PORT`).

---

If you want, I can also add CI (GitHub Actions) to auto-deploy to Azure on push. Replace or customize any content like colors, texts, and your real resume as needed.

---

## CI/CD: GitHub Actions → Azure Static Web Apps ✅

A GitHub Actions workflow has been added at `.github/workflows/azure-static-web-apps.yml`. It builds the project (Node 18) and deploys the `dist` folder to **Azure Static Web Apps** on pushes to the `main` branch.

To complete the setup:

1. Create a **Static Web App** in the Azure Portal (or open your existing Static Web App) and copy the **Deployment token** from **Manage deployment token**.
2. In your GitHub repo, go to **Settings → Secrets and variables → Actions → New repository secret** and add:
   - **Name:** `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value:** (paste the deployment token from Azure)
3. Ensure your main branch is named `main` (or update the workflow to target a different branch).
4. Push to `main` — the workflow will run and deploy the `dist` folder.

Notes:
- App location: `/` (repo root). Output location: `dist` (Vite build).
- The workflow runs `npm ci` and `npm run build` before deployment.

If you want, I can also add a workflow that creates the Static Web App programmatically using `Azure/login` and `Azure/cli`.
