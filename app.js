/* ==========================================================
   ABDELRAHMAN GAMAL — PORTFOLIO · "DIRECTOR'S CUT"
   Inspired by Ghaith Ramadan's Editorial Architecture
   Full-Quality Google Drive Playback + 8-Client Design Showcase
   ========================================================== */

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ---------- Featured Editorial Showcase (Full Quality via Google Drive) ---------- */
const FEATURED_EDITORIAL = [
  {
    idx: "P—01",
    id: "1CB0rZjYRNlVtHZxsf3E3qGWRc8wISz4s",
    title: "Ajwad Real Estate — National Day Film",
    titleAr: "أجود للعقارات — فيلم اليوم الوطني السعودي",
    desc: "A high-impact AI real estate campaign engineered for Saudi National Day — all images and properties featured in this film are 100% real-world Ajwad projects on the ground (not fictional or imaginary concepts), brought to life with cinematic AI motion.",
    descAr: "حملة إعلانية سينمائية بالذكاء الاصطناعي لشركة أجود للعقارات بمناسبة اليوم الوطني السعودي — جميع الصور والمشاريع المعروضة في الفيديو هي مشاريع حقيقية تماماً على أرض الواقع وليست خيالية، تم تحريكها وإخراجها سينمائياً بالذكاء الاصطناعي.",
    direction: "Direction — real-world architectural projects in AI motion.",
    directionAr: "الإخراج — مشاريع عقارية حقيقية على أرض الواقع برؤية سينمائية.",
    tags: ["Real Estate", "Real Projects + AI Motion", "KSA"]
  },
  {
    idx: "P—02",
    id: "1kCFvNdgEC2WYJObdbv4EPuKlD9lx4wgP",
    title: "Safes Shop — 'The Tank' Commercial",
    titleAr: "Safes Shop لأنظمة الأمان — إعلان الدبابة",
    desc: "Cinematic product storytelling showcasing extreme durability and security through dramatic AI environments, sound design, and high-contrast visual grading.",
    descAr: "قصة إعلانية سينمائية تبرز القوة والأمان الفائق من خلال مشاهد بصرية درامية ومؤثرات صوتية احترافية.",
    direction: "Direction — dramatic scale that stops the scroll.",
    directionAr: "الإخراج — مشهد درامي يخطف الانتباه من اللحظة الأولى.",
    tags: ["Commercial Brand", "AI VFX + Edit", "EGY"]
  },
  {
    idx: "P—03",
    id: "1g7YyZlvHBz3i0ZnW30OwRSXSpUrae4Nk",
    title: "V Cola — Viral AI Commercial",
    titleAr: "إعلان V Cola — حملة إعلانية بالذكاء الاصطناعي",
    desc: "High-energy beverage commercial crafted with dynamic AI fluid simulation, vibrant lighting, and fast-paced editorial rhythm.",
    descAr: "إعلان تجاري سينمائي لعلامة V Cola يجمع بين الحيوية، والمؤثرات البصرية الخاطفة، والإخراج الإعلاني السريع بالذكاء الاصطناعي.",
    direction: "Direction — vibrant motion and commercial energy.",
    directionAr: "الإخراج — حيوية بصرية وإيقاع إعلاني خاطف.",
    tags: ["Commercial Brand", "AI Commercial Film", "EGY · KSA"]
  },
  {
    idx: "P—04",
    id: "1TdHScd59dwK1RVxS8SHMfomEzWea7a9Y",
    title: "Bariatric Surgeon — Thyroid & Weight Campaign",
    titleAr: "جراحات السمنة — الغدة الدرقية والوزن",
    desc: "Cinematic AI medical storytelling explaining the relationship between thyroid function and weight management with lifelike visual metaphors and engaging pacing.",
    descAr: "فيديو طبي سينمائي بالذكاء الاصطناعي يوضح علاقة الغدة الدرقية بالوزن وجراحات السمنة بأسلوب بصري جذاب ومقنع.",
    direction: "Direction — medical clarity with cinematic hooks.",
    directionAr: "الإخراج — معلومة طبية دقيقة بمشهد سينمائي خاطف.",
    tags: ["Medical & Bariatric", "AI Medical Film", "EGY · UAE"]
  },
  {
    idx: "P—05",
    id: "1U2Y2qQB2Ln7qKl28Y2gNNcvHu05_w5uY",
    title: "Tahakom Law Firm — Corporate AI Spot",
    titleAr: "تحاكم للمحاماة — إعلان رسمي بالذكاء الاصطناعي",
    desc: "Prestigious legal brand film crafted for the Saudi market, blending authoritative voiceover, photorealistic AI scenes, and refined corporate identity.",
    descAr: "فيلم إعلاني احترافي لشركة تحاكم للمحاماة في السوق السعودي يجمع بين الفخامة البصرية والرسالة القانونية المؤثرة بالذكاء الاصطناعي.",
    direction: "Direction — authority, trust, and cinematic polish.",
    directionAr: "الإخراج — هيبة العلامة التجارية وبصمة سينمائية فاخرة.",
    tags: ["Law & Corporate", "AI Brand Film", "KSA"]
  },
  {
    idx: "P—06",
    id: "1r4K9BH45_SmhOe7k0770JLml_O3Wk6LX",
    title: "Safes Shop — Security Spot",
    titleAr: "Safes Shop لأنظمة الأمان — إعلان الخزائن الذكية",
    desc: "High-converting commercial spot highlighting smart safe technology, biometric protection, and peace of mind with crisp product integration and dynamic pacing.",
    descAr: "إعلان تجاري يبرز تقنيات الخزائن الذكية والحماية الفائقة بأسلوب بصري مشوق يجمع بين دقة المنتج والإخراج السينمائي.",
    direction: "Direction — product precision and commercial impact.",
    directionAr: "الإخراج — إبراز تفاصيل المنتج بقوة إعلانية.",
    tags: ["Commercial Brand", "AI Product Film", "EGY"]
  }
];

