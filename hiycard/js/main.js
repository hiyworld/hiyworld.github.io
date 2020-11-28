window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://hiyworld.github.io/hiycard/sw.js');
  }
}
