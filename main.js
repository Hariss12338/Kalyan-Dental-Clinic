/* ============================================
   KALYAN DENTAL CLINIC - MAIN JAVASCRIPT
============================================ */

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
requestAnimationFrame(raf);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/* ============================================
   NAVBAR FUNCTIONALITY
============================================ */

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
    });
});

/* ============================================
   HERO SECTION ANIMATIONS
============================================ */

gsap.timeline().to('.hero-title h1', {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.2,
});

gsap.timeline().to('.hero-subtitle', {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.4,
});

// Parallax effect on hero background
gsap.to('#home > .absolute', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: '#home',
        scrub: 0.5,
        start: 'top top',
        end: 'center center',
        markers: false,
    },
});

gsap.to('.hero-bg-animation', {
    backgroundPosition: '400% 0%',
    ease: 'none',
    scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: false,
    },
});

gsap.to('.hero-bg-icon', {
    yPercent: -20,
    xPercent: 10,
    stagger: 0.15,
    ease: 'none',
    scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: false,
    },
});

/* ============================================
   SECTION REVEAL ANIMATIONS
============================================ */

// Animate elements on scroll
const animateOnScroll = (selector, options = {}) => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        gsap.from(element, {
            duration: 0.8,
            opacity: 0,
            y: 50,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 50%',
                scrub: 0.5,
                markers: false,
            },
            ...options,
        });
    });
};

animateOnScroll('.floating-card');
animateOnScroll('.service-card', { y: 100 });
animateOnScroll('.stat-card', { scale: 0.8 });
animateOnScroll('.contact-card');
animateOnScroll('.timing-card');

/* ============================================
   ANIMATED COUNTERS
============================================ */

let countersAnimated = false;

const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll('.counter');
    const duration = 2.2; // seconds

    counters.forEach((counter) => {
        const target = Number(counter.getAttribute('data-target')) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        const counterValue = { value: 0 };

        counter.textContent = `0${suffix}`;

        gsap.to(counterValue, {
            value: target,
            duration,
            ease: 'power3.out',
            onUpdate: () => {
                counter.textContent = `${Math.floor(counterValue.value).toLocaleString('en-IN')}${suffix}`;
            },
            onComplete: () => {
                counter.textContent = `${target.toLocaleString('en-IN')}${suffix}`;
            },
        });
    });
};

ScrollTrigger.create({
    trigger: '#about',
    start: 'top 90%',
    onEnter: animateCounters,
    once: true,
});

const aboutSection = document.getElementById('about');
if (aboutSection) {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateCounters();
    }
}

/* ============================================
   DOCTOR SECTION ANIMATIONS
============================================ */

gsap.to('.doctor-image-container', {
    duration: 1,
    opacity: 1,
    x: 0,
    scrollTrigger: {
        trigger: '#doctor',
        start: 'top center',
        end: 'center center',
        scrub: 0.5,
        markers: false,
    },
});

// Floating badge animations
gsap.to('.floating-card-badge', {
    duration: 0.5,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#doctor',
        start: 'top center',
        end: 'center center',
        scrub: 0.5,
        markers: false,
    },
});

/* ============================================
   TECH CARD HOVER EFFECTS
============================================ */

document.querySelectorAll('.tech-card').forEach((card) => {
    card.addEventListener('mouseenter', function () {
        gsap.to(this, { y: -20, duration: 0.3, overwrite: 'auto' });
    });

    card.addEventListener('mouseleave', function () {
        gsap.to(this, { y: 0, duration: 0.3, overwrite: 'auto' });
    });
});

/* ============================================
   CERTIFICATE CAROUSEL
============================================ */

const certCarousel = document.querySelector('.cert-carousel');

if (certCarousel) {
    let isScrolling = false;

    certCarousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (!isScrolling) {
            isScrolling = true;
            const scrollAmount = e.deltaY > 0 ? 300 : -300;
            
            certCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
            
            setTimeout(() => {
                isScrolling = false;
            }, 500);
        }
    });
}

/* ============================================
   GALLERY ANIMATIONS
============================================ */

gsap.to('.gallery-item', {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
        end: 'center center',
        scrub: 0.5,
        markers: false,
    },
});

// Gallery item hover zoom
document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('mouseenter', function () {
        gsap.to(this, { scale: 1.08, duration: 0.3 });
    });

    item.addEventListener('mouseleave', function () {
        gsap.to(this, { scale: 1, duration: 0.3 });
    });
});

/* ============================================
   SERVICE CARD HOVER EFFECTS
============================================ */

document.querySelectorAll('.service-card').forEach((card) => {
    const originalX = 0;
    const originalY = 0;

    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(this, {
            rotation: (x / rect.width) * 5,
            duration: 0.3,
            overwrite: 'auto',
        });
    });

    card.addEventListener('mouseleave', function () {
        gsap.to(this, {
            rotation: 0,
            duration: 0.3,
            overwrite: 'auto',
        });
    });
});

