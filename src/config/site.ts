const base = import.meta.env.BASE_URL;

export const siteConfig = {
  studioName: "Hamido Game Studio",
  ownerName: "Mohamed Hamido",
  tagline: "Game Developer • Unreal Engine",

  heroTitle: "Mobile & PC Game Developer",
  heroSubtitle:
    "Independent game developer focused on creating immersive mobile and PC experiences with clean implementation and high performance.",

  // لاحظ أننا عدنا لاستخدام الاسم القديم: logoImage
  logoImage: `${base}images/logo.png`,
  heroImage: `${base}images/studio-hero.jpg`,
};

export default siteConfig;
