const toggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});
