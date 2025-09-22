/* --- Stile di base e Variabili --- */
:root {
    --bg-color: #0F0F1A;
    --primary-color: #FF206E;
    --secondary-color: #8C52FF;
    --accent-color: #55E6C8;
    --text-color: #EAEAEA;
    --glass-bg: rgba(22, 22, 38, 0.4);
    
    /* Variabili Fluid-Type per un controllo extra */
    --h1-fluid: clamp(3rem, 12vw, 9rem);
    --h2-fluid: clamp(2.5rem, 7vw, 4rem);
    --body-fluid: clamp(1rem, 3vw, 1.2rem);
    --link-fluid: clamp(1.2rem, 3vw, 1.8rem);
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: 16px; /* Base per rem */
}

body {
    font-family: var(--font-body);
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
    cursor: none;
    line-height: 1.6;

}

/* --- Stile per il grassetto con colore --- */
.bold-highlight {
    font-weight: 700;
    color: var(--primary-color);
    float: left;
}

/* --- Sfondo ottimizzato --- */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 var(--body-fluid);
    text-align: center;
    position: relative;
    
    background: linear-gradient(180deg, rgba(15, 15, 26, 0.95), rgba(15, 15, 26, 0.95)), url('data:image/jpeg;base64,...'); 
    background-size: cover;
    background-position: center;
}

/* --- Effetti Visivi di Sfondo (disabilitati sui mobile) --- */
.custom-cursor, .blob, .noise {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
}

.custom-cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-out;
}

.blob {
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
    border-radius: 50%;
    filter: blur(180px);
    opacity: 0.4;
    animation: moveBlob 25s infinite alternate ease-in-out;
    z-index: -1;
}

@keyframes moveBlob {
    0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
    100% { transform: translate(-50%, -50%) rotate(360deg) scale(1.2); }
}

.noise {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5e3lzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39tbW1+fn5oaGhxcXF2dnZZWVl0dHRsbGzi4uLV1dWe/qxAAAAA/ElEQVR4nO2WyQ7CIBAFlyUPVvcr//9t352p6ZTjX5dM/AAAZeDnPSTeOQkAgPZ2dD68L3iHj1j+P8Ua0K1pMh828H6GQEoEaFqp6Zl2E9e9k9p5sS10NB2iJz2HGBhAx4GqGupn/ANBwLsbaqTopS1cEt7o2A0DbYDBJ4X2g2Ec2LcgwO64b0EMt5gnEKAmvExoHStA7VJvH2E4aYxWaJ3A2+so0I6r2+Cg21l4Gk8dM2b6sBFKk/xVd2wA07ff3w8d4d/m2I03/fBuwG4PzYfLw4Tz9Lfwk4L5v+wAfArxVx+jATwAAAABJRU55goarAAAAAElFTkSuQmCC');
    opacity: 0.05;
    z-index: 9998;
}

/* --- Header --- */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: clamp(1rem, 4vw, 1.5rem) clamp(1rem, 5vw, 5rem);
    z-index: 1000;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.logo { height: clamp(40px, 8vw, 50px); }
nav ul {
    list-style: none;
    display: flex;
    gap: clamp(1rem, 3vw, 2rem);
    flex-wrap: wrap; 
    justify-content: center;
}
.nav-link { 
    text-decoration: none; 
    color: var(--text-color); 
    font-family: var(--font-heading);
    font-weight: 700;
    transition: color 0.3s ease; 
    padding: 5px;
}
.nav-link:hover { color: var(--primary-color); }

/* --- Sezione Hero --- */
.hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* Aggiunto per un corretto allineamento verticale */
    align-items: center;
    justify-content: center;
    padding: 0 var(--body-fluid);
    text-align: center;
    position: relative;
}

.main-title {
    font-family: var(--font-heading);
    font-size: var(--h1-fluid);
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}
.main-title span {
    display: block;
    opacity: 0;
    transform: translateY(50px);

    animation: revealText 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
}
.main-title span:last-child {
    animation-delay: 0.2s;
    color: var(--primary-color);
}
@keyframes revealText {
    to { opacity: 1; transform: translateY(0); }
}

