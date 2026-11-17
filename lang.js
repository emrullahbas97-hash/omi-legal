(function () {
  var saved = null;
  try { saved = localStorage.getItem('omi-lang'); } catch (e) {}
  var lang = saved || ((navigator.language || 'en').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en');
  function apply(code) {
    document.documentElement.lang = code;
    document.querySelectorAll('[data-lang]').forEach(function (el) { el.hidden = el.getAttribute('data-lang') !== code; });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-set') === code ? 'true' : 'false'); });
    try { localStorage.setItem('omi-lang', code); } catch (e) {}
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { apply(b.getAttribute('data-set')); }); });
    apply(lang);
  });
})();
