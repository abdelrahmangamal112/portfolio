/* ==========================================================
   ABDELRAHMAN GAMAL — PORTFOLIO · "DIRECTOR'S CUT"
   Inspired by Ghaith Ramadan's Editorial Architecture
   Click-to-Play (No Autoplay), Custom Cursor, Magnetic Buttons
   ========================================================== */

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ---------- Featured Editorial Showcase (Top 3 Selected Works — Autoplay on Scroll) ---------- */
const FEATURED_EDITORIAL = [
  {
    idx: "P—01",
    id: "1CB0rZjYRNlVtHZxsf3E3qGWRc8wISz4s",
    videoSrc: "p01.mp4",
    title: "Ajwad Real Estate — National Day Film",
    titleAr: "أجود للعقارات — فيلم اليوم الوطني السعودي",
    desc: "A high-impact AI real estate campaign engineered for Saudi National Day — combining architectural grandeur, smooth camera motion, and authentic Gulf storytelling.",
    descAr: "حملة إعلانية سينمائية بالذكاء الاصطناعي لشركة أجود للعقارات بمناسبة اليوم الوطني السعودي — تجمع بين الفخامة المعمارية وحركة الكاميرا الانسيابية.",
    direction: "Direction — architectural prestige in every frame.",
    directionAr: "الإخراج — فخامة معمارية في كل كادر.",
    tags: ["Real Estate", "AI Film + Direction", "KSA"]
  },
  {
    idx: "P—02",
    id: "1kCFvNdgEC2WYJObdbv4EPuKlD9lx4wgP",
    videoSrc: "p02.mp4",
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
    id: "1TdHScd59dwK1RVxS8SHMfomEzWea7a9Y",
    videoSrc: "p03.mp4",
    title: "Bariatric Surgeon — Thyroid & Weight Campaign",
    titleAr: "جراحات السمنة — الغدة الدرقية والوزن",
    desc: "Cinematic AI medical storytelling explaining the relationship between thyroid function and weight management with lifelike visual metaphors and engaging pacing.",
    descAr: "فيديو طبي سينمائي بالذكاء الاصطناعي يوضح علاقة الغدة الدرقية بالوزن وجراحات السمنة بأسلوب بصري جذاب ومقنع.",
    direction: "Direction — medical clarity with cinematic hooks.",
    directionAr: "الإخراج — معلومة طبية دقيقة بمشهد سينمائي خاطف.",
    tags: ["Medical & Bariatric", "AI Medical Film", "EGY · UAE"]
  }
];

