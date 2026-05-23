# Kingdom Come Services HQ

## Environment Variables

Add these to Vercel Dashboard → Project Settings → Environment Variables:

```
MONGODB_URI=mongodb+srv://iammughal1234_db_user:T09efkyYtgjTYe0An@kingdomcluster.yszolua.mongodb.net/?appName=kingdomcluster
MONGODB_DB=kingdomcluster
ADMIN_PASSWORD=KCS2024!
NEXT_PUBLIC_SITE_URL=https://kingdomcomeservices.com
```

For local development, create a `.env.local` file with the same values.

## MongoDB Atlas Setup Required

1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. This is required for Vercel deployment to connect

## Tech Stack

- Next.js 15 (App Router)
- MongoDB Atlas + Mongoose
- Tailwind CSS
- shadcn/ui components
- TanStack Query
- Framer Motion
