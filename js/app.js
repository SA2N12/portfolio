window.addEventListener('load', () => {
    // Simuler un temps de chargement (par exemple 3 secondes)
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        // Supprimer l'écran de chargement
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';
    
        // Retirer l'écran de chargement du DOM après l'animation
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.add('loaded');
        }, 500); // Correspond au délai de l'animation CSS
        }, 2500); // Temps de chargement simuléZ
});

const circle = document.getElementById('circle');
window.addEventListener("mousemove", (e)=>{
    circle.style.left = e.pageX - 25 + 'px';
    circle.style.top = e.pageY - 25 + 'px';
})

window.addEventListener("scroll", (e) => {
   console.log(e);
   e.preventDefault();
})

//modif