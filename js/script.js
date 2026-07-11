/* =========================================================
   PRAYOGO PANGESTU — PORTFOLIO SCRIPT
   ========================================================= */

/* ---------- I18N DICTIONARY ---------- */
const translations = {
  en: {
    loader_text: "BUILDING WORLD",
    nav_home: "HOME", nav_about: "ABOUT", nav_skills: "SKILLS", nav_projects: "PROJECTS", nav_contact: "CONTACT",
    lang_toggle_aria: "Switch language", theme_toggle_aria: "Switch color theme", burger_aria: "Open menu",
    hero_badge: "FRONT-END DEVELOPER · WORLD BUILDER",
    hero_subtitle: 'Building web interfaces <span class="hl-green">block by block</span>, with the precision of a <span class="hl-yellow">dark knight</span>.',
    hero_cta_projects: "VIEW PROJECTS", hero_cta_contact: "CONTACT ME", hero_scroll: "SCROLL",
    about_eyebrow: "// 01 — PERSONAL DATA",
    about_title: 'ABOUT <span class="accent">ME</span>',
    about_status: "STATUS: ONLINE &amp; OPEN FOR WORK",
    about_lead: 'Hi, I\'m <strong>Prayogo Pangestu</strong> — a front-end developer who loves assembling web interfaces like building blocks in an open world, then giving them the edge and style of a dark hero.',
    about_body: 'I focus on <strong>HTML, CSS, and JavaScript</strong> to build websites that are not only structurally clean, but also alive through animation, interaction, and refined visual detail. Every project follows the same principle: build a strong foundation first, then layer stunning effects on top.',
    about_stat1: "Years Learning to Code", about_stat2: "Projects Completed", about_stat3: "Willingness to Keep Learning",
    about_inv_detail: "DETAIL",
    skills_eyebrow: "// 02 — CRAFTING TABLE",
    skills_title: 'MY <span class="accent">SKILLS</span>',
    skills_desc: 'Three core ingredients I mix every time I "craft" a website.',
    skill_html_desc: "Semantic structure &amp; a solid foundation for every page — the basic block of everything.",
    skill_css_desc: "Animation, 3D layouts, and visual detail — how I give every element its bat-signal glow.",
    skill_js_desc: "Interaction &amp; logic — the engine behind every move, like gadgets on a utility belt.",
    projects_eyebrow: "// 03 — CASE FILES",
    projects_title: 'MY <span class="accent">PROJECTS</span>',
    projects_desc: '8 selected projects. Swap the image &amp; project name directly in the HTML code — look for the <code>&lt;!-- REPLACE HERE --&gt;</code> comment on each card.',
    overlay_view: "VIEW ▸",







    contact_eyebrow: "// 04 — EMERGENCY SIGNAL",
    contact_title: 'CONTACT <span class="accent">ME</span>',
    contact_desc: "Light up the bat-signal — let's talk about your next project.",
    footer_pre: "© ",
    footer_text: " Prayogo Pangestu — Built block by block, guarded in the dark.",
    page_title: "Prayogo Pangestu — Front-End Developer",
    page_desc: "Portfolio of Prayogo Pangestu, a Front-End Developer with a Minecraft x Batman theme.",
    toast_opening: "Opening"
  },
  id: {
    loader_text: "MEMBANGUN DUNIA",
    nav_home: "BERANDA", nav_about: "TENTANG", nav_skills: "KEAHLIAN", nav_projects: "PROJECT", nav_contact: "KONTAK",
    lang_toggle_aria: "Ganti bahasa", theme_toggle_aria: "Ganti tema warna", burger_aria: "Buka menu",
    hero_badge: "FRONT-END DEVELOPER · PEMBANGUN DUNIA",
    hero_subtitle: 'Membangun antarmuka web <span class="hl-green">blok demi blok</span>, dengan ketelitian seorang <span class="hl-yellow">ksatria malam</span>.',
    hero_cta_projects: "LIHAT PROJECT", hero_cta_contact: "HUBUNGI SAYA", hero_scroll: "GULIR",
    about_eyebrow: "// 01 — DATA DIRI",
    about_title: 'TENTANG <span class="accent">SAYA</span>',
    about_status: "STATUS: ONLINE &amp; TERBUKA UNTUK KERJA SAMA",
    about_lead: 'Halo, saya <strong>Prayogo Pangestu</strong> — front-end developer yang senang menyusun antarmuka web layaknya menyusun blok di dunia terbuka, lalu memberinya ketegasan dan gaya seorang pahlawan kegelapan.',
    about_body: 'Saya fokus pada <strong>HTML, CSS, dan JavaScript</strong> untuk membangun website yang tidak hanya rapi secara struktur, tapi juga hidup lewat animasi, interaksi, dan detail visual yang matang. Setiap project saya kerjakan dengan prinsip yang sama: bangun fondasi yang kuat dulu, baru tambahkan efek yang memukau di atasnya.',
    about_stat1: "Tahun Belajar Coding", about_stat2: "Project Dikerjakan", about_stat3: "Niat Belajar Tanpa Henti",
    about_inv_detail: "DETAIL",
    skills_eyebrow: "// 02 — MEJA KERAJINAN",
    skills_title: 'KEAHLIAN <span class="accent">SAYA</span>',
    skills_desc: 'Tiga bahan utama yang saya racik setiap saya "crafting" sebuah website.',
    skill_html_desc: "Struktur semantik &amp; fondasi kokoh untuk setiap halaman — blok dasar dari segalanya.",
    skill_css_desc: "Animasi, layout 3D, dan detail visual — cara saya memberi \"cahaya bat-signal\" pada tiap elemen.",
    skill_js_desc: "Interaksi &amp; logika — mesin di balik setiap gerakan, seperti gadget di sabuk utilitas.",
    projects_eyebrow: "// 03 — BERKAS KASUS",
    projects_title: 'PROJECT <span class="accent">SAYA</span>',
    projects_desc: '8 project pilihan. Ganti gambar &amp; nama project langsung lewat kode HTML — cari komentar <code>&lt;!-- REPLACE HERE --&gt;</code> di tiap kartu.',
    overlay_view: "LIHAT ▸",







    contact_eyebrow: "// 04 — SINYAL DARURAT",
    contact_title: 'HUBUNGI <span class="accent">SAYA</span>',
    contact_desc: "Nyalakan bat-signal — mari berdiskusi soal project berikutnya.",
    footer_pre: "© ",
    footer_text: " Prayogo Pangestu — Dibangun blok demi blok, dijaga dalam gelap.",
    page_title: "Prayogo Pangestu — Front-End Developer",
    page_desc: "Portofolio Prayogo Pangestu, Front-End Developer bertema Minecraft x Batman.",
    toast_opening: "Membuka"
  }
};

