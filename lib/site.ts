// Site-wide configuration for SEO and deployment.
export const siteConfig = {
  name: "Shells Technologies",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://shells-technologies.vercel.app",
  email: "hello@shellstechnologies.com",
  description:
    "Shells Technologies is a remote IT and design studio building high-performance websites, SaaS products, digital experiences, and scalable technology solutions.",
};
