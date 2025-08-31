// // Professional Portfolio JavaScript

// document.addEventListener('DOMContentLoaded', function() {
//     // Theme Toggle Functionality
//     const themeToggle = document.getElementById('themeToggle');
//     const body = document.body;
//     const themeIcon = themeToggle.querySelector('i');
    
//     // Check for saved theme preference or default to light
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     body.setAttribute('data-theme', savedTheme);
//     updateThemeIcon(savedTheme);
    
//     themeToggle.addEventListener('click', function() {
//         const currentTheme = body.getAttribute('data-theme');
//         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
//         body.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
//         updateThemeIcon(newTheme);
        
//         // Add transition effect
//         body.style.transition = 'all 0.3s ease';
//         setTimeout(() => {
//             body.style.transition = '';
//         }, 300);
//     });
    
//     function updateThemeIcon(theme) {
//         if (theme === 'dark') {
//             themeIcon.className = 'fas fa-sun';
//         } else {
//             themeIcon.className = 'fas fa-moon';
//         }
//     }
    
//     // Mobile Menu Toggle
//     const mobileToggle = document.getElementById('mobileToggle');
//     const navMenu = document.querySelector('.nav-menu');
    
//     mobileToggle.addEventListener('click', function() {
//         navMenu.classList.toggle('active');
//         mobileToggle.classList.toggle('active');
//     });
    
//     // Close mobile menu when clicking on nav links
//     const navLinks = document.querySelectorAll('.nav-link');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             navMenu.classList.remove('active');
//             mobileToggle.classList.remove('active');
//         });
//     });
    
//     // Smooth Scrolling for Navigation Links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
            
//             if (target) {
//                 const headerHeight = document.querySelector('.header').offsetHeight;
//                 const targetPosition = target.offsetTop - headerHeight;
                
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
    
//     // Header Scroll Effect
//     const header = document.querySelector('.header');
//     let lastScrollY = window.scrollY;
    
//     window.addEventListener('scroll', function() {
//         const currentScrollY = window.scrollY;
        
//         if (currentScrollY > 100) {
//             header.style.background = body.getAttribute('data-theme') === 'dark' 
//                 ? 'rgba(15, 23, 42, 0.98)' 
//                 : 'rgba(255, 255, 255, 0.98)';
//             header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
//         } else {
//             header.style.background = body.getAttribute('data-theme') === 'dark' 
//                 ? 'rgba(15, 23, 42, 0.95)' 
//                 : 'rgba(255, 255, 255, 0.95)';
//             header.style.boxShadow = 'none';
//         }
        
//         // Hide/show header on scroll
//         if (currentScrollY > lastScrollY && currentScrollY > 200) {
//             header.style.transform = 'translateY(-100%)';
//         } else {
//             header.style.transform = 'translateY(0)';
//         }
        
//         lastScrollY = currentScrollY;
//     });
    
//     // Intersection Observer for Animations
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, observerOptions);
    
//     // Observe elements for animation (if more sections are added later)
//     const animateElements = document.querySelectorAll('.fade-in-up');
//     animateElements.forEach(el => {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(30px)';
//         el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         observer.observe(el);
//     });
    
//     // Floating Cards Mouse Interaction
//     const floatingCards = document.querySelectorAll('.floating-card');
//     const imageContainer = document.querySelector('.image-container');
    
//     if (imageContainer) {
//         imageContainer.addEventListener('mousemove', function(e) {
//             const rect = imageContainer.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;
            
//             const rotateX = (y - centerY) / 20;
//             const rotateY = (centerX - x) / 20;
            
//             floatingCards.forEach((card, index) => {
//                 const delay = index * 0.1;
//                 setTimeout(() => {
//                     card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//                 }, delay * 1000);
//             });
//         });
        
//         imageContainer.addEventListener('mouseleave', function() {
//             floatingCards.forEach((card, index) => {
//                 const delay = index * 0.1;
//                 setTimeout(() => {
//                     card.style.transform = 'translateY(-15px) rotateX(0deg) rotateY(0deg)';
//                 }, delay * 1000);
//             });
//         });
//     }
    
