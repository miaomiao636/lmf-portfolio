// ============================================================
//  淼淼 · 作品集 —— 交互脚本（版本 C：暖橙日落）
//  渐变光斑随动、眼珠跟随鼠标、滚动揭示、进度条
// ============================================================

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

// ===== 渐变光斑跟随光标（缓动，营造暖橙日落流动感） =====
const blob1 = document.getElementById('blob1');
const blob2 = document.getElementById('blob2');
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let blob1X = 0, blob1Y = 0, blob2X = 0, blob2Y = 0;

if (finePointer && !prefersReduced) {
    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function animateBlobs() {
        // 光斑 1 较快、光斑 2 较慢，形成层次
        blob1X += (targetX * 0.04 - blob1X) * 0.06;
        blob1Y += (targetY * 0.04 - blob1Y) * 0.06;
        blob2X += (targetX * -0.03 - blob2X) * 0.04;
        blob2Y += (targetY * -0.03 - blob2Y) * 0.04;
        blob1.style.transform = `translate(${blob1X}px, ${blob1Y}px)`;
        blob2.style.transform = `translate(${blob2X}px, ${blob2Y}px)`;
        requestAnimationFrame(animateBlobs);
    }
    animateBlobs();
}

// ===== 吉祥物眼珠跟随鼠标 =====
const mascot = document.getElementById('mascotArea');
const pupilL = document.getElementById('pupilL');
const pupilR = document.getElementById('pupilR');

function movePupils(clientX, clientY) {
    const rect = mascot.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height * 0.42;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxMove = 7;
    const move = Math.min(dist / 24, maxMove);
    const angle = Math.atan2(dy, dx);
    const px = Math.cos(angle) * move;
    const py = Math.sin(angle) * move;
    const t = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
    pupilL.style.transform = t;
    pupilR.style.transform = t;
}

if (finePointer) {
    mascot.addEventListener('mousemove', (e) => movePupils(e.clientX, e.clientY));
    mascot.addEventListener('mouseleave', () => {
        pupilL.style.transform = 'translate(-50%, -50%)';
        pupilR.style.transform = 'translate(-50%, -50%)';
    });
    // 鼠标在整页移动时，眼珠也轻微跟随（增强"被盯着"的感觉）
    window.addEventListener('mousemove', (e) => {
        const rect = mascot.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height * 0.42;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 260) return; // 太远就不勉强跟随
        movePupils(e.clientX, e.clientY);
    });
}

// ===== 导航栏滚动态 + 顶部进度条 =====
const navbar = document.getElementById('navbar');
const progress = document.getElementById('scrollProgress');

function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== 滚动揭示（IntersectionObserver，带交错） =====
const revealTargets = document.querySelectorAll('.project-card, .section-head, .contact-inner');
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
        const idx = Math.max(0, siblings.indexOf(el));
        setTimeout(() => el.classList.add('visible'), Math.min(idx, 4) * 90);
        io.unobserve(el);
    });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

revealTargets.forEach(el => io.observe(el));

// ===== 平滑滚动（导航锚点） =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
        }
    });
});