/* ---------- Full 53 Videos Archive ---------- */
const RECENT_CAMPAIGNS = [
  { id: "1CB0rZjYRNlVtHZxsf3E3qGWRc8wISz4s", title: "Ajwad Real Estate — National Day Offer", titleAr: "أجود للعقارات — عرض اليوم الوطني السعودي", folder: "1-اجود للعقارات", category: "realestate", region: "KSA" },
  { id: "1Q8rFkpYcS-BHZW4JH-j9s7QL-nKrvx0w", title: "Tahakom Law Firm — National Day Film", titleAr: "تحاكم للمحاماة — فيلم اليوم الوطني", folder: "2-تحاكم للمحاماة", category: "legal", region: "KSA" },
  { id: "1U2Y2qQB2Ln7qKl28Y2gNNcvHu05_w5uY", title: "Tahakom Law Firm — Corporate AI Spot", titleAr: "تحاكم للمحاماة — إعلان رسمي بالذكاء الاصطناعي", folder: "2-تحاكم للمحاماة", category: "legal", region: "KSA" },
  { id: "1kCFvNdgEC2WYJObdbv4EPuKlD9lx4wgP", title: "Safes Shop — The Tank Safe Ad", titleAr: "Safes Shop لأنظمة الأمان — إعلان الدبابة", folder: "3-Safes Shop", category: "commercial", region: "EGY" },
  { id: "1UFXQnRDYMVfhK6kH_uyAA3gmzqwzgEPC", title: "Safes Shop — Showroom Campaign", titleAr: "Safes Shop لأنظمة الأمان — إعلان المعرض", folder: "3-Safes Shop", category: "commercial", region: "EGY" },
  { id: "1flcoDwIyl1o_v1Z6ZpAMZIxt1zogvDpI", title: "Safes Shop — Shanon Safe Promo", titleAr: "Safes Shop لأنظمة الأمان — إعلان شانون", folder: "3-Safes Shop", category: "commercial", region: "EGY" },
  { id: "1ipdjthBLfuna6jPn67WGxf1wEWmNfM-z", title: "Safes Shop — Study Chair Promo", titleAr: "Safes Shop — إعلان كرسي المذاكرة", folder: "3-Safes Shop", category: "commercial", region: "EGY" },
  { id: "1TdHScd59dwK1RVxS8SHMfomEzWea7a9Y", title: "Bariatric Surgeon — Thyroid & Weight", titleAr: "جراحات السمنة — الغدة الدرقية", folder: "4-Bariatric Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1jjwSzx0RlpqjmnAm-Ju0mS1KpSbAZpPZ", title: "Bariatric Surgeon — Patient Journey", titleAr: "جراحات السمنة — المشاركة والتجربة", folder: "4-Bariatric Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1tSvbxu-WVYT-a-uQ3ojMphU08KhY9t8e", title: "Bariatric Surgeon — Choosing the Right Surgery", titleAr: "جراحات السمنة — اختيار العملية المناسبة", folder: "5-Bariatric Surgeon 2", category: "medical", region: "EGY · UAE" },
  { id: "1oIw_fjLv2G2D9vJhZJ1UnMr2dVsZVNpF", title: "Dental Aesthetics — Hollywood Veneers", titleAr: "طب الأسنان التجميلي — الفينير", folder: "6-Dentist", category: "medical", region: "EGY · UAE" },
  { id: "18jHwax3SUdWbOqmNQvqlkhJ-sfP9EVo0", title: "Dental Clinic — Wisdom Tooth AI Explainer", titleAr: "عيادة الأسنان — ضرس العقل", folder: "6-Dentist", category: "medical", region: "EGY · UAE" },
  { id: "18a-lG147yTYLBauuIOUxCXgnkbztudF_", title: "General Surgeon — Medical Awareness", titleAr: "الجراحة العامة — توعية طبية بالذكاء الاصطناعي", folder: "7-General Surgeon", category: "medical", region: "EGY · KSA" },
  { id: "1e2PrwIP3y7lN6ommKXT8EzcRcpnDO-Pe", title: "Vascular Surgeon — Laser Treatment", titleAr: "جراحة الأوعية الدموية — العلاج بالليزر", folder: "8-Vascular Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1IdpuUQe36BufTO48LXdlNw2y-xk7mKtN", title: "Vascular Surgeon — Pain After Walking", titleAr: "جراحة الأوعية الدموية — آلام المشي", folder: "8-Vascular Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1xMXZ5LXPDYrsLq0an-jB8NHYj20S_8bV", title: "Vascular Surgeon — Warning Signs", titleAr: "جراحة الأوعية الدموية — علامات تحذيرية", folder: "8-Vascular Surgeon", category: "medical", region: "EGY · UAE" },
  { id: "1mzeavIw0DGJWLWaDXDA_6uP98KG8FO_5", title: "Teama Lab — Medical Diagnostics Ad 1", titleAr: "معامل طعيمة — إعلان التحاليل الطبية ١", folder: "9-Teama Lab", category: "medical", region: "EGY" },
  { id: "1h3TIlCXGhjPSEi-WcxpmarCVTo_YAhwT", title: "Teama Lab — Medical Diagnostics Ad 2", titleAr: "معامل طعيمة — إعلان التحاليل الطبية ٢", folder: "9-Teama Lab", category: "medical", region: "EGY" },
  { id: "1yQhiv3FpOpDlUrV47YRg8hVS_ZI4F1Xs", title: "Global Scan Radiology — Heart Diagnostics", titleAr: "جلوبال سكان للأشعة — فحوصات القلب", folder: "10-جلوبال سكان", category: "medical", region: "EGY" },
  { id: "12B9geCB8KtgKvZMAl6ntHG8Qzw1frerV", title: "Global Scan Radiology — Kidney Scan", titleAr: "جلوبال سكان للأشعة — فحوصات الكلى", folder: "10-جلوبال سكان", category: "medical", region: "EGY" },
  { id: "1EV0iBpuByxE4Wb8U3kE620rzlzmbl5uS", title: "Global Scan Radiology — Gallbladder Scan", titleAr: "جلوبال سكان للأشعة — فحوصات المرارة", folder: "10-جلوبال سكان", category: "medical", region: "EGY" }
];

