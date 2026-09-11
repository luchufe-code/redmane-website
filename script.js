// 红马文化官网 · 最小脚本：移动端导航 + 页脚年份
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.setAttribute('data-open', String(!open));
      var label = toggle.querySelector('.sr-only');
      if (label) label.textContent = open ? '展开导航' : '收起导航';
    });

    // 点击导航项后收起菜单
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
        var label = toggle.querySelector('.sr-only');
        if (label) label.textContent = '展开导航';
      }
    });

    // 视口变宽后重置状态，避免残留
    window.addEventListener('resize', function () {
      if (window.innerWidth > 640 && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