/* ---------- Latest 15 Curated Videos (Selected from 1000+ Projects) ---------- */
const ALL_VIDEOS = [
  { id: "1CB0rZjYRNlVtHZxsf3E3qGWRc8wISz4s", title: "Ajwad Real Estate — National Day Film", titleAr: "أجود للعقارات — فيلم اليوم الوطني السعودي", folder: "أجود للعقارات", category: "realestate", region: "KSA" },
  { id: "1g7YyZlvHBz3i0ZnW30OwRSXSpUrae4Nk", title: "V Cola — AI Commercial Campaign", titleAr: "إعلان V Cola بالذكاء الاصطناعي", folder: "V Cola", category: "commercial", region: "EGY · KSA" },
  { id: "1U2Y2qQB2Ln7qKl28Y2gNNcvHu05_w5uY", title: "Tahakom Law Firm — Corporate AI Spot", titleAr: "تحاكم للمحاماة — إعلان رسمي بالذكاء الاصطناعي", folder: "تحاكم للمحاماة", category: "legal", region: "KSA" },
  { id: "1Q8rFkpYcS-BHZW4JH-j9s7QL-nKrvx0w", title: "Tahakom Law Firm — National Day Film", titleAr: "تحاكم للمحاماة — فيلم اليوم الوطني", folder: "تحاكم للمحاماة", category: "legal", region: "KSA" },
  { id: "1kCFvNdgEC2WYJObdbv4EPuKlD9lx4wgP", title: "Safes Shop — The Tank Safe Ad", titleAr: "Safes Shop لأنظمة الأمان — إعلان الدبابة", folder: "Safes Shop", category: "commercial", region: "EGY" },
  { id: "1r4K9BH45_SmhOe7k0770JLml_O3Wk6LX", title: "Safes Shop — Security Spot", titleAr: "إعلان Safes Shop للخزائن الذكية", folder: "Safes Shop", category: "commercial", region: "EGY" },
  { id: "1UFXQnRDYMVfhK6kH_uyAA3gmzqwzgEPC", title: "Safes Shop — Showroom Campaign", titleAr: "Safes Shop لأنظمة الأمان — إعلان المعرض", folder: "Safes Shop", category: "commercial", region: "EGY" },
  { id: "11QqrgrHgqimn_tMWLgWBTV7FGoNx5Odr", title: "ARC Developments — Real Estate Promo", titleAr: "شركة ARC للتطوير العقاري", folder: "ARC Developments", category: "realestate", region: "EGY · UAE" },
  { id: "1eVJlullCdPUgiwizFqkUe8vuD2vMHihp", title: "Diamond — Luxury Brand Campaign", titleAr: "حملة Diamond التجارية", folder: "Diamond", category: "commercial", region: "KSA · UAE" },
  { id: "1TdHScd59dwK1RVxS8SHMfomEzWea7a9Y", title: "Bariatric Surgeon — Thyroid & Weight", titleAr: "جراحات السمنة — الغدة الدرقية والوزن", folder: "Bariatric Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1jjwSzx0RlpqjmnAm-Ju0mS1KpSbAZpPZ", title: "Bariatric Surgeon — Patient Journey", titleAr: "جراحات السمنة — رحلة وتجربة المريض", folder: "Bariatric Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1oIw_fjLv2G2D9vJhZJ1UnMr2dVsZVNpF", title: "Dental Aesthetics — Hollywood Veneers", titleAr: "طب الأسنان التجميلي — الفينير", folder: "Dentist", category: "medical", region: "EGY · UAE" },
  { id: "1e2PrwIP3y7lN6ommKXT8EzcRcpnDO-Pe", title: "Vascular Surgeon — Laser Treatment", titleAr: "جراحة الأوعية الدموية — العلاج بالليزر", folder: "Vascular Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1yQhiv3FpOpDlUrV47YRg8hVS_ZI4F1Xs", title: "Global Scan Radiology — Heart Diagnostics", titleAr: "جلوبال سكان للأشعة — فحوصات القلب", folder: "جلوبال سكان", category: "medical", region: "EGY" },
  { id: "1mzeavIw0DGJWLWaDXDA_6uP98KG8FO_5", title: "Teama Lab — Medical Diagnostics Ad", titleAr: "معامل طعيمة — إعلان التحاليل الطبية", folder: "Teama Lab", category: "medical", region: "EGY" }
];