const MAIN_VAULT_VIDEOS = [
  { id: "1g7YyZlvHBz3i0ZnW30OwRSXSpUrae4Nk", title: "01 — V Cola Commercial", titleAr: "٠١ — إعلان V Cola بالذكاء الاصطناعي", category: "commercial", region: "EGY · KSA" },
  { id: "1FVj8lIR7pOO6SFW2lIiCxZ0KL0zQI83v", title: "02 — Global Scan Center", titleAr: "٠٢ — مركز جلوبال سكان للأشعة", category: "medical", region: "EGY" },
  { id: "1ZJjWcs3aRptjCbR_lrICWaV-rkAJKAzx", title: "03 — Nader Mansy Campaign I", titleAr: "٠٣ — حملة نادر منسي ١", category: "commercial", region: "EGY · UAE" },
  { id: "1uXsnWyh-2HPNFjPg4gn7uPTH2w8ka_y3", title: "04 — Dental Clinic Ad", titleAr: "٠٤ — إعلان عيادة الأسنان", category: "medical", region: "EGY · UAE" },
  { id: "11QqrgrHgqimn_tMWLgWBTV7FGoNx5Odr", title: "05 — ARC Developments Real Estate", titleAr: "٠٥ — شركة ARC للتطوير العقاري", category: "realestate", region: "EGY · UAE" },
  { id: "1-jdPlWId16-CFNQFTfLFNV4CHfNOqZ0q", title: "06 — Poultry Company Corporate Ad", titleAr: "٠٦ — إعلان شركة الدواجن", category: "commercial", region: "EGY · KSA" },
  { id: "1r4K9BH45_SmhOe7k0770JLml_O3Wk6LX", title: "07 — Safes Shop Commercial I", titleAr: "٠٧ — إعلان Safes Shop الأول", category: "commercial", region: "EGY" },
  { id: "1PKA4LghR7qnH-n6QPIIlBk2QT8E7kyIR", title: "08 — Safes Shop Commercial II", titleAr: "٠٨ — إعلان Safes Shop الثاني", category: "commercial", region: "EGY" },
  { id: "155Acjfq8iDJiRuDP1NjQZ6R9xvsLVtLg", title: "09 — Dr. Abdellatif Medical Reel I", titleAr: "٠٩ — د. عبداللطيف (فيديو طبي ١)", category: "medical", region: "EGY · KSA" },
  { id: "1dSAf4FdzetVu1HLr2u7YY-5cdhlH2JWg", title: "10 — Global Scan Diagnostics II", titleAr: "١٠ — جلوبال سكان للأشعة ٢", category: "medical", region: "EGY" },
  { id: "1eVJlullCdPUgiwizFqkUe8vuD2vMHihp", title: "11 — Diamond Brand Campaign I", titleAr: "١١ — حملة Diamond الأولى", category: "commercial", region: "KSA · UAE" },
  { id: "1WMgmfMMz8PtHthvqBu0wzn-XpUzaMUxc", title: "12 — Dr. Amr Medical Production", titleAr: "١٢ — د. عمرو (إنتاج طبي بالذكاء الاصطناعي)", category: "medical", region: "EGY" },
  { id: "1vXWwrdMuj7BW0n_nGu3eEJ3Artm5S8D8", title: "13 — Dr. Dashoush Clinic Ad", titleAr: "١٣ — عيادة د. دحشوش", category: "medical", region: "EGY" },
  { id: "1d-8L_B-MU77AEniUNG3BdljWRl7ltUbl", title: "14 — Dr. Fekry Medical Spot I", titleAr: "١٤ — د. فكري (إعلان طبي ١)", category: "medical", region: "EGY · UAE" },
  { id: "1rZXOY-N3f72EdmBaBMtFqX36xok8jFNr", title: "15 — Diamond Luxury Spot II", titleAr: "١٥ — حملة Diamond الثانية", category: "commercial", region: "KSA · UAE" },
  { id: "1PQyi4Lpj2V784X_fXStD3mFGbSW8_SD3", title: "16 — Dr. Hossam Medical Campaign I", titleAr: "١٦ — د. حسام (حملة طبية ١)", category: "medical", region: "EGY" },
  { id: "1F7W3StEkOZOdJ5JKGtVcR0Nwiin8-JKP", title: "17 — Dr. Fekry Medical Spot II", titleAr: "١٧ — د. فكري (إعلان طبي ٢)", category: "medical", region: "EGY · UAE" },
  { id: "12aoz_W_mDpUECq9RrPv46AiACIIF8YM-", title: "18 — Dr. Zayan Clinic Production", titleAr: "١٨ — د. زيان (إعلان طبي)", category: "medical", region: "EGY" },
  { id: "1RzhDn6D5MQFCQZJ2momEJDWGI3idaot1", title: "19 — Helm Academy Educational Promo", titleAr: "١٩ — أكاديمية حلم التعليمية", category: "legal", region: "EGY · KSA" },
  { id: "1ijl2asSxxVXe3R6z9myshF0U9HlVy2i7", title: "20 — Nader Mansy Campaign II", titleAr: "٢٠ — حملة نادر منسي ٢", category: "commercial", region: "EGY · UAE" },
  { id: "1K1SpqSEcLn_gcLwAiOtmSnRu0v0VPfZV", title: "21 — Diamond Brand Campaign III", titleAr: "٢١ — حملة Diamond الثالثة", category: "commercial", region: "KSA · UAE" },
  { id: "1cLQR5KerAcW5TO7XWzehD_cO3RACZcTj", title: "22 — Dr. Hossam Medical Campaign II", titleAr: "٢٢ — د. حسام (حملة طبية ٢)", category: "medical", region: "EGY" },
  { id: "1OT4gCLlnW4r0AsTRjcc81y_Qob0y-Y0a", title: "23 — Nader Mansy Campaign III", titleAr: "٢٣ — حملة نادر منسي ٣", category: "commercial", region: "EGY · UAE" },
  { id: "128mjXhWP9x63-liDMKGUB7vitC35QVC4", title: "24 — Dr. Abu Bakr Clinic Spot", titleAr: "٢٤ — د. أبو بكر (إعلان طبي)", category: "medical", region: "EGY · KSA" },
  { id: "14hau1Tb1uVqF0NtK42kgr0p_OkqdHgQG", title: "25 — Dr. Borham Medical Reel I", titleAr: "٢٥ — د. برهام (فيديو طبي ١)", category: "medical", region: "EGY" },
  { id: "10zK9KD6Ep4S77MQoxgOht9y2xLdw7rGO", title: "26 — Dr. Fekry Medical Spot III", titleAr: "٢٦ — د. فكري (إعلان طبي ٣)", category: "medical", region: "EGY · UAE" },
  { id: "1ThBufDphLqzbwAAPsLuyDnXF4kJJcMfi", title: "27 — Dr. Borham Medical Reel II", titleAr: "٢٧ — د. برهام (فيديو طبي ٢)", category: "medical", region: "EGY" },
  { id: "10Ke_OpF3B1zVk65xOkCt37bOKG2bNkZy", title: "28 — Ana Muhami Legal Platform I", titleAr: "٢٨ — منصة أنا محامي القانونية ١", category: "legal", region: "KSA · UAE" },
  { id: "1TqBwQwVJPPe4JlpVWte4qpcgie-2E7ts", title: "29 — Ana Muhami Legal Platform II", titleAr: "٢٩ — منصة أنا محامي القانونية ٢", category: "legal", region: "KSA · UAE" },
  { id: "1oNsJM0fRqDWUWdMOhHcu5aZRzxid0lxF", title: "30 — Diamond Brand Campaign IV", titleAr: "٣٠ — حملة Diamond الرابعة", category: "commercial", region: "KSA · UAE" },
  { id: "1LSg9A5AW5U00yWVrsHiYC3u76QIPJPLh", title: "31 — Diamond Brand Campaign V", titleAr: "٣١ — حملة Diamond الخامسة", category: "commercial", region: "KSA · UAE" },
  { id: "1iqQYXtdYZyVu-KIzAgYxQXDy8lGtJKzB", title: "33 — Dr. Abdellatif Medical Reel II", titleAr: "٣٣ — د. عبداللطيف (فيديو طبي ٢)", category: "medical", region: "EGY · KSA" },
  { id: "1H9SKVv9db5G0oRc10Q5pDTqzN6GyYbiF", title: "34 — Dr. Abdellatif Medical Reel III", titleAr: "٣٤ — د. عبداللطيف (فيديو طبي ٣)", category: "medical", region: "EGY · KSA" }
];

