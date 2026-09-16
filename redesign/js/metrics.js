function initMetrics() {
  const counter = document.getElementById('uptime-counter');
  if (!counter) return;

  let value = 0;
  const target = 7;

  const interval = setInterval(() => {
    if (value < target) {
      value += 1;
      counter.innerHTML =
        value + '<span class="text-[24px] text-tertiary-fixed">+</span>';
    } else {
      clearInterval(interval);
    }
  }, 120);
}
