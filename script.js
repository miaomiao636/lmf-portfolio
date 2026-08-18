// 创意艺术风 - 互动效果

document.addEventListener('DOMContentLoaded', () => {
    // 鼠标形状跟随
    const cursorShape = document.querySelector('.cursor-shape');
    const cursorDot = document.querySelector('.cursor-dot');
    let mouseX = 0, mouseY = 0;
    let shapeX = 0, shapeY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // 形状跟随（慢）
        shapeX += (mouseX - shapeX) * 0.08;
        shapeY += (mouseY - shapeY) * 0.08;
        cursorShape.style.left = shapeX + 'px';
        cursorShape.style.top = shapeY + 'px';

        // 点跟随（快）
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover效果 - 形状变化
    const hoverElements = document.querySelectorAll('a, button, .work-card, .skill-bubble, .social-btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorShape.classList.add('squircle');
        });
        el.addEventListener('mouseleave', () => {
            cursorShape.classList.remove('squircle');
        });
    });

    // 滚动动画 - Intersection Observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // 数字计数动画
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObserver.observe(el));

    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 60;
        const duration = 1500;
        const stepTime = duration / 60;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, stepTime);
    }

    // 卡片视差效果
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
                rotate(-1deg)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) rotate(0)';
        });
    });

    // 技能标签弹性动画
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    skillBubbles.forEach((bubble, index) => {
        bubble.addEventListener('mouseenter', () => {
            bubble.style.animationDelay = (index * 0.05) + 's';
        });
    });

    // 装饰元素视差
    const decos = document.querySelectorAll('.deco');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        decos.forEach((deco, index) => {
            const speed = (index + 1) * 0.1;
            deco.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(254, 249, 243, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.background = 'rgba(254, 249, 243, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });

    // Blob鼠标跟随
    const blobs = document.querySelectorAll('.blob');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const moveX = (x - 0.5) * speed;
            const moveY = (y - 0.5) * speed;
            blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // 页面加载动画
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
    }, 100);
});

// 初始样式
document.querySelector('.hero-content').style.cssText = `
    opacity: 0;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
`;