const CATEGORY_LABELS = {
  medical: { en: "Medical & Healthcare", ar: "القطاع الطبي" },
  commercial: { en: "Commercial & Brands", ar: "إعلانات تجارية" },
  realestate: { en: "Real Estate", ar: "التطوير العقاري" },
  legal: { en: "Law & Education", ar: "محاماة وتعليم" }
};

/* ---------- Curated Graphic Designs (Medical Clients First + Suhail & Safes Shop) ---------- */
const DESIGN_CLIENTS = [
  {
    idx: "D—01",
    key: "dr_mohamed_hossam",
    clientEn: "Dr. Mohamed Hossam — Bariatric & Laparoscopic",
    clientAr: "د. محمد حسام — جراحات السمنة والمناظير",
    sectorEn: "Medical · Surgery",
    sectorAr: "جراحات السمنة والمناظير",
    region: "EGY",
    designs: [
      { id: "1JU6V2BwpYEdFu9jdxEWukGnNfz3W5omk", titleEn: "Endoscopic Thyroid Surgery", titleAr: "الدرقية بالمنظار بدون جرح" },
      { id: "1Ni4PydevEWX00zVTMb7Vm0myzhtOV_Is", titleEn: "Don't Miss Life's Best Moments", titleAr: "متخليش لحظة حلوة تفوتك" },
      { id: "1XKltFAtK8LlCCI8ODCwDh5nPWw3Pnsrj", titleEn: "Laparoscopic Hernia Repair", titleAr: "المنظار وعلاج الفتق" },
      { id: "1kGwBUGkXc6CfVfZ3CTHXl4quriTepNGR", titleEn: "Life After Gastric Sleeve", titleAr: "حياتك بعد التكميم" },
      { id: "1z7TfbB3YwI2S0lbg-xg2tqJl0cDcZcYF", titleEn: "Behind Every Successful Surgery", titleAr: "وراء كل جراحة ناجحة" }
    ]
  },
  {
    idx: "D—02",
    key: "dr_ahmed_zayan",
    clientEn: "Dr. Ahmed Zayan — Bariatric & General Surgery",
    clientAr: "د. أحمد زيان — استشاري جراحة السمنة والمناظير والجراحة العامة",
    sectorEn: "Medical · Bariatric & General",
    sectorAr: "جراحة السمنة والمناظير",
    region: "EGY · KSA",
    designs: [
      { id: "13KPaJAtvGmZlmpUO_LmuIU8euLTRuhoL", titleEn: "Sitting Pain & Surgical Relief — 01", titleAr: "القعدة بقت بتوجعك؟ — 1" },
      { id: "14Kkp7kdL5XboDQjjE8OE_YvQKb-wxBJw", titleEn: "Clinical Diagnosis & Care — 02", titleAr: "التشخيص والعلاج الجراحي — 2" },
      { id: "1IeNKPn9Lz4waWIeaDxcg5tkqVgh0OnI6", titleEn: "Minimally Invasive Treatment — 03", titleAr: "الحل الطبي السريع — 3" },
      { id: "1RCHHza_X3sOBVZgnyLbt1h02F9kLYNyi", titleEn: "Safe Recovery & Consultation — 04", titleAr: "التعافي الآمن والاستشارة — 4" }
    ]
  },
  {
    idx: "D—03",
    key: "dr_amr_abdelbary",
    clientEn: "Dr. Amr Abdelbary — Vascular Surgery",
    clientAr: "د. عمرو عبدالباري — جراحة الأوعية الدموية",
    sectorEn: "Medical · Vascular",
    sectorAr: "الأوعية الدموية والقسطرة",
    region: "EGY · UAE",
    designs: [
      { id: "19PsA1MvmMXxWtqw4z2QMMaqsaMpSwauG", titleEn: "Carotid Artery Care", titleAr: "علاج تصلب الشرايين" },
      { id: "1jpPyVCeQsE_IOn1l3WHVBJKl3MfTf0me", titleEn: "Minimally Invasive Recovery", titleAr: "الجرح الصغير والتعافي السريع" },
      { id: "1D81JQRYaPGmR6YfmwJwpu0YNJ4hw6Nkd", titleEn: "Interventional Catheterization", titleAr: "القسطرة العلاجية الدقيقة" },
      { id: "1Qg3_BxqRYL0PYUdTZxDFJj6r2tWpu13d", titleEn: "Walking Pain Diagnostics", titleAr: "آلام المشي والشرايين" },
      { id: "10AEHw2dje0QZ9e12JFxXJeJLzNXZnetg", titleEn: "Laser Varicose Vein Treatment", titleAr: "علاج الدوالي بالليزر" }
    ]
  },
  {
    idx: "D—04",
    key: "dr_ahmed_salah",
    clientEn: "Dr. Ahmed Salah — Dental & Implants Center",
    clientAr: "د. أحمد صلاح — زراعة وتجميل الأسنان",
    sectorEn: "Dental · Implants",
    sectorAr: "زراعة وتجميل الأسنان",
    region: "EGY · KSA",
    designs: [
      { id: "1SH4idzloblW6HuQUz-AouIf-AuP3JH_K", titleEn: "Precision Dental Implants", titleAr: "زراعة الأسنان الفورية" },
      { id: "14jYPL4-ZkiCCKJmoAs6O3hkS0xsgv1J0", titleEn: "Implants vs Fixed Bridges", titleAr: "زراعة ولا تركيبات؟" },
      { id: "1Q2quT88QannoMuYYdipFO_cY1s8P7oMU", titleEn: "Upper Jaw Rehabilitation", titleAr: "تأهيل الفك العلوي" },
      { id: "1ENABCdtFHGz8jpdWewgpBJMqdMSSB4Us", titleEn: "Why Prosthetics Fail", titleAr: "ليه التركيبة باظت؟" },
      { id: "14CAo4FtwhR0sCCW1mw7dRx9qgr5PgdTf", titleEn: "Gum Health & Periodontics", titleAr: "علاج نزيف اللثة" }
    ]
  },
  {
    idx: "D—05",
    key: "global_scan",
    clientEn: "Global Scan — Radiology & Diagnostics",
    clientAr: "مركز جلوبال سكان — للأشعة والتشخيص الطبي",
    sectorEn: "Healthcare · Radiology",
    sectorAr: "أشعة وتشخيص طبي",
    region: "EGY",
    designs: [
      { id: "1LfIMMqksWI5WPn2oQ702SJz_0R4307ea", titleEn: "The First Moment Ultrasound", titleAr: "أول لحظة تطمئنك" },
      { id: "14syrW68NmONO6Zr61DovN4XKJZTN8v-n", titleEn: "Pediatric Echocardiography", titleAr: "إيكو الأطفال بأعلى دقة" },
      { id: "1sG0ee1Ksv0MtD2pUDhU00lIwGZUyarhw", titleEn: "Interactive Diagnostic Awareness", titleAr: "توعية طبية تفاعلية" },
      { id: "1ktajL5J9ktn9E9V1s93coTj1VsmxAwry", titleEn: "Diagnostic Care Story", titleAr: "دقة التشخيص الطبي" },
      { id: "1d04hIrgTJV3yzRz8xv32zRZjA6H6VnVN", titleEn: "Medical Radiology Q&A", titleAr: "سؤال وجواب طبي" }
    ]
  },
  {
    idx: "D—06",
    key: "suhail_coffee",
    clientEn: "Suhail — Authentic Arabic Coffee",
    clientAr: "قهوة سُهيل — Suhail Arabic Coffee",
    sectorEn: "Commercial · Arabic Coffee Brand",
    sectorAr: "علامة قهوة عربية فاخرة",
    region: "EGY · KSA · UAE",
    designs: [
      { id: "1OvvwNfza-BwcPRvJG0vW1oKC0DSz3lNW", titleEn: "Authentic Arabic Coffee", titleAr: "أصالة القهوة العربي" },
      { id: "11eXJwDk13viPgk287aMQS7BqwDprAdIk", titleEn: "Suhail Signature Blend", titleAr: "مذاق قهوة سُهيل" },
      { id: "171uHjYranlykgy6ZLH4vY9S_hQoaLkwM", titleEn: "Quarter Cup — Arabic Hospitality", titleAr: "ربع الفنجان — قمة الكرم العربي" },
      { id: "1QDZ00MaFXxOOvi2xsxjWKjT1CEaefoX-", titleEn: "Suhail Story Carousel — 01", titleAr: "كاروسيل قهوة سُهيل — 1" },
      { id: "1fHlo4mcTBCLFnZ9rx--VIwL9cSzwDn7_", titleEn: "Suhail Story Carousel — 02", titleAr: "كاروسيل قهوة سُهيل — 2" },
      { id: "1hh2hzSzUkVD6PqJdLi0kplPxvG-YZnXI", titleEn: "Suhail Story Carousel — 03", titleAr: "كاروسيل قهوة سُهيل — 3" },
      { id: "1g7pyIfIt4FR773GYUHWW6uIQNWUlW55E", titleEn: "Suhail Story Carousel — 04", titleAr: "كاروسيل قهوة سُهيل — 4" }
    ]
  },
  {
    idx: "D—07",
    key: "safes_shop",
    clientEn: "Safes Shop — Security Systems",
    clientAr: "Safes Shop لأنظمة الأمان والخزائن",
    sectorEn: "Commercial · Security",
    sectorAr: "أنظمة أمان وخزائن",
    region: "EGY",
    designs: [
      { id: "1om5mSLhCUBSo6SKiAu8SPkCIhXMP_RXt", titleEn: "Smart Security Must Be Intelligent", titleAr: "الأمان لازم يكون ذكي" },
      { id: "1FJ_lTn9_j_h40V9a4uTwYq1llHXTOkyI", titleEn: "Extreme Impact Resistance", titleAr: "مقاومة فائقة للصدمات" },
      { id: "1tC2kNoCFBFIXHdj7PUv_cmh9GPJn0Ewu", titleEn: "Fireproof Safe Engineering", titleAr: "حماية قصوى ضد الحريق" },
      { id: "1u7FyNiZnBE5o5Z7jGP3Sdhvwe77QJDJM", titleEn: "Your Security Is Our Mission", titleAr: "أمانك مسؤوليتنا" },
      { id: "1FS_h9lmPXK_teMtuT1WU1PE1uXJtTlps", titleEn: "Corporate Security Setup", titleAr: "بنجهز شركتك بأعلى أمان" }
    ]
  }
];