.hero-description {
    max-width: 700px;
    margin: 0 auto 3rem;
    font-size: var(--body-fluid);
    line-height: 1.7;
    opacity: 0;
    transform: translateY(30px);
    animation: revealText 0.8s 0.4s forwards;
}

/* Griglia Info - Nuove Card */
.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: clamp(1rem, 3vw, 1.5rem);
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}
.info-card {
    background: var(--glass-bg);
    padding: clamp(1.5rem, 4vw, 2rem);
    border: 1px solid transparent;
    transition: transform 0.3s ease, border-color 0.3s ease, border-radius 0.4s ease;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
.info-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: var(--primary-color);
}
.info-card h3 {
    font-family: var(--font-heading);
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}
.info-card i { 
    margin-right: 0.5rem;
    font-size: clamp(1.5rem, 4vw, 2rem); 
    color: var(--accent-color);
}
.info-card p {
    font-size: clamp(0.9rem, 2vw, 1rem); 
    line-height: 1.4;
    font-weight: 400; 
    color: rgba(234, 234, 234, 0.8);
}
.info-card p .animated-number {
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-family: var(--font-heading);
    color: var(--accent-color);
    font-weight: 700;
    display: block;
    margin-top: 0.5rem;
}
/* Forme uniche per ogni card */
.shape-1 { border-radius: 40% 60% 70% 30% / 30% 50% 50% 70%; }
.shape-2 { border-radius: 80% 20% 50% 50% / 60% 40% 60% 40%; }
.shape-3 { border-radius: 50% 50% 30% 70% / 50% 50% 50% 50%; }
.shape-4 { border-radius: 20% 80% 40% 60% / 70% 30% 70% 30%; }

/* --- Sezioni Contenuto --- */
.content-section {
    padding: clamp(4rem, 10vw, 6.25rem) clamp(1rem, 5vw, 5rem);
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.content-section.is-visible {
    opacity: 1;
    transform: translateY(0);
}
.content-section h2 {
    font-family: var(--font-heading);
    font-size: var(--h2-fluid);
    margin-bottom: 2rem;
    text-transform: uppercase;
}
.content-section p {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    line-height: 1.7;
}

/* Sezione Sponsor */
.sponsor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: clamp(2rem, 5vw, 3rem);
    margin-top: clamp(2rem, 5vw, 3rem);
    align-items: center;
    justify-items: center;
}
.sponsor-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    position: relative;
    padding: clamp(0.5rem, 2vw, 1rem); 
    max-width: 160px;
    max-height: 160px;
    box-sizing: border-box;
}
.sponsor-logo:hover {
    transform: scale(1.1);
}
.sponsor-logo img {
    height: clamp(40px, 8vw, 60px);
    width: auto;
    filter: grayscale(100%) brightness(150%);
    transition: filter 0.3s ease;
    max-width: 140px;
    max-height: 140px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
}
.sponsor-logo:hover img {
    filter: none;
}
.sponsor-logo span {
    margin-top: 0.5rem;
    font-family: var(--font-body);
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    font-weight: 500;
    color: var(--text-color);
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
    bottom: -1.5rem;
}
.sponsor-logo:hover span {
    opacity: 1;
}

/* Area sponsor grande e centrata */
.sponsor-area {
    position: relative;
    width: 100%;
    max-width: 900px;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 769px) {
    .sponsor-logo {
        /* Queste proprietà saranno sovrascritte da JS per top/left random */
        z-index: 1;
    }
    .sponsor-grid {
        position: absolute;
        width: 100%;
        height: 100%;
        min-height: 300px;
        left: 0;
        top: 0;
    }
}

