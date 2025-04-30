document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleButton(savedTheme);
    
    // Initialize particles with the correct color
    initParticles();
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggleButton(newTheme);
        
        // Reinitialize particles with new color
        initParticles();
    });
});

function updateThemeToggleButton(theme) {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.setAttribute('aria-label', 
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
    );
}

function initParticles() {
    const theme = document.documentElement.getAttribute('data-theme');
    const particlesColor = theme === 'light' ? '#666666' : '#888888';
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: particlesColor
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.6,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: particlesColor,
                opacity: 0.7,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 4.0,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 180,
                    line_linked: {
                        opacity: 0.8
                    }
                },
                push: {
                    particles_nb: 6
                }
            }
        },
        retina_detect: true
    });
} 