function goToGallery() {
  document.body.style.opacity = 0;
  setTimeout(() => window.location.href = "gallery.html", 1000);
}

function goToWish() {
  document.body.style.opacity = 0;
  setTimeout(() => window.location.href = "wish.html", 1000);
}

// Hiệu ứng trái tim bay
const heartsContainer = document.querySelector('.floating-hearts');
if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}