const ALL_VIDEOS = [
  ...RECENT_CAMPAIGNS.map(v => ({ ...v, isRecent: true })),
  ...MAIN_VAULT_VIDEOS.map(v => ({ ...v, isRecent: false, folder: "Archive" }))
];

const CATEGORY_LABELS = {
  medical: { en: "Medical & Healthcare", ar: "القطاع الطبي" },
  commercial: { en: "Commercial & Brands", ar: "إعلانات تجارية" },
  realestate: { en: "Real Estate", ar: "التطوير العقاري" },
  legal: { en: "Law & Education", ar: "محاماة وتعليم" }
};

let currentLang = "en";
let activeCategory = "all";
let searchQuery = "";

function getDriveThumbnail(id) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
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

/* ---------- Scroll Autoplay Observer for Top 5 Featured Videos Only ---------- */
const featVideoIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const vid = entry.target;
    if (!(vid instanceof HTMLVideoElement)) return;
    if (entry.isIntersecting) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  });
}, { threshold: 0.25 });

/* ---------- Render Featured Editorial Projects (Top 5 Autoplay on Scroll) ---------- */
function renderFeaturedEditorial() {
  const container = document.getElementById('featuredEditorialList');
  if (!container) return;

  container.innerHTML = FEATURED_EDITORIAL.map(p => {
    const title = currentLang === 'ar' ? p.titleAr : p.title;
    const desc = currentLang === 'ar' ? p.descAr : p.desc;
    const dir = currentLang === 'ar' ? p.directionAr : p.direction;
    const thumb = getDriveThumbnail(p.id);
    const watchLbl = currentLang === 'ar' ? 'تشغيل الفيديو بالصوت ←' : 'Watch with sound →';
    const badgeLbl = currentLang === 'ar' ? '🔊 اضغط للصوت' : '🔊 Tap for sound';

    return `
      <article class="proj">
        <div class="thumb mask-rv" data-cursor="play" onclick="openModal('${p.id}', '${p.videoSrc}')">
          <video class="feat-video" src="${p.videoSrc}" poster="${thumb}" muted loop playsinline preload="metadata"></video>
          <span class="glow"></span>
          <span class="sound-badge">${badgeLbl}</span>
        </div>
        <div class="info rv">
          <span class="idx mono">${p.idx}</span>
          <h3>${title}</h3>
          <p>${desc}</p>
          <p class="mono" style="margin-top:14px;color:var(--blue)">${dir}</p>
          <div class="meta">
            ${p.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
          <span class="open" onclick="openModal('${p.id}', '${p.videoSrc}')" data-cursor="play" role="button" tabindex="0">${watchLbl}</span>
        </div>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.feat-video').forEach(v => featVideoIO.observe(v));
  observeReveals();
  bindCursorTargets();
}

/* ---------- Render Full Archive Vault (Static Thumbnails — No Autoplay) ---------- */
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
    const thumb = getDriveThumbnail(item.id);
    const featMatch = FEATURED_EDITORIAL.find(f => f.id === item.id);
    const localSrc = featMatch ? featMatch.videoSrc : '';

    return `
      <div class="v-card rv" data-cursor="play" onclick="openModal('${item.id}', '${localSrc}')">
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

/* ---------- Lightbox Modal (Opens Video Player With Sound on Click) ---------- */
const modal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const modalVideo = document.getElementById('modalVideo');
const mClose = document.getElementById('modalClose');

function openModal(driveId, localSrc = '') {
  if (!modal) return;
  const featMatch = FEATURED_EDITORIAL.find(f => f.id === driveId);
  const srcToPlay = localSrc || (featMatch ? featMatch.videoSrc : '');

  if (srcToPlay && modalVideo) {
    if (modalIframe) {
      modalIframe.src = '';
      modalIframe.style.display = 'none';
    }
    modalVideo.style.display = 'block';
    modalVideo.src = srcToPlay;
    modalVideo.muted = false;
    modalVideo.currentTime = 0;
    modalVideo.play().catch(() => {});
  } else if (modalIframe) {
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.removeAttribute('src');
      modalVideo.style.display = 'none';
    }
    modalIframe.style.display = 'block';
    modalIframe.src = `https://drive.google.com/file/d/${driveId}/preview`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
    modalVideo.style.display = 'none';
  }
  if (modalIframe) {
    modalIframe.src = '';
    modalIframe.style.display = 'none';
  }
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

if (mClose) mClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal(); });

const reelBtn = document.getElementById('reelBtn');
if (reelBtn) {
  reelBtn.addEventListener('click', () => openModal('1CB0rZjYRNlVtHZxsf3E3qGWRc8wISz4s', 'p01.mp4'));
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
    nav_vault: "All Videos",
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
    sec_vault_eye: "02 — Complete Production Vault",
    sec_vault_title: 'All <span class="b">AI Productions</span>',
    filter_all: "All",
    sec_02_eye: "03 — About",
    about_lead_1: "I direct visual attention.",
    about_lead_2: "Every prompt, every frame, every",
    about_lead_3: 'design has a <span class="b">commercial purpose.</span>',
    about_more: "I'm Abdelrahman Gamal — an AI Video Maker (2+ years) and Senior Graphic Designer (3+ years) serving clients across Egypt, Saudi Arabia, and the UAE. With 100+ projects delivered, I specialize in turning complex commercial concepts into cinematic AI-driven films, medical awareness campaigns, real estate promos, and cohesive visual identities that look unmistakably premium.",
    fact_proj_k: "Projects Delivered",
    sec_03_eye: "04 — Expertise & AI Tools",
    sec_03_title: 'What I <span class="b">deliver</span>',
    sec_04_eye: "05 — Track Record",
    stat_3_l: "Projects Delivered",
    sec_05_eye: "06 — Contact",
    contact_h_1: "Let's make it",
    contact_h_2: '<span class="b">unforgettable.</span>',
    contact_sub: "AI commercial film, medical campaign, or full visual system — reach out directly via WhatsApp or Email."
  },
  ar: {
    nav_work: "أبرز الأعمال",
    nav_vault: "كل الفيديوهات",
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
    sec_vault_eye: "02 — الأرشيف الكامل للأعمال",
    sec_vault_title: 'معرض أعمال <span class="b">الـ AI</span>',
    filter_all: "الكل",
    sec_02_eye: "03 — نبذة عني",
    about_lead_1: "أوجّه الانتباه البصري.",
    about_lead_2: "كل مشهد، وكل كادر، وكل",
    about_lead_3: 'تصميم يخدم <span class="b">هدفاً إعلانياً واضحاً.</span>',
    about_more: "أنا عبدالرحمن جمال — صانع فيديوهات بالذكاء الاصطناعي (خبرة سنتين) ومصمم جرافيك (خبرة 3+ سنوات) في مصر والسعودية والإمارات. مع أكثر من +100 مشروع تم تنفيذه، أتخصص في تحويل الأفكار الإعلانية إلى أفلام سينمائية متكاملة بالـ AI، وحملات طبية وعقارية وهويات بصرية احترافية.",
    fact_proj_k: "عدد المشاريع",
    sec_03_eye: "04 — الخبرات ومنظومة أدوات الـ AI",
    sec_03_title: 'ماذا <span class="b">أقدم</span>',
    sec_04_eye: "05 — سجل الإنجازات",
    stat_3_l: "مشروع تم تنفيذه",
    sec_05_eye: "06 — تواصل معي",
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
}

/* ---------- Initialize ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedEditorial();
  renderVault();
  observeReveals();
  bindCursorTargets();
  bindMagnetic();

  // Filter pills
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
