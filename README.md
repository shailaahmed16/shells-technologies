# Shells Technologies — SaaS Marketing Landing Page

A modern, responsive SaaS/IT studio landing page built with **Next.js App Router + TypeScript + Tailwind CSS**.

## Stack

- Next.js 16.3.5
- React 19.3.0
- Tailwind CSS 4.3.3
- TypeScript
- Lucide React icons

The project uses the current Next.js App Router structure and Tailwind's current PostCSS integration.

## 1. Setup

Requirements: Node.js 20+.

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## 2. Project structure

```text
shells-technologies/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/
│   ├── icon.svg
│   └── og-image.svg
├── eslint.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 3. Change branding colors

The main brand variables are at the top of:

```text
app/globals.css
```

Edit:

```css
:root {
  --background: #050507;
  --foreground: #f8f7ff;
  --muted: #a4a1b2;
  --purple: #8b5cf6;
  --purple-light: #c4b5fd;
}
```

Most section colors are standard Tailwind utilities such as:

```text
bg-black
bg-violet-600
text-violet-400
border-white/10
```

Search/replace these classes if you want a different visual identity.

## 4. Change text/content

Each major section has its own component:

- Hero → `components/Hero.tsx`
- Services → `components/Services.tsx`
- Projects → `components/Projects.tsx`
- Process → `components/Process.tsx`
- Testimonials → `components/Testimonials.tsx`
- Contact CTA → `components/CTA.tsx`
- Footer → `components/Footer.tsx`

The arrays near the top of each component are intentionally simple so you can edit copy, cards, technologies, and projects quickly.

## 5. Change project images

Edit the `image` property in:

```text
components/Projects.tsx
```

The starter uses remote Unsplash images. For production, replace them with your own optimized images under `public/images/` and use paths such as:

```text
/images/project-one.webp
```

Using local WebP/AVIF assets is recommended for production performance.

## 6. SEO

SEO metadata is configured in:

```text
app/layout.tsx
```

It includes:

- Title templates
- Meta description
- Keywords
- Canonical URL
- Open Graph metadata
- Twitter card metadata
- Robots directives

Update:

```ts
const siteUrl = "https://www.shellstechnologies.com";
```

to your real domain before launch.

The App Router also provides:

```text
/sitemap.xml
/robots.txt
```

through:

```text
app/sitemap.ts
app/robots.ts
```

## 7. Contact details

Update the email in:

```text
components/CTA.tsx
components/Footer.tsx
```

The current placeholder is:

```text
hello@shellstechnologies.com
```

Replace the GitHub and LinkedIn `href="#"` values in `components/Footer.tsx` with your actual company profiles.

## 8. Deployment

The project can be deployed to Vercel or another Node-compatible hosting platform.

Before deployment:

1. Replace the placeholder domain.
2. Replace placeholder project images.
3. Add real social profile URLs.
4. Connect the contact CTA to your preferred form/email backend.
5. Run `npm run build`.
6. Test mobile navigation, anchors, images, metadata, sitemap, and robots.

## Vercel + SEO URL setup

This project is prepared for Vercel's default production URL:
`https://shells-technologies.vercel.app`

If Vercel assigns a different project slug, set the environment variable:
`NEXT_PUBLIC_SITE_URL=https://YOUR-PROJECT-NAME.vercel.app`

After deployment:
1. Open the exact Production URL shown by Vercel.
2. Put that URL into `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings → Environment Variables.
3. Redeploy.
4. Submit `https://YOUR-PROJECT-NAME.vercel.app/sitemap.xml` in Google Search Console.
5. Use URL Inspection for the homepage and service pages.
6. If you later buy a custom domain, change only `NEXT_PUBLIC_SITE_URL`; the metadata, canonical URLs, sitemap and robots will follow it.

### Advanced SEO included

- Page-specific title and description metadata
- Canonical URLs
- Open Graph and Twitter metadata
- `robots.txt` and dynamic `sitemap.xml`
- Organization + WebSite JSON-LD
- Service JSON-LD on focused service pages
- Dedicated SEO landing pages for Web Development, SaaS Development, UI/UX Design and Technical SEO
- Semantic headings and crawlable internal links
- Responsive/performance-conscious structure
- Production-ready Vercel URL configuration

SEO improves eligibility and discoverability; it cannot guarantee a Google Top-1/Top-2 position. Rankings also depend on search intent, competition, content quality, authority, links, location and ongoing optimization.
