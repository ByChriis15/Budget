if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/sw.js')
    .then(reg => console.log('Service Worker registrado'))
    .catch(err => console.error('Error al registrar SW:', err));
}
