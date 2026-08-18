/* ============================================================
   淼淼 · 作品集 —— 水母吉祥物（升级版）
   特性：
   1. 饱满圆润伞体 + 体积感触手（渐变 + 锥形摆动）
   2. 呼吸式缩放 + 轻柔漂浮 + 触手摆动（多周期叠加，自然灵动）
   3. 牵引式跟随鼠标：与鼠标保持固定距离（leash），跟随而非贴合
   4. 注视：眼珠与头部朝向跟随鼠标方向与位置
   纯 SVG + requestAnimationFrame，平滑缓动、帧率无关。
   ============================================================ */
(function () {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 饱满圆润的伞体轮廓（顶部圆弧 + 底部扇贝状伞缘）
  const BELL =
    'M 38,120 ' +
    'C 26,58 60,24 110,24 ' +
    'C 160,24 194,58 182,120 ' +
    'C 176,131 167,131 160,121 ' +
    'C 153,131 144,131 137,121 ' +
    'C 130,131 121,131 114,121 ' +
    'C 107,131 98,131 91,121 ' +
    'C 84,131 75,131 68,121 ' +
    'C 61,131 52,131 45,121 ' +
    'C 41,127 39,125 38,120 Z';

  // 外侧细长触手（8 条，错落相位/长度/摆幅）
  const outer = [
    { x: 56,  len: 188, topW: 5.0, amp: 13, freq: 2.4, phase: 0.0 },
    { x: 72,  len: 202, topW: 5.0, amp: 15, freq: 2.6, phase: 0.9 },
    { x: 88,  len: 176, topW: 4.5, amp: 12, freq: 2.8, phase: 1.8 },
    { x: 104, len: 168, topW: 4.0, amp: 11, freq: 3.0, phase: 2.6 },
    { x: 120, len: 176, topW: 4.5, amp: 12, freq: 2.8, phase: 3.4 },
    { x: 136, len: 202, topW: 5.0, amp: 15, freq: 2.6, phase: 4.2 },
    { x: 152, len: 188, topW: 5.0, amp: 13, freq: 2.4, phase: 5.0 },
    { x: 164, len: 158, topW: 4.0, amp: 10, freq: 3.0, phase: 5.8 }
  ];
  // 中央口腕（3 条，更粗更短更卷，增加饱满度）
  const oral = [
    { x: 96,  len: 128, topW: 9, amp: 16, freq: 3.6, phase: 1.2 },
    { x: 110, len: 142, topW: 10, amp: 18, freq: 3.8, phase: 2.4 },
    { x: 124, len: 128, topW: 9, amp: 16, freq: 3.6, phase: 3.6 }
  ];

  // 生成一条带体积感的锥形摆动触手（ribbon：左右边缘+尖端收拢）
  function tentaclePath(b, time) {
    const segs = 14;
    const pts = [];
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const y = 120 + u * b.len;
      const sway = Math.sin(u * b.freq + time * 1.7 + b.phase) * b.amp * u;
      const x = b.x + sway;
      const w = b.topW * (1 - u);
      pts.push([x, y, w]);
    }
    let d = 'M ' + (pts[0][0] - pts[0][2]).toFixed(2) + ' ' + pts[0][1].toFixed(2);
    for (let i = 1; i < pts.length; i++) d += ' L ' + (pts[i][0] - pts[i][2]).toFixed(2) + ' ' + pts[i][1].toFixed(2);
    for (let i = pts.length - 1; i >= 0; i--) d += ' L ' + (pts[i][0] + pts[i][2]).toFixed(2) + ' ' + pts[i][1].toFixed(2);
    return d + ' Z';
  }

  function init(target, opts) {
    opts = opts || {};
    const LEASH = opts.leash || 130;
    const container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) return;
    container.classList.add('jelly-layer');

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 220 340');
    svg.setAttribute('class', 'jelly-svg');
    svg.innerHTML =
      '<defs>' +
        '<radialGradient id="bellGrad" cx="50%" cy="36%" r="64%">' +
          '<stop offset="0%" stop-color="#FFE6C8"/>' +
          '<stop offset="46%" stop-color="#FFB98A"/>' +
          '<stop offset="100%" stop-color="#F07C58"/>' +
        '</radialGradient>' +
        '<linearGradient id="tentGrad" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0%" stop-color="#FFC99E"/>' +
          '<stop offset="55%" stop-color="#FF9E84"/>' +
          '<stop offset="100%" stop-color="#FF9E84" stop-opacity="0.22"/>' +
        '</linearGradient>' +
        '<radialGradient id="sheen" cx="42%" cy="28%" r="42%">' +
          '<stop offset="0%" stop-color="#ffffff" stop-opacity="0.6"/>' +
          '<stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>' +
        '</radialGradient>' +
      '</defs>' +
      '<g id="jellyFloat">' +
        '<g id="jellyTent"></g>' +
        '<g id="jellyBell">' +
          '<path d="' + BELL + '" fill="url(#bellGrad)" stroke="#E07A52" stroke-width="1.5" stroke-opacity="0.4"/>' +
          '<ellipse cx="90" cy="58" rx="36" ry="22" fill="url(#sheen)"/>' +
          '<g class="jeye" transform="translate(84,98)">' +
            '<circle r="14" fill="#FFFDF8" stroke="#E59A78" stroke-width="1.2"/>' +
            '<g class="jpup" id="jpupL"><circle r="6.2" fill="#2A1B14"/><circle cx="-2" cy="-2" r="2" fill="#ffffff" opacity="0.85"/></g>' +
          '</g>' +
          '<g class="jeye" transform="translate(136,98)">' +
            '<circle r="14" fill="#FFFDF8" stroke="#E59A78" stroke-width="1.2"/>' +
            '<g class="jpup" id="jpupR"><circle r="6.2" fill="#2A1B14"/><circle cx="-2" cy="-2" r="2" fill="#ffffff" opacity="0.85"/></g>' +
          '</g>' +
          '<ellipse cx="60" cy="112" rx="11" ry="6" fill="#F0815F" opacity="0.28"/>' +
          '<ellipse cx="160" cy="112" rx="11" ry="6" fill="#F0815F" opacity="0.28"/>' +
          '<path d="M100 116 Q110 124 120 116" stroke="#B5705A" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
        '</g>' +
      '</g>';
    container.appendChild(svg);

    const tentG = svg.querySelector('#jellyTent');
    const all = outer.concat(oral);
    all.forEach(function (b) {
      const p = document.createElementNS(NS, 'path');
      p.setAttribute('class', 'jtent');
      p.setAttribute('fill', 'url(#tentGrad)');
      p.setAttribute('stroke', 'rgba(224,122,82,0.18)');
      p.setAttribute('stroke-width', '0.6');
      tentG.appendChild(p);
      b.el = p;
    });

    // 减弱动效偏好：静态渲染一帧即退出
    if (reduce) {
      all.forEach(function (b) { b.el.setAttribute('d', tentaclePath(b, 0)); });
      return;
    }

    const floatG = svg.querySelector('#jellyFloat');
    const bellG = svg.querySelector('#jellyBell');
    const pupL = svg.querySelector('#jpupL');
    const pupR = svg.querySelector('#jpupR');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight * 0.42;
    let jx = mx - LEASH;   // 初始即保持固定距离（在鼠标左侧）
    let jy = my;
    let lastDirX = -1, lastDirY = 0;
    let prev = performance.now();

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (finePointer) {
      window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
    } else {
      // 触屏设备：原地漂浮，无鼠标跟随
      mx = jx; my = jy;
    }

    function frame(now) {
      const dt = Math.min(0.05, (now - prev) / 1000) || 0.016;
      prev = now;
      const time = now / 1000;

      // —— 牵引式跟随：与鼠标保持固定距离 ——
      let dx = jx - mx, dy = jy - my;
      let d = Math.hypot(dx, dy);
      if (d < 0.001) { dx = lastDirX; dy = lastDirY; d = Math.hypot(dx, dy) || 1; }
      else { lastDirX = dx / d; lastDirY = dy / d; }
      const desX = mx + (dx / d) * LEASH;
      const desY = my + (dy / d) * LEASH;
      const k = 1 - Math.exp(-dt * 4.5);   // 帧率无关缓动
      jx += (desX - jx) * k;
      jy += (desY - jy) * k;

      // —— 漂浮 + 头部朝向（注视方向） ——
      const fy = Math.sin(time * 0.9) * 9;
      const fx = Math.sin(time * 0.6) * 5;
      const side = Math.max(-1, Math.min(1, (mx - jx) / LEASH));
      const tilt = side * 8;               // 鼠标在左/右，头部随之微倾
      const breath = 1 + Math.sin(time * 1.1) * 0.045;  // 呼吸式缩放

      container.style.transform = 'translate(' + (jx - 110).toFixed(2) + 'px,' + (jy - 150).toFixed(2) + 'px)';
      floatG.setAttribute('transform', 'translate(' + fx.toFixed(2) + ',' + fy.toFixed(2) + ') rotate(' + tilt.toFixed(2) + ' 110 175)');
      bellG.setAttribute('transform', 'translate(110,100) scale(' + breath.toFixed(4) + ') translate(-110,-100)');

      // —— 触手摆动 ——
      all.forEach(function (b) { b.el.setAttribute('d', tentaclePath(b, time)); });

      // —— 注视：双眼朝鼠标方向 ——
      const ang = Math.atan2(my - jy, mx - jx);
      const off = 4.6;
      const ox = (Math.cos(ang) * off).toFixed(2);
      const oy = (Math.sin(ang) * off).toFixed(2);
      pupL.setAttribute('transform', 'translate(' + ox + ' ' + oy + ')');
      pupR.setAttribute('transform', 'translate(' + ox + ' ' + oy + ')');

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  window.Jellyfish = { init: init };
})();
