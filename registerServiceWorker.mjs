const RegisterServiceWorker = async () => {
  console.log(`Registering Service Worker...`);
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
  }
}

const initApplication = () => {
  RegisterServiceWorker();
  document.removeEventListener('onreadystatechange', initApplication);
}

if (document.readyState === 'loading') {
  document.addEventListener('onreadystatechange', initApplication);
} else {
  RegisterServiceWorker();
}