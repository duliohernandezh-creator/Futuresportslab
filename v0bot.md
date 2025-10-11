# v0bot.md - System Instructions for v0 Bot

## 🚨 CRITICAL: Protected Configuration Files

**DO NOT MODIFY** the following files as they contain critical deployment configurations:

### 🔒 Protected Files (DO NOT EDIT):

- `next.config.mjs` - Next.js static export configuration
- `.htaccess` - Apache server configuration for Hostinger
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `package.json` - Build scripts and dependencies
- `tsconfig.json` - TypeScript configuration

### ✅ Safe to Modify Files:

- `app/page.tsx` - Main page content
- `app/layout.tsx` - Layout configuration
- `components/*.tsx` - Individual components
- `app/globals.css` - Global styles
- `public/*` - Static assets (images, etc.)

## 📋 Development Guidelines

### When Making Changes:

1. **ONLY modify content files** (`app/page.tsx`, `components/*`, etc.)

### When Making Changes (DO NOT):

1. **DO NOT** modify `next.config.mjs`
2. **DO NOT** modify `.htaccess`
3. **DO NOT** modify `.github/workflows/deploy.yml`
4. **DO NOT** modify `package.json` scripts
5. **DO NOT** modify `tsconfig.json`

---

**⚠️ WARNING: Modifying protected configuration files will break the automatic deployment process.**
