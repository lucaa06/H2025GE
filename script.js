document.addEventListener('DOMContentLoaded', () => {

    // --- Cursore Personalizzato Ottimizzato (Versione 3.0) ---
    const cursor = document.querySelector('.custom-cursor');
    // MODIFICA QUI: Aggiunto '.supporter-item' alla lista
const interactiveElements = document.querySelectorAll('a, button, .info-card, .sponsor-logo, .benefit-card, .supporter-item');    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if (!isTouchDevice) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let speed = 0.5;

        function animateCursor() {
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }

        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        animateCursor();

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.backgroundColor = 'var(--primary-color)';
                cursor.style.opacity = '0.5';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.backgroundColor = 'transparent';
                cursor.style.opacity = '1';
            });
        });
    } else {
        cursor.style.display = 'none';
    }


    // --- Effetto "Luce" sulle Card ---
    const cards = document.querySelectorAll('.info-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // --- Animazione Numeri su Caricamento Pagina ---
    const animatedNumbers = document.querySelectorAll('.animated-number');
    animatedNumbers.forEach(element => {
        animateNumber(element, parseInt(element.getAttribute('data-target')));
    });

    // --- Animazione delle forme delle Card ---
    const shapes = ['shape-1', 'shape-2', 'shape-3', 'shape-4'];
    let currentShapeIndex = 0;

    // Applica una forma iniziale a ogni card per evitare il flash
    cards.forEach(card => {
        card.classList.add(shapes[Math.floor(Math.random() * shapes.length)]);
    });

    setInterval(() => {
        cards.forEach(card => {
            // Rimuovi tutte le classi di forma esistenti
            shapes.forEach(shape => card.classList.remove(shape));

            // Applica la nuova forma
            card.classList.add(shapes[currentShapeIndex]);
        });

        // Passa alla forma successiva
        currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
    }, 4000);


    // --- Animazioni allo Scroll per altre sezioni ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });

    // --- Animazione on scroll di tutti i div ---
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        div.classList.add('scroll-animate');
    });
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    allDivs.forEach(div => {
        scrollObserver.observe(div);
    });


    // --- Funzione per Animare i Numeri ---
    function animateNumber(element, target) {
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        const updateNumber = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.round(current);
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target;
            }
        };
        requestAnimationFrame(updateNumber);
    }


    // --- Sponsor random sparsi nella pagina ---
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const sponsorGrid = document.querySelector('.sponsor-grid');
    const sponsorArea = document.querySelector('.sponsor-area');
    if (sponsorGrid && sponsorArea) {
        const sponsorNodes = Array.from(sponsorGrid.children);
        shuffle(sponsorNodes);
        sponsorNodes.forEach(node => sponsorGrid.appendChild(node));
        // Sparpaglia gli sponsor con posizioni random SOLO all'interno della sponsor-area (desktop)
        function scatterSponsors() {
            if (window.innerWidth > 768) {
                const areaRect = sponsorArea.getBoundingClientRect();
                const minDist = 130; // distanza minima tra i centri
                const positions = [];
                sponsorNodes.forEach(node => {
                    let tries = 0;
                    let top, left, valid;
                    do {
                        top = Math.random() * (areaRect.height - 120);
                        left = Math.random() * (areaRect.width - 120);
                        valid = positions.every(pos => {
                            const dx = pos.left - left;
                            const dy = pos.top - top;
                            return Math.sqrt(dx*dx + dy*dy) > minDist;
                        });
                        tries++;
                    } while (!valid && tries < 50);
                    positions.push({top, left});
                    node.style.position = 'absolute';
                    node.style.top = top + 'px';
                    node.style.left = left + 'px';
                });
            } else {
                sponsorNodes.forEach(node => {
                    node.style.position = 'static';
                    node.style.top = '';
                    node.style.left = '';
                });
            }
        }
        scatterSponsors();
        window.addEventListener('resize', scatterSponsors);
    }
});
