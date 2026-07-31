
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));



const lightbox = document.getElementById('lightbox');

function closeLightbox() {
  lightbox.innerHTML = '';
  lightbox.classList.remove('open');
}

document.querySelectorAll('.media-grid img, .media-grid video').forEach(el => {
  el.addEventListener('click', () => {
    const clone = el.cloneNode(true);
    if (clone.tagName === 'VIDEO') {
      clone.controls = true;
      clone.autoplay = true;
      clone.muted = false;
    }
    lightbox.innerHTML = '';
    lightbox.appendChild(clone);
    lightbox.classList.add('open');
  });
});

lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