/* Sezione About e Card Vantaggi */
.about-container {
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 4vw, 2rem);
    margin-top: clamp(1.5rem, 4vw, 2rem);
}
.about-text {
    text-align: left;
    max-width: 800px;
    margin: 0 auto;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    line-height: 1.6;
}
about-text::after{
    content: ' ';
}
.about-text p {
    margin-bottom: 1rem;
}
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(1.5rem, 4vw, 2rem);
    margin-top: clamp(1.5rem, 4vw, 3rem);
}
.benefit-card {
    background: var(--glass-bg);
    padding: clamp(1.5rem, 4vw, 2rem);
    border: 1px solid var(--primary-color);
    transition: transform 0.3s ease, background-color 0.3s ease;
    border-radius: 10px;
}
.benefit-card:hover {
    transform: translateY(-8px);
    background-color: rgba(255, 32, 110, 0.1);
}
.benefit-card h3 {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 4vw, 1.8rem);
    color: var(--accent-color);
    margin-bottom: 0.5rem;
}
.benefit-card p {
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.5;
    color: rgba(234, 234, 234, 0.8);
}

/* Bottone CTA */
.cta-button {
    display: inline-block;
    font-family: var(--font-heading);
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-weight: 700;
    color: var(--bg-color);
    background: var(--primary-color);
    padding: clamp(0.8rem, 3vw, 1rem) clamp(2rem, 5vw, 2.5rem);
    border: none;
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.3s ease;
    margin-top: 2rem;
}
.cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px var(--primary-color);
}

/* --- Footer --- */
footer {
    padding: clamp(2rem, 5vw, 3rem) clamp(1rem, 5vw, 5rem);
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: clamp(1rem, 3vw, 1.5rem);
}

.social-links a {
    color: var(--text-color);
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    transition: color 0.3s ease, transform 0.3s ease;
}
.social-links a:hover {
    color: var(--primary-color);
    transform: scale(1.2);
}

/* --- Responsività e Accessibilità --- */
/* Disabilita effetti visivi non essenziali per schermi piccoli */
@media (max-width: 768px) {
    body { cursor: auto; }
    .custom-cursor, .blob, .noise { display: none; }
    header { flex-direction: column; gap: 1rem; }
    .nav-link { font-size: 1rem; }
    .hero-content {
        text-align: center; /* Assicura che il testo sia sempre centrato */
    }
}

@media (max-width: 500px) {
    header {
        padding: 1rem 1rem;
        min-height: 70px;
    }
    nav ul {
        gap: 0.5rem;
    }
    .hero-section {
        padding-top: 300px;
    }
}
@media (max-width: 600px) {
    .hero-section {
        padding-top: 220px;
    }
}
@media (max-width: 900px) {
    .hero-section {
        padding-top: 180px;
    }
}

/* --- Responsive Hero, Navbar, Info-Grid --- */
@media (max-width: 900px) {
    header {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 2vw;
    }
    .logo {
        height: 40px;
        margin-bottom: 0.5rem;
    }
    nav ul {
        gap: 0.7rem;
        flex-wrap: wrap;
    }
    .main-title {
        font-size: clamp(2.2rem, 8vw, 4.5rem);
        margin-bottom: 0.5rem;
    }
    .hero-section {
        padding: 1.5rem 2vw;
        min-height: 70vh;
        padding-top: 120px;
    }
    .info-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    .info-card {
        min-width: 0;
        padding: 1rem;
        font-size: 1rem;
    }
}
@media (max-width: 600px) {
    .main-title {
        font-size: clamp(1.5rem, 10vw, 2.5rem);
    }
    .hero-section {
        padding: 1rem 1vw;
        min-height: 50vh;
        padding-top: 110px;
    }
    .info-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .info-card {
        margin-bottom: 1rem;
        padding: 0.7rem;
        font-size: 0.95rem;
    }
}

/* Disabilita animazioni per preferenza utente */
@media (prefers-reduced-motion: reduce) {
    .custom-cursor, .blob, .noise {
        animation: none !important;
        transition: none !important;
        transform: none !important;
    }
    .main-title span, .hero-description {
        animation: none !important;
        transform: none !important;
        opacity: 1 !important;
    }
}

/* Animazione on scroll per tutti i div */
.scroll-animate {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.7s cubic-bezier(0.2,0.8,0.2,1), transform 0.7s cubic-bezier(0.2,0.8,0.2,1);
}
.scroll-animate.is-visible {
    opacity: 1;
    transform: translateY(0);
}

a{
    color: #FF206E;
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
a:hover{
    color: #ad164b;
}