let currentLang = "en";
let activeCategory = "all";
let activeDesignClient = "all";
let searchQuery = "";

function getDriveThumbnail(id, size = "w800") {
  return `https://drive.google.com/thumbnail?id=${id}&sz=${size}`;
}

/* ---------- Cinematic Loader ---------- */
const loader = document.getElementById('loader');
const pct = document.getElementById('loadPct');
if (!reduced && loader && pct) {
  document.body.style.overflow = 'hidden';
  let p = 0;
  const t = setInterval(() => {
    p = Math.min(p + Math.random() * 18 + 6, 100);
    pct.textContent = String(Math.floor(p)).padStart(2, '0') + '%';
    if (p >= 100) {
      clearInterval(t);
      setTimeout(() => {
        loader.classList.add('done');
        document.body.style.overflow = '';
      }, 200);
      setTimeout(() => loader.classList.add('gone'), 1400);
    }
  }, 75);
} else if (loader) {
  loader.classList.add('gone');
}

/* ---------- Scroll Scrubber ---------- */
const fill = document.getElementById('scrubFill');
addEventListener('scroll', () => {
  const h = document.documentElement;
  if (fill) {
    fill.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  }
}, { passive: true });

/* ---------- Custom Cursor ---------- */
const cur = document.getElementById('cur');
const ring = document.getElementById('curRing');
function bindCursorTargets() {
  if (!fine || reduced || !ring) return;
  document.querySelectorAll('[data-cursor]').forEach(el => {
    if (el.dataset.cursorBound) return;
    el.dataset.cursorBound = "1";
    el.addEventListener('mouseenter', () => ring.classList.add(el.dataset.cursor));
    el.addEventListener('mouseleave', () => ring.classList.remove('play', 'link'));
  });
}

