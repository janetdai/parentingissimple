(function () {
  'use strict';

  /* ============================================================
     Active Navigation Link
     ============================================================ */
  function setActiveNavLink() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar .nav-link[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* ============================================================
     Navbar Scroll Shadow
     ============================================================ */
  function initNavbarScroll() {
    var nav = document.querySelector('.navbar');
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     Back to Top Button
     ============================================================ */
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 320);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     Smooth Scroll for In-Page Anchors
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
        ) || 70;
        var top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ============================================================
     Contact Form — Client-side Validation + UX
     ============================================================ */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      var btn  = form.querySelector('[type="submit"]');
      var orig = btn.innerHTML;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>傳送中…';
      btn.disabled = true;

      setTimeout(function () {
        form.reset();
        form.classList.remove('was-validated');
        btn.innerHTML = orig;
        btn.disabled = false;

        var successEl = document.getElementById('formSuccess');
        if (successEl) {
          successEl.classList.remove('d-none');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(function () { successEl.classList.add('d-none'); }, 6000);
        }
      }, 1600);
    });
  }

  /* ============================================================
     Fade-in on Scroll (IntersectionObserver)
     ============================================================ */
  function initFadeIn() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-fade]').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-fade]').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================================
     Init — components.js already injected nav & footer before
     this script runs, so all DOM elements are ready.
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNavLink();
    initNavbarScroll();
    initBackToTop();
    initSmoothScroll();
    initContactForm();
    initFadeIn();
  });

})();
