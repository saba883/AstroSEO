# Netlify Deployment Guide for AstroSEO

## ✅ Pre-deployment Checklist

- [x] Service page cards updated with professional design
- [x] Code pushed to GitHub repository
- [x] netlify.toml configuration file created
- [x] _redirects file added for client-side routing
- [x] Fixed netlify.toml syntax error

## 🚀 Deployment Steps

### 1. Connect GitHub Repository
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select repository: `saba883/AstroSEO`

### 2. Configure Build Settings
Netlify should auto-detect these from netlify.toml, but verify:
- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `dist/public`
- **Node version**: 20 (set in netlify.toml)

### 3. Environment Variables
Add these in Netlify Dashboard → Site Settings → Environment Variables:

```env
DATABASE_URL=your_neon_database_url
OPENAI_API_KEY=your_openai_api_key
SESSION_SECRET=your_random_session_secret
NODE_ENV=production
```

### 4. Deploy
Click "Deploy site" and wait for the build to complete.

## 🔧 Troubleshooting

### Build Failures
- Check build logs in Netlify dashboard
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Routing Issues
- The `_redirects` file handles client-side routing
- All routes redirect to index.html for React Router

### Environment Variables
- Double-check all required env vars are set
- Use Netlify UI to manage sensitive values
- Don't commit .env files to repository

## 📝 Post-deployment

1. **Custom Domain**: Add your domain in Site Settings → Domain Management
2. **HTTPS**: Automatically enabled by Netlify
3. **Performance**: Monitor with Netlify Analytics
4. **Forms**: If using forms, configure Netlify Forms

## 🔄 Continuous Deployment

Every push to the `main` branch will trigger a new deployment automatically.

## 📞 Support

For issues specific to the application:
- WhatsApp: +966 50 768 8714
- GitHub Issues: https://github.com/saba883/AstroSEO/issues

---

Last updated: October 21, 2025