if (fine && !reduced && cur && ring) {
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- Magnetic Buttons ---------- */
function bindMagnetic() {
  if (!fine || reduced) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    if (el.dataset.magBound) return;
    el.dataset.magBound = "1";
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = `translate(${x * 10}px,${y * 10}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform .5s var(--ease-out)';
      setTimeout(() => el.style.transition = '', 500);
    });
  });
}

/* ---------- Hero Parallax ---------- */
const media = document.getElementById('heroMedia');
if (!reduced && media) {
  addEventListener('scroll', () => {
    const y = scrollY;
    if (y < innerHeight * 1.2) {
      media.style.transform = `translateY(${y * 0.18}px) scale(1.06)`;
    }
  }, { passive: true });
}

/* ---------- Reveal Observer ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add('in');
    io.unobserve(e.target);
  }
}), { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll('.rv, .line-rv, .mask-rv, h2.title, .lead, h1, .big').forEach(el => io.observe(el));
}

/* ---------- Render Featured Editorial Projects (Full Quality via Google Drive) ---------- */
function renderFeaturedEditorial() {
  const container = document.getElementById('featuredEditorialList');
  if (!container) return;

  container.innerHTML = FEATURED_EDITORIAL.map(p => {
    const title = currentLang === 'ar' ? p.titleAr : p.title;
    const desc = currentLang === 'ar' ? p.descAr : p.desc;
    const dir = currentLang === 'ar' ? p.directionAr : p.direction;
    const thumb = getDriveThumbnail(p.id, "w1200");
    const watchLbl = currentLang === 'ar' ? 'تشغيل الفيديو بالجودة الكاملة ←' : 'Watch in full quality →';

    return `
      <article class="proj">
        <div class="thumb mask-rv" data-cursor="play" onclick="openModal('${p.id}')">
          <img src="${thumb}" alt="${title}" loading="lazy" referrerpolicy="no-referrer" />
          <span class="glow"></span>
          <span class="play-indicator">▶</span>
        </div>
        <div class="info rv">
          <span class="idx mono">${p.idx}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
          <p class="mono" style="margin-top:14px;color:var(--blue)">${dir}</p>
          <div class="meta">
            ${p.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
          <span class="open" onclick="openModal('${p.id}')" data-cursor="play" role="button" tabindex="0">${watchLbl}</span>
        </div>
      </article>
    `;
  }).join('');

  observeReveals();
  bindCursorTargets();
}

/* ---------- Render Full Archive Vault (Clean Titles, Full Drive Quality) ---------- */
function renderVault() {
  const container = document.getElementById('vaultGrid');
  if (!container) return;

  const filtered = ALL_VIDEOS.filter(v => {
    const matchesCat = activeCategory === 'all' || v.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      v.title.toLowerCase().includes(q) ||
      v.titleAr.toLowerCase().includes(q) ||
      (v.folder && v.folder.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  container.innerHTML = filtered.map(item => {
    const title = currentLang === 'ar' ? item.titleAr : item.title;
    const catInfo = CATEGORY_LABELS[item.category] || CATEGORY_LABELS.commercial;
    const catLabel = currentLang === 'ar' ? catInfo.ar : catInfo.en;
    const thumb = getDriveThumbnail(item.id, "w800");

    return `
      <div class="v-card rv" data-cursor="play" onclick="openModal('${item.id}')">
        <div class="v-thumb">
          <img src="${thumb}" alt="${title}" loading="lazy" referrerpolicy="no-referrer" />
          <div class="v-shade"></div>
          <div class="v-top">
            <span class="v-badge">${item.folder || 'Archive'}</span>
            <span class="v-region">${item.region}</span>
          </div>
          <div class="v-play">▶</div>
        </div>
        <div class="v-body">
          <span class="v-cat">${catLabel}</span>
          <h4>${title}</h4>
        </div>
      </div>
    `;
  }).join('');

  observeReveals();
  bindCursorTargets();
}

/* ---------- Render Graphic Design Showcase (8 Clients × 5 Cohesive Designs) ---------- */
function renderDesignFilters() {
  const filterWrap = document.getElementById('designClientFilters');
  if (!filterWrap) return;

  const allLbl = currentLang === 'ar' ? 'كل العملاء' : 'All Clients';
  const buttonsHtml = [
    `<button class="filter-pill ${activeDesignClient === 'all' ? 'active' : ''}" data-client="all" data-cursor="link">${allLbl}</button>`,
    ...DESIGN_CLIENTS.map(c => {
      const name = currentLang === 'ar' ? c.clientAr.split('—')[0].trim() : c.clientEn.split('—')[0].trim();
      const isAct = activeDesignClient === c.key ? 'active' : '';
      return `<button class="filter-pill ${isAct}" data-client="${c.key}" data-cursor="link">${name}</button>`;
    })
  ].join('');

  filterWrap.innerHTML = buttonsHtml;

  filterWrap.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeDesignClient = btn.getAttribute('data-client') || 'all';
      renderDesignFilters();
      renderDesigns();
    });
  });

  bindCursorTargets();
}

function renderDesigns() {
  const container = document.getElementById('designClientsWrap');
  if (!container) return;

  const list = activeDesignClient === 'all'
    ? DESIGN_CLIENTS
    : DESIGN_CLIENTS.filter(c => c.key === activeDesignClient);

  container.innerHTML = list.map(client => {
    const clientTitle = currentLang === 'ar' ? client.clientAr : client.clientEn;
    const sector = currentLang === 'ar' ? client.sectorAr : client.sectorEn;

    const cardsHtml = client.designs.map(d => {
      const dTitle = currentLang === 'ar' ? d.titleAr : d.titleEn;
      const thumbUrl = getDriveThumbnail(d.id, "w800");
      return `
        <div class="d-card rv" data-cursor="link" onclick="openImageModal('${d.id}', '${dTitle.replace(/'/g, "\\'")}')">
          <img src="${thumbUrl}" alt="${dTitle}" loading="lazy" referrerpolicy="no-referrer" />
          <div class="d-overlay">
            <span class="d-zoom">⤢</span>
            <span class="d-caption">${dTitle}</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="design-client-block rv">
        <div class="dc-head">
          <div class="dc-title-group">
            <span class="dc-idx mono">${client.idx}</span>
            <h3>${clientTitle}</h3>
          </div>
          <div class="dc-meta">
            <span class="dc-pill">${sector}</span>
            <span class="dc-pill muted">${client.region}</span>
          </div>
        </div>
        <div class="design-strip cols-${client.designs.length}">
          ${cardsHtml}
        </div>
      </div>
    `;
  }).join('');

  observeReveals();
  bindCursorTargets();
}

/* ---------- Lightbox Modal (Plays Google Drive Video or Opens Full-Res Design) ---------- */
const modal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const modalImage = document.getElementById('modalImage');
const mClose = document.getElementById('modalClose');

function openModal(driveId) {
  if (!modal || !modalIframe) return;
  modal.classList.remove('img-mode');
  if (modalImage) {
    modalImage.src = '';
    modalImage.style.display = 'none';
  }
  modalIframe.style.display = 'block';
  modalIframe.src = `https://drive.google.com/file/d/${driveId}/preview`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openImageModal(driveId, altTitle = '') {
  if (!modal || !modalImage) return;
  modal.classList.add('img-mode');
  if (modalIframe) {
    modalIframe.src = '';
    modalIframe.style.display = 'none';
  }
  modalImage.style.display = 'block';
  modalImage.alt = altTitle;
  modalImage.src = getDriveThumbnail(driveId, "w1600");
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  if (modalIframe) {
    modalIframe.src = '';
    modalIframe.style.display = 'none';
  }
  if (modalImage) {
    modalImage.src = '';
    modalImage.style.display = 'none';
  }
  modal.classList.remove('open', 'img-mode');
  document.body.style.overflow = '';
}

if (mClose) mClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal(); });

