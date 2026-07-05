/* 培兒蒂 shared components — navbar & footer
   To update navbar or footer: edit this file (and keep components/navbar.html
   + components/footer.html in sync as human-readable reference copies).
   Works with both file:// and HTTP server.

   Pages nested below the site root (e.g. articles/20260703/20260703.html)
   must set window.PEI_BASE to a relative prefix ('../../') BEFORE this
   script loads, so the logo image and nav links still resolve correctly. */
(function () {
  var base = window.PEI_BASE || '';

  var nav = document.getElementById('site-navbar');
  if (nav) nav.outerHTML = `<nav class="navbar navbar-expand-md fixed-top" style="background:rgba(250,249,246,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 1px 8px rgba(0,0,0,.06);">
  <div class="container" style="max-width:1200px;">
    <a class="navbar-brand d-flex align-items-center gap-2 fw-bold text-pei" href="${base}index.html">
      <img src="${base}assets/images/logo.png" alt="培兒蒂 Logo" style="height:60px;width:auto;">
      <span style="margin-left:5px;">培兒蒂</span>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="切換導覽列">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMain">
      <ul class="navbar-nav ms-auto align-items-md-center gap-md-1">
        <li class="nav-item"><a class="nav-link" href="${base}index.html">首頁</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}professional.html">專業資歷</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}service.html">服務項目</a></li>
        <li class="nav-item"><a class="nav-link" href="${base}article.html">育兒文章</a></li>
      </ul>
      <div class="ms-md-3 mt-2 mt-md-0">
        <a href="${base}contact.html" class="btn btn-pei">立即預約</a>
      </div>
    </div>
  </div>
</nav>`;

  var foot = document.getElementById('site-footer');
  if (foot) foot.outerHTML = `<footer class="pei-footer">
  <div class="container py-5 text-center" style="max-width:1200px;">
    <div class="d-flex align-items-center justify-content-center gap-2 mb-4">
      <img src="${base}assets/images/logo.png" alt="培兒蒂 Logo" style="height:32px;width:auto;">
      <div class="pei-footer-brand">培兒蒂親子教育</div>
    </div>
    <div class="d-flex flex-wrap justify-content-center gap-4 mb-5">
      <a href="#"                 class="pei-footer-link">隱私政策</a>
      <a href="#"                 class="pei-footer-link">服務條款</a>
      <a href="#"                 class="pei-footer-link">常問問題</a>
      <a href="#"                 class="pei-footer-link">合作洽談</a>
    </div>
    <div class="d-flex gap-3 justify-content-center mb-5">
      <a href="https://www.facebook.com/profile.php?id=100095126599331" class="pei-footer-social-btn" target="_blank"><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/parentingissimple/" class="pei-footer-social-btn" target="_blank"><i class="bi bi-instagram"></i></a>
    </div>
    <p style="font-size:.875rem;color:#424844;opacity:.6;margin:0;">
      © 2024 培兒蒂 Occupational Therapy. All rights reserved.
    </p>
  </div>
</footer>
<button id="backToTop" aria-label="回頂部">
  <i class="bi bi-chevron-up"></i>
</button>`;
})();
