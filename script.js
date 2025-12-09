// NAV: hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// CANVAS: rotating stylized "A" with logo colors (blue + green + yellow + red)
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
let angle = 0;
function drawLogo() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(angle);

  // Draw three overlapping colored triangular ribbons to hint the logo feel
  // blue segment
  ctx.beginPath();
  ctx.moveTo(-42,28);
  ctx.lineTo(0,-46);
  ctx.lineTo(42,28);
  ctx.closePath();
  ctx.fillStyle = '#1B3C8E'; // primary blue
  ctx.fill();

  // green overlay (slightly rotated)
  ctx.save();
  ctx.rotate(0.25);
  ctx.beginPath();
  ctx.moveTo(-18,10);
  ctx.lineTo(42,-36);
  ctx.lineTo(62,10);
  ctx.closePath();
  ctx.fillStyle = '#3CB371';
  ctx.fill();
  ctx.restore();

  // yellow small accent
  ctx.save();
  ctx.rotate(-0.18);
  ctx.beginPath();
  ctx.moveTo(10,10);
  ctx.lineTo(48,44);
  ctx.lineTo(70,10);
  ctx.closePath();
  ctx.fillStyle = '#F4C20D';
  ctx.fill();
  ctx.restore();

  // white crossbar to make it letter-like
  ctx.fillStyle = '#fff';
  ctx.fillRect(-18,2,36,10);

  ctx.restore();
  angle += 0.012;
  requestAnimationFrame(drawLogo);
}
drawLogo();

// SCROLL REVEAL (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// SHOW FULL TEAM
const showFullTeamBtn = document.getElementById('showFullTeam');
const fullTeamSection = document.getElementById('fullTeam');

showFullTeamBtn.addEventListener('click', (e) => {
  e.currentTarget.disabled = true;
  fullTeamSection.classList.remove('hidden');
  setTimeout(()=> {
    fullTeamSection.scrollIntoView({behavior:'smooth', block:'start'});
    fullTeamSection.classList.add('visible');
  }, 110);
});

// CONTACT FORM (client-side feedback)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]') || contactForm.querySelector('.btn-primary');
    const original = btn.innerText;
    btn.innerText = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerText = 'Sent';
      btn.disabled = false;
      contactForm.reset();
      setTimeout(()=> btn.innerText = original, 1600);
    }, 900);
  });
}
