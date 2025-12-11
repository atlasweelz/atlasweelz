export default {
  defaultLocale: "en",
  locales: ["en", "zh", "ja", "ko", "th", "vi", "fr", "de", "es", "sv", "da"],
  namespaces: ["common", "blog"],
  defaultNamespace: "common",
  load: ["server"],
  i18nextServer: {
    debug: false,
  },
  routes: {
    zh: { blog: "博客", about: "关于", contact: "联系" },
    ja: { blog: "ブログ", about: "について", contact: "お問い合わせ" },
    ko: { blog: "블로그", about: "소개", contact: "연락처" },
    th: { blog: "บล็อก", about: "เกี่ยวกับ", contact: "ติดต่อ" },
    vi: { blog: "blog", about: "ve-chung-toi", contact: "lien-he" },
    fr: { blog: "blog", about: "a-propos", contact: "contact" },
    de: { blog: "blog", about: "uber-uns", contact: "kontakt" },
    es: { blog: "blog", about: "acerca-de", contact: "contacto" },
    sv: { blog: "blogg", about: "om-oss", contact: "kontakt" },
    da: { blog: "blog", about: "om-os", contact: "kontakt" },
  },
};
