// Copy-to-clipboard for BibTeX blocks
document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = document.getElementById(btn.getAttribute('data-copy-target'));
    var label = btn.querySelector('span');
    if (!el) return;
    navigator.clipboard.writeText(el.textContent).then(function () {
      label.textContent = 'Copied';
      setTimeout(function () { label.textContent = 'Copy'; }, 1600);
    }).catch(function () {
      label.textContent = 'Press Ctrl+C';
    });
  });
});
