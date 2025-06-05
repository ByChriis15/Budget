if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/service-worker.js')
    .then(reg => console.log('Service Worker registrado'))
    .catch(err => console.error('Error al registrar SW:', err));
}