const reelBtn = document.getElementById('reelBtn');
if (reelBtn) {
  reelBtn.addEventListener('click', () => openModal('1g7YyZlvHBz3i0ZnW30OwRSXSpUrae4Nk'));
}

/* ---------- Hero Background Video Autoplay Assurance ---------- */
const heroBgVideo = document.getElementById('heroBgVideo');
if (heroBgVideo) {
  heroBgVideo.muted = true;
  heroBgVideo.play().catch(() => {});
}

/* ---------- Count-Up Stats ---------- */
const sio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  sio.unobserve(e.target);
  const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 1400;
  const step = now => {
    const k = Math.min((now - t0) / dur, 1), ease = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(end * ease);
    if (k < 1) requestAnimationFrame(step);
  };
  reduced ? el.textContent = end : requestAnimationFrame(step);
}), { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => sio.observe(el));

/* ---------- Bilingual Support (EN / AR) ---------- */
const I18N = {
  en: {
    nav_work: "Work",
    nav_vault: "Latest Videos",
    nav_designs: "Designs",
    nav_about: "About",
    nav_expertise: "Expertise",
    nav_contact: "Contact",
    hero_kick: "EGY · KSA · UAE · AI Film & Design · 2026",
    hero_h1_line2: 'Visual stories in <span class="b">AI motion.</span>',
    hero_sub: "AI Video Maker (2+ Years) & Senior Graphic Designer (3+ Years) crafting high-converting AI commercials, medical explainers, real estate films, and brand identities across Egypt, Saudi Arabia, and the UAE.",
    btn_view_work: "View Selected Work",
    btn_msg_whatsapp: "Message on WhatsApp",
    sec_01_eye: "01 — Selected Work",
    sec_01_title: 'Featured <span class="b">projects</span>',
    sec_vault_eye: "02 — Latest Curated Productions (Top 15)",
    sec_vault_title: 'Latest <span class="b">AI Videos</span>',
    sec_vault_note: "Showing our latest 15 featured productions only — a curated selection from 1000+ delivered projects.",
    filter_all: "All",
    sec_designs_eye: "03 — Graphic Design & Visual Identity (Latest Works)",
    sec_designs_title: 'Latest Brand <span class="b">Campaigns</span>',
    sec_designs_note: "Featuring our latest visual identity and social media campaigns only — selected from 1000+ delivered brand projects.",
    sec_02_eye: "04 — About",
    about_lead_1: "I direct visual attention.",
    about_lead_2: "Every prompt, every frame, every",
    about_lead_3: 'design has a <span class="b">commercial purpose.</span>',
    about_more: "I'm Abdelrahman Gamal — an AI Video Maker (2+ years) and Senior Graphic Designer (3+ years) serving clients across Egypt, Saudi Arabia, and the UAE. With 1000+ projects delivered, I specialize in turning complex commercial concepts into cinematic AI-driven films, medical awareness campaigns, real estate promos, and cohesive visual identities that look unmistakably premium.",
    fact_proj_k: "Projects Delivered",
    sec_03_eye: "05 — Expertise & AI Tools",
    sec_03_title: 'What I <span class="b">deliver</span>',
    sec_04_eye: "06 — Track Record",
    stat_3_l: "Projects Delivered",
    sec_05_eye: "07 — Contact",
    contact_h_1: "Let's make it",
    contact_h_2: '<span class="b">unforgettable.</span>',
    contact_sub: "AI commercial film, medical campaign, or full visual system — reach out directly via WhatsApp or Email."
  },
  ar: {
    nav_work: "أبرز الأعمال",
    nav_vault: "أحدث الفيديوهات",
    nav_designs: "التصميمات",
    nav_about: "عني",
    nav_expertise: "الخبرات والأدوات",
    nav_contact: "تواصل",
    hero_kick: "مصر · السعودية · الإمارات · صناعة فيديو AI وتصميم · 2026",
    hero_h1_line2: 'قصص بصرية تنبض <span class="b">بالذكاء الاصطناعي.</span>',
    hero_sub: "صانع فيديوهات بالذكاء الاصطناعي (خبرة سنتين) ومصمم جرافيك أول (3+ سنوات) أقدم إعلانات سينمائية، وحملات طبية وعقارية وهويات بصرية في مصر والسعودية والإمارات.",
    btn_view_work: "استعراض الأعمال المختارة",
    btn_msg_whatsapp: "تواصل عبر واتساب",
    sec_01_eye: "01 — أعمال مختارة",
    sec_01_title: 'أبرز <span class="b">المشاريع</span>',
    sec_vault_eye: "02 — أحدث الأعمال المختارة فقط (أفضل 15 فيديو)",
    sec_vault_title: 'أحدث فيديوهات <span class="b">الـ AI</span>',
    sec_vault_note: "هذه مجموعة مختارة لأحدث وأفضل 15 فيديو فقط — من أصل أكثر من +1000 مشروع تم تنفيذه.",
    filter_all: "الكل",
    sec_designs_eye: "03 — التصميم الجرافيكي والهوية البصرية (أحدث الأعمال)",
    sec_designs_title: 'أحدث حملات <span class="b">التصميمات</span>',
    sec_designs_note: "يعرض هذا القسم أحدث أعمال التصميمات والهويات البصرية فقط — مختارة من أصل أكثر من +1000 مشروع.",
    sec_02_eye: "04 — نبذة عني",
    about_lead_1: "أوجّه الانتباه البصري.",
    about_lead_2: "كل مشهد، وكل كادر، وكل",
    about_lead_3: 'تصميم يخدم <span class="b">هدفاً إعلانياً واضحاً.</span>',
    about_more: "أنا عبدالرحمن جمال — صانع فيديوهات بالذكاء الاصطناعي (خبرة سنتين) ومصمم جرافيك (خبرة 3+ سنوات) في مصر والسعودية والإمارات. مع أكثر من +1000 مشروع تم تنفيذه، أتخصص في تحويل الأفكار الإعلانية إلى أفلام سينمائية متكاملة بالـ AI، وحملات طبية وعقارية وهويات بصرية احترافية.",
    fact_proj_k: "عدد المشاريع",
    sec_03_eye: "05 — الخبرات ومنظومة أدوات الـ AI",
    sec_03_title: 'ماذا <span class="b">أقدم</span>',
    sec_04_eye: "06 — سجل الإنجازات",
    stat_3_l: "مشروع تم تنفيذه",
    sec_05_eye: "07 — تواصل معي",
    contact_h_1: "لنصنع عملاً",
    contact_h_2: '<span class="b">استثنائياً.</span>',
    contact_sub: "فيلم إعلاني بالـ AI، حملة طبية أو عقارية، أو هوية بصرية متكاملة — تواصل معي مباشرة عبر واتساب أو الإيميل."
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const htmlEl = document.documentElement;
  const langLabel = document.getElementById('langLabel');

  if (currentLang === 'ar') {
    htmlEl.setAttribute('dir', 'rtl');
    htmlEl.setAttribute('lang', 'ar');
    if (langLabel) langLabel.textContent = 'EN';
  } else {
    htmlEl.setAttribute('dir', 'ltr');
    htmlEl.setAttribute('lang', 'en');
    if (langLabel) langLabel.textContent = 'AR';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[currentLang][key]) {
      el.innerHTML = I18N[currentLang][key];
    }
  });

  renderFeaturedEditorial();
  renderVault();
  renderDesignFilters();
  renderDesigns();
}

/* ---------- Initialize ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedEditorial();
  renderVault();
  renderDesignFilters();
  renderDesigns();
  observeReveals();
  bindCursorTargets();
  bindMagnetic();

  // Video Filter pills
  document.querySelectorAll('#categoryFilters .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#categoryFilters .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      renderVault();
    });
  });

  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderVault();
    });
  }

  // Language toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // Footer local time + year
  function tick() {
    const lt = document.getElementById('localTime');
    if (lt) {
      lt.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Cairo' }).format(new Date()) + ' CAI';
    }
  }
  tick();
  setInterval(tick, 30000);
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
});