const themePalettes = {
  classic: { grid: '74,217,217', glow: '242,193,78' },
  vibrant: { grid: '0,229,255', glow: '255,79,163' }
};

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LANGUAGE SWITCHER ---------- */
  const htmlEl = document.documentElement;
  let currentLang = localStorage.getItem('pp_lang') || 'en';

  function applyLanguage(lang){
    currentLang = lang;
    htmlEl.setAttribute('lang', lang);
    localStorage.setItem('pp_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[lang][key] !== undefined) el.setAttribute('aria-label', translations[lang][key]);
    });

    document.getElementById('pageTitle').textContent = translations[lang].page_title;
    document.getElementById('pageDesc').setAttribute('content', translations[lang].page_desc);

    const label = lang === 'en' ? 'EN' : 'ID';
    const langLabel = document.getElementById('langLabel');
    const langLabelMobile = document.getElementById('langLabelMobile');
    if (langLabel) langLabel.textContent = label;
    if (langLabelMobile) langLabelMobile.textContent = label;
  }

  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'id' : 'en');
  });
  document.getElementById('langToggleMobile').addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'id' : 'en');
  });

  applyLanguage(currentLang);

  /* ---------- THEME SWITCHER ---------- */
  let currentTheme = localStorage.getItem('pp_theme') || 'classic';
  let currentThemeColors = themePalettes[currentTheme];

  function applyTheme(theme){
    currentTheme = theme;
    currentThemeColors = themePalettes[theme];
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('pp_theme', theme);

    const label = theme === 'classic' ? 'CLASSIC' : 'VIBRANT';
    const themeLabel = document.getElementById('themeLabel');
    const themeLabelMobile = document.getElementById('themeLabelMobile');
    if (themeLabel) themeLabel.textContent = label;
    if (themeLabelMobile) themeLabelMobile.textContent = label;
  }

  document.getElementById('themeToggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'classic' ? 'vibrant' : 'classic');
  });
  document.getElementById('themeToggleMobile').addEventListener('click', () => {
    applyTheme(currentTheme === 'classic' ? 'vibrant' : 'classic');
  });

  applyTheme(currentTheme);

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hide'), 500);
  });
  // fallback in case 'load' already fired
  setTimeout(() => loader.classList.add('hide'), 2500);

  /* ---------- YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- CUSTOM CURSOR ---------- */
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing(){
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-card, .skill-card, .contact-card, .inv-slot').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });

  /* ---------- NAVBAR ---------- */
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive:true });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(sec => spyObserver.observe(sec));

  /* ---------- HERO CUBE — mouse parallax ---------- */
  const heroCubeWrap = document.getElementById('heroCubeWrap');
  const heroCube = document.getElementById('heroCube');
  if (heroCubeWrap) {
    heroCubeWrap.addEventListener('mousemove', (e) => {
      const rect = heroCubeWrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      heroCube.style.animationPlayState = 'paused';
      heroCube.style.transform = `rotateX(${-18 - py * 20}deg) rotateY(${px * 40}deg)`;
    });
    heroCubeWrap.addEventListener('mouseleave', () => {
      heroCube.style.animationPlayState = 'running';
      heroCube.style.transform = '';
    });
  }

  /* ---------- HERO PARTICLES (rising blocks) ---------- */
  const particleWrap = document.getElementById('heroParticles');
  if (particleWrap) {
    const classes = ['p-a', 'p-b', 'p-c'];
    const count = window.innerWidth < 700 ? 18 : 34;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      const size = 3 + Math.random() * 5;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.classList.add(classes[Math.floor(Math.random() * classes.length)]);
      p.style.animationDuration = (8 + Math.random() * 10) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.opacity = 0.3 + Math.random() * 0.4;
      particleWrap.appendChild(p);
    }
  }

  /* ---------- BACKGROUND CANVAS — drifting voxel grid ---------- */
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, points = [];

  function resizeCanvas(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight * (document.body.scrollHeight / window.innerHeight > 1 ? 1 : 1);
    h = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const gridSize = 60;
  function drawGrid(t){
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = `rgba(${currentThemeColors.grid},0.05)`;
    ctx.lineWidth = 1;

    const offset = (t * 0.01) % gridSize;

    for (let x = -gridSize; x < w + gridSize; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x + offset, 0);
      ctx.lineTo(x + offset, h);
      ctx.stroke();
    }
    for (let y = -gridSize; y < h + gridSize; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y + offset * 0.5);
      ctx.lineTo(w, y + offset * 0.5);
      ctx.stroke();
    }

    // floating glow dots (like distant bat-signal sparks / ore glints)
    for (let i = 0; i < 22; i++) {
      const gx = (i * 137.5 + t * 0.02) % w;
      const gy = (Math.sin(i * 12.9 + t * 0.0006) * 0.5 + 0.5) * h;
      const glow = (Math.sin(t * 0.001 + i) * 0.5 + 0.5);
      ctx.fillStyle = `rgba(${currentThemeColors.glow},${0.05 + glow * 0.08})`;
      ctx.beginPath();
      ctx.arc(gx, gy, 1.5 + glow * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(drawGrid);
  }
  requestAnimationFrame(drawGrid);

  /* ---------- SCROLL REVEAL (skills, projects) ---------- */
  const revealTargets = document.querySelectorAll('.skill-card, .project-card');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------- PROJECT CARD 3D TILT ---------- */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-py * 8}deg) rotateY(${px * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---------- ABOUT STAT COUNTERS ---------- */
  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        let current = 0;
        const duration = 1400;
        const startTime = performance.now();
        function tick(now){
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          current = Math.round(eased * target);
          el.textContent = current;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));

  /* ---------- SMOOTH ANCHOR SCROLL (offset for fixed navbar) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- CONTACT COPY TOAST (for email quick copy on long press not needed; simple toast helper) ---------- */
  const toast = document.getElementById('toast');
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', () => {
      const label = card.querySelector('h3').textContent;
      showToast(`${translations[currentLang].toast_opening} ${label}...`);
    });
  });

});