/* ============================================
   MAGNETIC BUTTON EFFECTS
============================================ */

class MagneticButton {
    constructor(button) {
        this.button = button;
        this.magneticForce = 30;
        this.init();
    }

    init() {
        this.button.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.button.addEventListener('mouseleave', (e) => this.onMouseLeave(e));
    }

    onMouseMove(e) {
        const rect = this.button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const distance = Math.sqrt(x * x + y * y);
        
        if (distance < 100) {
            gsap.to(this.button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
            });
        }
    }

    onMouseLeave() {
        gsap.to(this.button, {
            x: 0,
            y: 0,
            duration: 0.3,
        });
    }
}

// Apply magnetic effect to all magnetic buttons
document.querySelectorAll('.magnetic-btn').forEach((btn) => {
    new MagneticButton(btn);
});

/* ============================================
   GLOWING TEXT EFFECT
============================================ */

const glowingText = document.querySelectorAll('.text-gradient');

glowingText.forEach((text) => {
    gsap.to(text, {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'none',
    });
});

/* ============================================
   PARALLAX EFFECT ON SECTIONS
============================================ */

document.querySelectorAll('section').forEach((section) => {
    gsap.to(section, {
        y: 50,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            scrub: 0.5,
            markers: false,
        },
    });
});

/* ============================================
   SCROLL PINNING FOR SPECIAL SECTIONS
============================================ */

// Create a timeline for smooth section transitions
const sectionsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.max-w-6xl',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
    },
});

/* ============================================
   MOUSE FOLLOW GLOW EFFECT
============================================ */

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.querySelectorAll('.mouse-follow').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left;
        const elementY = rect.top;

        if (
            x > elementX &&
            x < elementX + rect.width &&
            y > elementY &&
            y < elementY + rect.height
        ) {
            const relativeX = x - elementX;
            const relativeY = y - elementY;

            gsap.to(element, {
                '--glow-x': `${relativeX}px`,
                '--glow-y': `${relativeY}px`,
                duration: 0.3,
            });
        }
    });
});

/* ============================================
   CONTACT FORM SUBMISSION
============================================ */

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const form = e.target;
    const formData = new FormData(form);
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'fixed top-20 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg';
    successMsg.textContent = 'Thank you! We will contact you soon.';
    document.body.appendChild(successMsg);
    
    // Animate success message
    gsap.from(successMsg, {
        duration: 0.5,
        opacity: 0,
        y: -50,
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        gsap.to(successMsg, {
            duration: 0.5,
            opacity: 0,
            y: -50,
            onComplete: () => {
                successMsg.remove();
            },
        });
    }, 3000);
    
    // Reset form
    form.reset();
}

/* ============================================
   PAGE LOAD ANIMATION
============================================ */

gsap.from('body', {
    opacity: 0,
    duration: 0.5,
});

/* ============================================
   SCROLL TO TOP BUTTON
============================================ */

const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'fixed bottom-24 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold opacity-0 pointer-events-none z-40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50';
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
        } else {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        }
    });

    button.addEventListener('click', () => {
        lenis.scrollTo(0, { duration: 2 });
    });
};

createScrollToTopButton();

/* ============================================
   FLOATING ANIMATION INITIALIZATION
============================================ */

const initFloatingAnimations = () => {
    const floatingElements = document.querySelectorAll('[class*="animate-float"]');
    
    floatingElements.forEach((element, index) => {
        gsap.to(element, {
            y: Math.sin(index) * 20,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    });
};

initFloatingAnimations();

/* ============================================
   TEXT REVEAL ANIMATIONS
============================================ */

const revealText = (selector) => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
        const text = element.textContent;
        const chars = text.split('').map((char) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            element.appendChild(span);
            return span;
        });
        
        element.textContent = '';
        element.append(...chars);
        
        gsap.to(chars, {
            opacity: 1,
            duration: 0.05,
            stagger: 0.02,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                markers: false,
            },
        });
    });
};

revealText('h2');

/* ============================================
   SCROLL PROGRESS INDICATOR
============================================ */

const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-50';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

/* ============================================
   WINDOW RESIZE HANDLER
============================================ */

window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

/* ============================================
   PERFORMANCE OPTIMIZATION
============================================ */

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach((img) => {
        imageObserver.observe(img);
    });
}

/* ============================================
   INITIALIZATION
============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Refresh ScrollTrigger after content is loaded
    ScrollTrigger.refresh();

    

    // Log initialization
    console.log('Kalyan Dental Clinic Website Initialized');
    console.log('GSAP Version:', gsap.version);
    console.log('Lenis Smooth Scrolling Active');
});

/* ============================================
   SMOOTH SCROLL NAVIGATION
============================================ */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            lenis.scrollTo(target, {
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        }
    });
});

/* ============================================
   WEBSITE READY
============================================ */

window.addEventListener('load', () => {
    console.log('All assets loaded');
    gsap.to('body', { opacity: 1, duration: 0.5 });
});
