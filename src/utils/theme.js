export function setTheme() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const isNight = currentHour >= 22 && currentHour <= 6;

  if (isNight || localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
