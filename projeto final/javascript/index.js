
(function () {
    const items = Array.from(document.querySelectorAll('.list .item'));
    const dots = Array.from(document.querySelectorAll('#dots li'));
    const numberEl = document.getElementById('slideNumber');
    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');
    let idx = 0;
    let auto;

    function show(index) {
        items.forEach((it, i) => {
            it.classList.remove('active');
            dots[i].classList.remove('active');
            dots[i].setAttribute('aria-selected', 'false');
            it.style.setProperty('--calculation', 1);
        });
        const active = items[index];
        if (!active) return;
        active.classList.add('active');
        dots[index].classList.add('active');
        dots[index].setAttribute('aria-selected', 'true');
        if (numberEl) numberEl.textContent = String(index + 1).padStart(2, '0');
    }

    function nextSlide() {
        idx = (idx + 1) % items.length;
        show(idx);
    }
    function prevSlide() {
        idx = (idx - 1 + items.length) % items.length;
        show(idx);
    }

    next.addEventListener('click', () => {
        nextSlide();
        resetAuto();
    });
    prev.addEventListener('click', () => {
        prevSlide();
        resetAuto();
    });

    dots.forEach(d => {
        d.addEventListener('click', () => {
            idx = Number(d.dataset.index || 0);
            show(idx);
            resetAuto();
        });
        d.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); idx = Number(d.dataset.index || 0); show(idx); resetAuto(); }
        });
    });

    function startAuto() {
        auto = setInterval(nextSlide, 6000);
    }
    function resetAuto() {
        clearInterval(auto);
        startAuto();
    }

    show(idx);
    startAuto(0);

    const hero = document.querySelector('section');
    hero.addEventListener('mouseenter', () => clearInterval(auto));
    hero.addEventListener('mouseleave', () => startAuto());
})();
