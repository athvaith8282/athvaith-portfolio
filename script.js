// ==========================================
// Particle Animation System
// ==========================================

class ParticleSystem {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        // Create canvas
        const container = document.getElementById('particles');
        if (!container) return;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        container.appendChild(this.canvas);

        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Create particles
        this.createParticles();

        // Start animation
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            this.ctx.fill();

            // Draw connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const other = this.particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 150)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// Scroll Animation Observer
// ==========================================

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        // Create intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================

function initSmoothScroll() {
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
}

// ==========================================
// Project Card Interactions
// ==========================================

class ProjectCardEffects {
    constructor() {
        this.init();
    }

    init() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            // Mouse move effect for card tilt
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }

    handleMouseLeave(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
}

// ==========================================
// Typing Effect for Hero Subtitle
// ==========================================

class TypingEffect {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (!this.element) return;
        
        // Store original text
        if (!this.text) {
            this.text = this.element.textContent;
        }
        
        // Clear element
        this.element.textContent = '';
        this.element.style.whiteSpace = 'nowrap';
        this.element.style.overflow = 'hidden';
        
        // Start typing
        this.type();
    }

    type() {
        if (this.currentIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.currentIndex);
            this.currentIndex++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// ==========================================
// Performance Monitoring
// ==========================================

function checkPerformance() {
    // Reduce particle count on mobile devices
    if (window.innerWidth < 768) {
        return 30; // Fewer particles on mobile
    }
    return 50; // Default particle count
}

// ==========================================
// Accessibility Enhancements
// ==========================================

function initAccessibility() {
    // Add keyboard navigation hints
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
        el.setAttribute('role', el.tagName === 'A' ? 'link' : 'button');
    });

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion');
    }
}

// ==========================================
// External Link Handling
// ==========================================

function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        // Add visual indicator for external links
        link.setAttribute('aria-label', `${link.textContent} (opens in new tab)`);
    });
}

// ==========================================
// Analytics Event Tracking (Optional)
// ==========================================

function initAnalytics() {
    // Track demo button clicks
    const demoButtons = document.querySelectorAll('.btn-demo');
    demoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Demo button clicked:', btn.closest('.project-card')?.querySelector('.project-title')?.textContent);
            // Add your analytics tracking code here
        });
    });

    // Track GitHub button clicks
    const githubButtons = document.querySelectorAll('.btn-github');
    githubButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('GitHub button clicked:', btn.closest('.project-card')?.querySelector('.project-title')?.textContent);
            // Add your analytics tracking code here
        });
    });
}

// ==========================================
// Loading Animation
// ==========================================

function initLoadingAnimation() {
    // Add visible class to hero content after a short delay
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 100);
}

// ==========================================
// Resume Viewer System
// ==========================================

class ResumeViewer {
    constructor() {
        this.isLoading = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadResume();
    }

    bindEvents() {
        const downloadBtn = document.getElementById('download-resume');

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => this.trackDownload());
        }
    }

    async loadResume() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoading();

        const imagePath = 'assets/resume/resume-page-1.jpg';
        const img = new Image();

        img.onload = () => {
            const resumeImage = document.getElementById('resume-image');
            if (resumeImage) {
                resumeImage.src = imagePath;
                resumeImage.alt = 'Athvaith K Resume';
                resumeImage.classList.remove('loading');
            }
            this.hideLoading();
            this.isLoading = false;
        };

        img.onerror = () => {
            console.warn('Resume image not found');
            this.hideLoading();
            this.isLoading = false;
            this.showPlaceholder();
        };

        img.src = imagePath;
    }

    showLoading() {
        const loading = document.getElementById('resume-loading');
        const image = document.getElementById('resume-image');
        
        if (loading) loading.classList.add('show');
        if (image) image.classList.add('loading');
    }

    hideLoading() {
        const loading = document.getElementById('resume-loading');
        const image = document.getElementById('resume-image');
        
        if (loading) loading.classList.remove('show');
        if (image) image.classList.remove('loading');
    }

    showPlaceholder() {
        const image = document.getElementById('resume-image');
        if (image) {
            image.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMjAwSDIyNVYyNTBIMTc1VjIwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHA+UmVzdW1lIGltYWdlcyB3aWxsIGFwcGVhciBoZXJlPC9wPgo8L3N2Zz4=';
            image.alt = 'Resume placeholder - Please add resume image to assets/resume/ directory';
        }
    }

    trackDownload() {
        console.log('Resume download clicked');
        // Add your analytics tracking code here
        // Example: gtag('event', 'download', { 'file_name': 'resume' });
    }
}

// ==========================================
// Initialize Everything
// ==========================================

function init() {
    // Check if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }

    // Initialize particle system (only on desktop for performance)
    if (window.innerWidth >= 768) {
        new ParticleSystem();
    }

    // Initialize scroll animations
    new ScrollAnimations();

    // Initialize smooth scroll
    initSmoothScroll();

    // Initialize project card effects (only on desktop)
    if (window.innerWidth >= 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        new ProjectCardEffects();
    }

    // Initialize typing effect for hero subtitle
    const typingElement = document.querySelector('.typing-text');
    if (typingElement && window.innerWidth >= 768) {
        new TypingEffect(typingElement, null, 50);
    }

    // Initialize accessibility features
    initAccessibility();

    // Initialize external links
    initExternalLinks();

    // Initialize analytics tracking
    initAnalytics();

    // Initialize loading animation
    initLoadingAnimation();

    // Initialize resume viewer
    new ResumeViewer();

    // Log initialization
    console.log('🚀 Portfolio initialized successfully!');
}

// Start initialization
init();

// ==========================================
// Handle Window Resize
// ==========================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize on significant resize
        console.log('Window resized, adjusting layout...');
    }, 250);
});

// ==========================================
// Service Worker Registration (Optional)
// ==========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

