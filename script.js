document.addEventListener('DOMContentLoaded', () => {
  const comparison = document.querySelector('[data-slider]');
  if (!comparison) return;
  const range = comparison.querySelector('.comparison-range');
  const before = comparison.querySelector('.comparison-before');
  const line = comparison.querySelector('.comparison-line');
  const update = (value) => { before.style.width = `${value}%`; line.style.left = `${value}%`; };
  range.addEventListener('input', (event) => update(event.target.value));
  update(range.value);
});
