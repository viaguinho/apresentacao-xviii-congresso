/**
 * slide16-flow.js
 * Efeito de fluxo contínuo de partículas e pulsos neurais convergentes para o Slide 16.
 * Conecta: Memória de trabalho (y=64), Controle inibitório (y=170), Flexibilidade cognitiva (y=276)
 * Destino: Leitura, matemática, linguagem oral (x=600, y=170)
 */

(function () {
  function cubicBezier(t, p0, p1, p2, p3) {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;
    return {
      x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
      y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
    };
  }

  function initFlow() {
    const slide = document.querySelector('section[data-screen-label="16"]');
    const canvas = document.getElementById('slide16-flow-canvas');
    if (!slide || !canvas) return;

    if (canvas.__flowActive) return;
    canvas.__flowActive = true;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const BASE_W = 900;
    const BASE_H = 460;

    canvas.width = BASE_W * dpr;
    canvas.height = BASE_H * dpr;
    ctx.scale(dpr, dpr);

    // 3 Curvas principais correspondentes às trajetórias do SVG
    const basePaths = [
      // Memória de trabalho -> Leitura
      {
        id: 'memoria',
        p0: { x: 400, y: 64 },
        p1: { x: 500, y: 64 },
        p2: { x: 520, y: 170 },
        p3: { x: 600, y: 170 },
      },
      // Controle inibitório -> Leitura
      {
        id: 'controle',
        p0: { x: 400, y: 170 },
        p1: { x: 466.7, y: 170 },
        p2: { x: 533.3, y: 170 },
        p3: { x: 600, y: 170 },
      },
      // Flexibilidade cognitiva -> Leitura
      {
        id: 'flexibilidade',
        p0: { x: 400, y: 276 },
        p1: { x: 500, y: 276 },
        p2: { x: 520, y: 170 },
        p3: { x: 600, y: 170 },
      },
    ];

    // Gerar feixes de fluxo com múltiplas faixas orgânicas
    const streams = [];
    const NUM_STREAMS_PER_PATH = 12; // 36 feixes simultâneos no total

    basePaths.forEach((pathConfig, pathIdx) => {
      for (let s = 0; s < NUM_STREAMS_PER_PATH; s++) {
        const offsetRange = (s - NUM_STREAMS_PER_PATH / 2) * 1.2;
        streams.push({
          pathIdx,
          p0: { x: pathConfig.p0.x, y: pathConfig.p0.y + offsetRange * 0.8 },
          p1: { x: pathConfig.p1.x, y: pathConfig.p1.y + offsetRange * 0.8 },
          p2: { x: pathConfig.p2.x, y: pathConfig.p2.y + offsetRange * 0.2 },
          p3: { x: pathConfig.p3.x, y: pathConfig.p3.y + offsetRange * 0.2 },
          t: Math.random(),
          speed: 0.0032 + Math.random() * 0.0035,
          size: 1.6 + Math.random() * 1.6,
          baseAlpha: 0.55 + Math.random() * 0.4,
          trailLength: 4 + Math.floor(Math.random() * 3),
          color: s % 3 === 0 ? '#0071e3' : s % 3 === 1 ? '#0284c7' : '#2563eb',
        });
      }
    });

    let ripples = [];
    let bursts = [];
    let animationId = null;
    let isRunning = false;
    let lastRippleTime = 0;

    // Efeito de pulso de recepção na caixa de leitura/matemática/linguagem
    function triggerArrivalRipple(intensity = 1) {
      if (ripples.length > 8) return;
      ripples.push({
        x: 600,
        y: 170,
        radius: 1,
        maxRadius: 28 * intensity,
        alpha: 0.5 * intensity,
        speed: 0.85 * intensity,
      });
    }

    // Clique interativo para disparar pulso de energia
    canvas.style.pointerEvents = 'all';
    canvas.addEventListener('pointerdown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = BASE_W / rect.width;
      const scaleY = BASE_H / rect.height;
      const clickX = (e.clientX - rect.left) * scaleX;
      const clickY = (e.clientY - rect.top) * scaleY;

      bursts.push({
        x: clickX,
        y: clickY,
        radius: 2,
        life: 1,
      });

      // Acelera momentaneamente as partículas próximas
      streams.forEach((st) => {
        st.speed *= 1.8;
        setTimeout(() => {
          st.speed /= 1.8;
        }, 1200);
      });
    });

    function render(timestamp) {
      ctx.clearRect(0, 0, BASE_W, BASE_H);

      // 1. Atualizar e desenhar pulsos de impacto no ponto de convergência (600, 170)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += rip.speed;
        rip.alpha *= 0.94;

        if (rip.alpha < 0.02 || rip.radius > rip.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        // Arco voltado para a direita entrando no card
        ctx.arc(rip.x, rip.y, rip.radius, -Math.PI / 2.2, Math.PI / 2.2);
        ctx.strokeStyle = `rgba(0, 113, 227, ${rip.alpha.toFixed(3)})`;
        ctx.lineWidth = 2.2;
        ctx.stroke();

        // Ponto central de impacto luminoso
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 113, 227, ${Math.min(1, rip.alpha * 1.5)})`;
        ctx.fill();
        ctx.restore();
      }

      // 2. Ondas de choque por clique
      for (let b = bursts.length - 1; b >= 0; b--) {
        const burst = bursts[b];
        burst.radius += 6;
        burst.life -= 0.025;

        if (burst.life <= 0) {
          bursts.splice(b, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, burst.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 113, 227, ${(burst.life * 0.45).toFixed(3)})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.restore();
      }

      // 3. Renderizar cada fluxo de partículas com rastro elegante
      streams.forEach((stream) => {
        stream.t += stream.speed;

        // Ao atingir o final da curva
        if (stream.t >= 1) {
          stream.t = 0;
          if (timestamp - lastRippleTime > 140) {
            triggerArrivalRipple(0.85);
            lastRippleTime = timestamp;
          }
        }

        // Interação com explosões
        let posXBonus = 0;
        let posYBonus = 0;
        bursts.forEach((burst) => {
          const pt = cubicBezier(stream.t, stream.p0, stream.p1, stream.p2, stream.p3);
          const dx = pt.x - burst.x;
          const dy = pt.y - burst.y;
          const dist = Math.hypot(dx, dy);
          if (dist < burst.radius + 60 && dist > burst.radius - 60) {
            const force = (1 - Math.abs(dist - burst.radius) / 60) * burst.life;
            posXBonus += (dx / dist) * force * 14;
            posYBonus += (dy / dist) * force * 14;
          }
        });

        // Desenhar rastro (tail)
        const trailStep = 0.012;
        for (let tr = stream.trailLength; tr >= 1; tr--) {
          const trailT = stream.t - tr * trailStep;
          if (trailT <= 0 || trailT >= 1) continue;

          const tPos = cubicBezier(trailT, stream.p0, stream.p1, stream.p2, stream.p3);
          const trailAlpha = (stream.baseAlpha * (1 - tr / (stream.trailLength + 1)) * 0.45).toFixed(3);
          const trailSize = Math.max(0.8, stream.size * (1 - (tr / stream.trailLength) * 0.4));

          ctx.beginPath();
          ctx.arc(tPos.x + posXBonus * 0.5, tPos.y + posYBonus * 0.5, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 113, 227, ${trailAlpha})`;
          ctx.fill();
        }

        // Desenhar cabeça da partícula (luminous core)
        const pos = cubicBezier(stream.t, stream.p0, stream.p1, stream.p2, stream.p3);
        const finalX = pos.x + posXBonus;
        const finalY = pos.y + posYBonus;

        ctx.save();
        // Halo sutil
        ctx.beginPath();
        ctx.arc(finalX, finalY, stream.size * 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 113, 227, ${(stream.baseAlpha * 0.25).toFixed(3)})`;
        ctx.fill();

        // Núcleo nítido
        ctx.beginPath();
        ctx.arc(finalX, finalY, stream.size, 0, Math.PI * 2);
        ctx.fillStyle = stream.color;
        ctx.globalAlpha = stream.baseAlpha;
        ctx.fill();
        ctx.restore();
      });

      if (isRunning) {
        animationId = requestAnimationFrame(render);
      }
    }

    function startAnimation() {
      if (isRunning) return;
      isRunning = true;
      animationId = requestAnimationFrame(render);
    }

    function stopAnimation() {
      if (!isRunning) return;
      isRunning = false;
      if (animationId) cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, BASE_W, BASE_H);
    }

    function checkActive() {
      const motionOff = document.documentElement.getAttribute('data-motion') === 'off';
      const isActive = slide.hasAttribute('data-deck-active') && !motionOff;

      if (isActive) {
        startAnimation();
      } else {
        stopAnimation();
      }
    }

    // Observar o atributo data-deck-active no slide 16
    const observer = new MutationObserver(() => checkActive());
    observer.observe(slide, { attributes: true, attributeFilter: ['data-deck-active'] });

    // Observar também preferências de animação global
    const rootObserver = new MutationObserver(() => checkActive());
    rootObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] });

    // Checagem imediata
    checkActive();
  }

  window.initSlide16Flow = initFlow;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlow);
  } else {
    setTimeout(initFlow, 100);
  }
})();
