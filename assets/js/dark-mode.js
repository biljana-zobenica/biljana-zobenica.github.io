(function () {
  'use strict';

  var STORAGE_KEY = 'biljana-theme';
  var root = document.documentElement;

  function setTheme(theme) {
    var dark = theme === 'dark';
    root.classList.toggle('dark-mode', dark);

    var button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute(
        'aria-label',
        dark ? 'Switch to light mode' : 'Switch to dark mode'
      );
      button.setAttribute(
        'title',
        dark ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  function getInitialTheme() {
    try {
      var savedTheme = localStorage.getItem(STORAGE_KEY);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (e) {}

    try {
      localStorage.setItem(STORAGE_KEY, 'light');
    } catch (e) {}

    return 'light';
  }

  var initialTheme = getInitialTheme();
  root.classList.toggle('dark-mode', initialTheme === 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');
    if (!button) return;

    setTheme(initialTheme);

    button.addEventListener('click', function () {
      var nextTheme = root.classList.contains('dark-mode') ? 'light' : 'dark';
      setTheme(nextTheme);

      try {
        localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch (e) {}
    });
  });
})();
