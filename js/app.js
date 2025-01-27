window.addEventListener('load', () => {

    // Simuler un temps de chargement (par exemple 3 secondes)
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        // Supprimer l'écran de chargement
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';s
    
        // Retirer l'écran de chargement du DOM après l'animation
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.add('loaded');
        }, 500); // Correspond au délai de l'animation CSS
        }, 2500); // Temps de chargement simulé

    const navItems = document.querySelectorAll('nav ul li');
    const identity = document.querySelector('.identity');

    // Animation des éléments de navigation
    gsap.from(navItems, {
        y: 50, // Glissement vers le haut
        opacity: 0, // Opacité de 0 à 1
        duration: 1, // Durée de l'animation
        stagger: 0.2, // Décalage entre chaque élément
        ease: "power2.out", // Type d'animation
    });

    // Animation de la section identité
    gsap.from(identity, {
        x: -100, // Glissement vers la droite
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5, // Délai avant le début
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.projects-list li', {
        scrollTrigger: {
            trigger: '.projects-list', // Déclenchement à l'apparition de cette section
            start: "top 80%", // Quand 80% de la section est visible
            end: "bottom 50%", // Fin de l'animation
            scrub: true, // Synchronisation avec le défilement
        },
        y: 100, // Déplacement vers le bas
        opacity: 0, // Départ invisible
        stagger: 0.3, // Décalage entre les éléments
      ease: "power2.out",
    });

    gsap.to('.background-top', {
    scrollTrigger: {
        trigger: '.left-container',
        start: "top 100%",
        end: "bottom 0%",
        scrub: true,
    },
    y: -100, // Se déplace plus lentement que le défilement
    ease: "none",
    });

});