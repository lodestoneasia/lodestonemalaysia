/* ============================================================
   Motion Enhancement Layer — GSAP + ScrollTrigger + Lenis
   Targets existing IDs/classes in lodestone-mock-site-v3.html.
   No HTML changes required.
   ============================================================ */
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var MOBILE = window.matchMedia('(max-width: 1023px)').matches;

  function loadScript(src){
    return new Promise(function(res, rej){
      var s = document.createElement('script');
      s.src = src; s.async = false;
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  async function boot(){
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');
      try { await loadScript('https://cdn.jsdelivr.net/npm/lenis@1.0.42/dist/lenis.min.js'); } catch(e){}
    } catch(e){ console.warn('GSAP failed to load', e); return; }
    init();
  }

  function init(){
    gsap.registerPlugin(ScrollTrigger);
    var EASE_HERO  = 'expo.out';
    var EASE_MICRO = 'power3.out';

    /* ---------- Lenis smooth-scroll spine ---------- */
    if (window.Lenis){
      var lenis = new Lenis({
        duration: 1.1,
        easing: function(t){ return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true, smoothTouch: false
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function(time){ lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);

      document.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
          var id = a.getAttribute('href');
          if (id.length <= 1) return;
          var tg = document.querySelector(id);
          if (tg){ e.preventDefault(); lenis.scrollTo(tg, {offset: -20}); }
        });
      });
      var floatCTA = document.getElementById('floatCTA');
      if (floatCTA){
        floatCTA.onclick = function(e){
          e.preventDefault();
          var c = document.getElementById('contact');
          if (c) lenis.scrollTo(c, {offset: -20});
        };
      }
    }

    /* ---------- Headline clip reveals ---------- */
    document.querySelectorAll(
      '.sec-head h2, .about h2, .evo-card-text h2, .cta-banner h2, .contact h2, .finder-side h2'
    ).forEach(function(h){
      gsap.set(h, { clipPath: 'inset(0 0 100% 0)', y: 14 });
      gsap.to(h, {
        scrollTrigger: { trigger: h, start: 'top 88%', once: true },
        clipPath: 'inset(0 0 0% 0)', y: 0,
        duration: 1.1, ease: EASE_HERO
      });
    });

    /* ---------- Eyebrow slides ---------- */
    document.querySelectorAll('.sec-eyebrow').forEach(function(el){
      gsap.set(el, { opacity: 0, x: -14 });
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        opacity: 1, x: 0, duration: 0.85, ease: EASE_HERO
      });
    });

    /* ---------- Hero scroll-out ---------- */
    if (!MOBILE){
      var heroST = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 };
      gsap.to('.hero-copy',      { scrollTrigger: heroST, y: -30, ease: 'none' });
      gsap.to('.strengths-card', { scrollTrigger: heroST, y: 40, scale: 0.94, ease: 'none' });
    }

    /* ---------- Evo virtues cascade + ambient kanji bob ---------- */
    if (document.querySelector('.evo-feature')){
      gsap.set('.virtue-mini', { opacity: 0, y: 22, scale: 0.86 });
      ScrollTrigger.create({
        trigger: '.evo-feature', start: 'top 70%', once: true,
        onEnter: function(){
          gsap.to('.virtue-mini', {
            opacity: 1, y: 0, scale: 1,
            duration: 1.0, ease: EASE_HERO, stagger: 0.11
          });
        }
      });
      gsap.utils.toArray('.virtue-mini-kanji').forEach(function(k, i){
        gsap.to(k, {
          y: '+=4', duration: 2.4 + i * 0.15,
          ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.2
        });
      });
    }

    /* ---------- Bento radial cascade ---------- */
    if (document.querySelector('.bento')){
      gsap.set('.bento-item', { opacity: 0, y: 22 });
      gsap.to('.bento-item', {
        scrollTrigger: { trigger: '.bento', start: 'top 82%', once: true },
        opacity: 1, y: 0,
        duration: 1.0, ease: EASE_HERO,
        stagger: { amount: 0.5, from: 'center', grid: 'auto' }
      });
    }

    /* ---------- Process steps connecting line (scrubbed) ---------- */
    var stepsEl = document.querySelector('#process .steps');
    if (stepsEl){
      gsap.to(stepsEl, {
        scrollTrigger: { trigger: stepsEl, start: 'top 78%', end: 'bottom 60%', scrub: 0.4 },
        '--line-scale': 1, ease: 'none'
      });
    }

    /* ---------- Specialist avatar micro-interaction ---------- */
    document.querySelectorAll('.specialist').forEach(function(card){
      var av = card.querySelector('.specialist-avatar');
      if (!av) return;
      card.addEventListener('mouseenter', function(){
        gsap.to(av, { rotation: -4, scale: 1.08, duration: 0.5, ease: 'back.out(2)' });
      });
      card.addEventListener('mouseleave', function(){
        gsap.to(av, { rotation: 0, scale: 1, duration: 0.6, ease: EASE_MICRO });
      });
    });

    /* ---------- Testimonial quote-mark parallax ---------- */
    document.querySelectorAll('.t-slide .quote-mark').forEach(function(qm){
      gsap.to(qm, {
        scrollTrigger: {
          trigger: qm.closest('.testimonial'),
          start: 'top bottom', end: 'bottom top', scrub: 0.6
        },
        y: -45, ease: 'none'
      });
    });

    /* ---------- Magnetic buttons ---------- */
    if (!MOBILE){
      document.querySelectorAll('.btn-primary, .nav-cta, .submit-btn, .evo-btn').forEach(function(btn){
        btn.classList.add('magnet');
        var xTo = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        var yTo = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        btn.addEventListener('mousemove', function(e){
          var r = btn.getBoundingClientRect();
          var dx = e.clientX - (r.left + r.width / 2);
          var dy = e.clientY - (r.top + r.height / 2);
          xTo(dx * 0.25); yTo(dy * 0.25);
        });
        btn.addEventListener('mouseleave', function(){ xTo(0); yTo(0); });
      });
    }

    /* ---------- 3D tilt (replaces existing) ---------- */
    if (!MOBILE){
      // Detach existing tilt by cloning each [data-tilt] node
      document.querySelectorAll('[data-tilt]').forEach(function(card){
        var clone = card.cloneNode(true);
        card.parentNode.replaceChild(clone, card);
        // Existing IntersectionObserver was watching the original; mark clone visible
        if (clone.classList.contains('reveal')) clone.classList.add('in');
      });
      document.querySelectorAll('[data-tilt]').forEach(function(card){
        gsap.set(card, { transformPerspective: 1000, transformStyle: 'preserve-3d' });
        var rxTo = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: EASE_MICRO });
        var ryTo = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: EASE_MICRO });
        var yTo  = gsap.quickTo(card, 'y',         { duration: 0.6, ease: EASE_MICRO });
        card.addEventListener('mousemove', function(e){
          var r = card.getBoundingClientRect();
          var mx = (e.clientX - r.left) / r.width;
          var my = (e.clientY - r.top) / r.height;
          rxTo((my - 0.5) * -10);
          ryTo((mx - 0.5) *  10);
          yTo(-6);
          card.style.setProperty('--mx', (mx * 100) + '%');
          card.style.setProperty('--my', (my * 100) + '%');
        });
        card.addEventListener('mouseleave', function(){ rxTo(0); ryTo(0); yTo(0); });
      });
    }

    /* ---------- FAQ icon pop on toggle (panel stays CSS-driven) ---------- */
    document.querySelectorAll('.faq-item').forEach(function(item){
      var btn = item.querySelector('.faq-q');
      var icon = item.querySelector('.faq-icon');
      if (!btn || !icon) return;
      btn.addEventListener('click', function(){
        gsap.fromTo(icon, { scale: 0.6 }, { scale: 1, duration: 0.5, ease: 'back.out(2)' });
      });
    });

    /* ---------- Form fields stagger ---------- */
    var form = document.getElementById('contactForm');
    if (form){
      var fields = form.querySelectorAll('.field, .submit-btn, .form-note');
      gsap.set(fields, { opacity: 0, y: 16 });
      gsap.to(fields, {
        scrollTrigger: { trigger: form, start: 'top 80%', once: true },
        opacity: 1, y: 0, duration: 0.9, ease: EASE_HERO, stagger: 0.07
      });
    }

    /* ---------- Footer columns ---------- */
    var fGrid = document.querySelector('.footer-grid');
    if (fGrid){
      gsap.set(fGrid.children, { opacity: 0, y: 16 });
      gsap.to(fGrid.children, {
        scrollTrigger: { trigger: fGrid, start: 'top 90%', once: true },
        opacity: 1, y: 0, duration: 0.9, ease: EASE_HERO, stagger: 0.06
      });
    }

    ScrollTrigger.refresh();
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
