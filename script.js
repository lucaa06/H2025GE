document.addEventListener('DOMContentLoaded', function() {
    const parallaxSection = document.getElementById('home');

    // Funzione per l'effetto parallasse
    function updateParallax() {
        let scrollPosition = window.pageYOffset;
        if (parallaxSection) {
            parallaxSection.style.backgroundPositionY = -scrollPosition * 0.4 + 'px';
        }
    }

    // Aggiungi l'event listener per lo scroll
    window.addEventListener('scroll', updateParallax);

    // Funzione per l'animazione di entrata delle sezioni
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Aggiungi classe "active" ai link di navigazione
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section, .parallax-section');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Chiamata iniziale
});
document.addEventListener('DOMContentLoaded', function() {
    const parallaxSection = document.getElementById('home');

    // Funzione per l'effetto parallasse
    function updateParallax() {
        let scrollPosition = window.pageYOffset;
        if (parallaxSection) {
            parallaxSection.style.backgroundPositionY = -scrollPosition * 0.4 + 'px';
        }
    }

    window.addEventListener('scroll', updateParallax);
    updateParallax();

    // Animazione di ingresso degli elementi
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Smettiamo di osservare l'elemento una volta che è animato per non sprecare risorse
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // L'animazione parte quando il 20% dell'elemento è visibile
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Funzione per la navigazione attiva
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section, .parallax-section');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});
document.addEventListener('DOMContentLoaded', function() {
    const parallaxSection = document.getElementById('home');

    // Funzione per l'effetto parallasse
    function updateParallax() {
        let scrollPosition = window.pageYOffset;
        if (parallaxSection) {
            parallaxSection.style.backgroundPositionY = -scrollPosition * 0.4 + 'px';
        }
    }

    window.addEventListener('scroll', updateParallax);
    updateParallax();

    // Animazione di ingresso degli elementi con IntersectionObserver
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Animazione dei numeri nella sezione statistiche in sequenza
    const statsItems = document.querySelectorAll('.stat-item');

    statsItems.forEach((item, index) => {
        const statObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(item.querySelector('.stat-number'));
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        statObserver.observe(item);
    });

    // Funzione per animare un singolo numero
    function animateNumber(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 500; // Durata totale dell'animazione in ms
        const stepTime = 1; // Intervallo di tempo tra ogni incremento in ms
        const increment = target / (duration / stepTime);
        let count = 0;

        const counter = setInterval(() => {
            count += increment;
            if (count >= target) {
                element.innerText = target;
                clearInterval(counter);
            } else {
                element.innerText = Math.ceil(count);
            }
        }, stepTime);
    }

    // Funzione per la navigazione attiva
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section, .parallax-section, .stats-section');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});