//     // Button Ripple Effect
//     const buttons = document.querySelectorAll('.btn');
//     buttons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             const ripple = document.createElement('span');
//             const rect = this.getBoundingClientRect();
//             const size = Math.max(rect.width, rect.height);
//             const x = e.clientX - rect.left - size / 2;
//             const y = e.clientY - rect.top - size / 2;
            
//             ripple.style.cssText = `
//                 position: absolute;
//                 border-radius: 50%;
//                 background: rgba(255, 255, 255, 0.3);
//                 transform: scale(0);
//                 animation: ripple 0.6s linear;
//                 width: ${size}px;
//                 height: ${size}px;
//                 left: ${x}px;
//                 top: ${y}px;
//             `;
            
//             this.appendChild(ripple);
            
//             setTimeout(() => {
//                 ripple.remove();
//             }, 600);
//         });
//     });
    
//     // Typing Animation for Hero Title (Optional Enhancement)
//     function typeWriter(element, text, speed = 100) {
//         let i = 0;
//         element.innerHTML = '';
        
//         function type() {
//             if (i < text.length) {
//                 element.innerHTML += text.charAt(i);
//                 i++;
//                 setTimeout(type, speed);
//             }
//         }
        
//         type();
//     }
    
//     // Performance Optimization: Lazy Loading for Images
//     const images = document.querySelectorAll('img[data-src]');
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//                 observer.unobserve(img);
//             }
//         });
//     });
    
//     images.forEach(img => imageObserver.observe(img));
    
//     // Add CSS animation classes
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes ripple {
//             to {
//                 transform: scale(4);
//                 opacity: 0;
//             }
//         }
        
//         .lazy {
//             opacity: 0;
//             transition: opacity 0.3s;
//         }
        
//         .lazy.loaded {
//             opacity: 1;
//         }
//     `;
//     document.head.appendChild(style);
    
//     // Preloader (Optional)
//     function hidePreloader() {
//         const preloader = document.querySelector('.preloader');
//         if (preloader) {
//             preloader.style.opacity = '0';
//             setTimeout(() => {
//                 preloader.style.display = 'none';
//             }, 500);
//         }
//     }
    
//     // Hide preloader when page is fully loaded
//     window.addEventListener('load', hidePreloader);
    
//     // Fallback: Hide preloader after 3 seconds
//     setTimeout(hidePreloader, 3000);
    
//     // Console message for developers
//     console.log(`
//     🚀 Welcome to Anugya Jain's Portfolio
//     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//     Built with modern web technologies:
//     • Semantic HTML5
//     • CSS Custom Properties & Grid
//     • Vanilla JavaScript
//     • Responsive Design
//     • Accessibility Features
//     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//     Feel free to explore the code!
//     `);
// });

// // Utility Functions
// const utils = {
//     // Debounce function for performance
//     debounce: function(func, wait, immediate) {
//         let timeout;
//         return function executedFunction() {
//             const context = this;
//             const args = arguments;
//             const later = function() {
//                 timeout = null;
//                 if (!immediate) func.apply(context, args);
//             };
//             const callNow = immediate && !timeout;
//             clearTimeout(timeout);
//             timeout = setTimeout(later, wait);
//             if (callNow) func.apply(context, args);
//         };
//     },
    
//     // Throttle function for scroll events
//     throttle: function(func, limit) {
//         let inThrottle;
//         return function() {
//             const args = arguments;
//             const context = this;
//             if (!inThrottle) {
//                 func.apply(context, args);
//                 inThrottle = true;
//                 setTimeout(() => inThrottle = false, limit);
//             }
//         };
//     },
    
//     // Check if element is in viewport
//     isInViewport: function(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     },
    
//     // Smooth scroll to element
//     scrollToElement: function(element, offset = 0) {
//         const elementPosition = element.offsetTop - offset;
//         window.scrollTo({
//             top: elementPosition,
//             behavior: 'smooth'
//         });
//     }
// };

// // Export utils for use in other scripts if needed
// window.portfolioUtils = utils;