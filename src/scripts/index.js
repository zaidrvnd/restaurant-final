import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

async function loadVendorCode() {
  await import('regenerator-runtime');
  await import('lazysizes');
  await import('lazysizes/plugins/parent-fit/ls.parent-fit');
}

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  // Memuat vendor code sebelum merender halaman
  await loadVendorCode();
  app.renderPage();
  swRegister();
});