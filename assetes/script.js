document.addEventListener('DOMContentLoaded', () => {
    // Function to start the counting animation
    function startCounterAnimation(entry) {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const update = () => {
                    const count = +counter.innerText.split('+')[0].split('%')[0];
                    const increment = target / 200; // Speed of animation (200 steps)

                    if (count < target) {
                        // Increase count by the increment value
                        counter.innerText = Math.ceil(count + increment) + (counter.classList.contains('text-light') ? '+' : '%');
                        // Continue animation
                        requestAnimationFrame(update);
                    } else {
                        // Set the final value exactly
                        counter.innerText = target + (counter.classList.contains('text-light') ? '+' : '%');
                    }
                };
                update();
            });
            // Stop observing once the animation has run
            observer.unobserve(entry.target);
        }
    }

    // Intersection Observer to run the animation only when the section is visible
    const heroSection = document.querySelector('.hero-section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(startCounterAnimation);
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    if (heroSection) {
        observer.observe(heroSection);
    }
});

// About Us 

document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        const originalText = card.querySelector('.small-text').innerText;
        const hoverText = card.getAttribute('data-text');
        const smallTextElement = card.querySelector('.small-text');

        // Mouse Over: Swap the text for a "more details" description
        card.addEventListener('mouseenter', () => {
            smallTextElement.classList.add('fade-out');
            setTimeout(() => {
                smallTextElement.innerText = hoverText;
                smallTextElement.classList.remove('fade-out');
                smallTextElement.classList.add('fade-in');
            }, 150); // Delay matches CSS transition
        });

        // Mouse Out: Swap the text back to the original description
        card.addEventListener('mouseleave', () => {
            smallTextElement.classList.add('fade-out');
            setTimeout(() => {
                smallTextElement.innerText = originalText;
                smallTextElement.classList.remove('fade-out');
                smallTextElement.classList.add('fade-in');
            }, 150);
        });
    });
});


// Srvices 

document.addEventListener('DOMContentLoaded', () => {
    // Select all service cards
    const serviceCards = document.querySelectorAll('.service-card');

    // Add a class for a slightly more emphasized shadow on mouseenter/mouseleave
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add a class for stronger styling if needed
            card.classList.add('active-hover'); 
        });

        card.addEventListener('mouseleave', () => {
            // Remove the class
            card.classList.remove('active-hover');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // This section is primarily driven by CSS :hover effects.
    // No complex JavaScript is strictly necessary for the visual design.
    
    // Example: If you wanted a slight animation on scroll (using a library like AOS), 
    // you would initialize it here:
    // AOS.init({
    //     duration: 1000,
    //     once: true
    // });
});

document.addEventListener('DOMContentLoaded', () => {
    // This JavaScript would be used to initialize a lightbox library
    // if you chose to include one for the gallery.

    // Example for a hypothetical lightbox:
    // if (typeof Lightbox !== 'undefined') { // Check if the Lightbox library is loaded
    //     lightbox.option({
    //         'resizeDuration': 200,
    //         'wrapAround': true
    //     })
    // }

    // For a more modern pure JS lightbox, the initialization might look like:
    // if (typeof fslightbox !== 'undefined') {
    //     refreshFsLightbox(); // Reloads if content is added dynamically
    // }

    // If using Lightbox2 (as commented in HTML), it usually auto-initializes
    // based on the 'data-lightbox' attribute, so no JS here is typically needed.
});

document.addEventListener('DOMContentLoaded', () => {
    // JavaScript is not needed for the present static design.

    // If integrating the actual Instagram feed, the JS would handle:
    // 1. Fetching data from the Instagram Graph API endpoint.
    // 2. Dynamically generating HTML/images within the .instagram-box.
    // (This requires server-side authentication and a business account.)
});

document.addEventListener('DOMContentLoaded', () => {
    // JavaScript here would primarily handle integration with an external booking system.
    
    // Example: If the right-hand side was an iframe for a booking tool:
    // const bookingIframe = document.getElementById('booking-iframe');
    // if (bookingIframe) {
    //     // Logic to dynamically set the iframe source URL or handle cross-domain communication
    // }
});

// Testimonial sections 

document.addEventListener('DOMContentLoaded', () => {
    // If you planned to use a slider/carousel for more testimonials, 
    // you would place the cards inside a Bootstrap carousel container 
    // and initialize it here:

    // Example for a hypothetical setup:
    // const testimonialsCarousel = document.getElementById('testimonials-carousel');
    // if (testimonialsCarousel) {
    //     new bootstrap.Carousel(testimonialsCarousel, {
    //         interval: 5000, // Slide every 5 seconds
    //         wrap: true
    //     });
    // }
    
    // For the current fixed 3-column layout, no JS is strictly required.
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simulate form submission process
            const submitButton = contactForm.querySelector('.send-message-btn');
            submitButton.disabled = true;
            submitButton.innerText = 'Sending...';

            setTimeout(() => {
                // Success feedback
                alert('Thank you for your message! We will get back to you soon.');
                
                // Clear the form fields
                contactForm.reset(); 

                // Reset button state
                submitButton.disabled = false;
                submitButton.innerText = 'Send Message';

            }, 1500); // Wait 1.5 seconds to simulate server response
        });
    }
});

// footer sections

document.addEventListener('DOMContentLoaded', () => {
    // No specific JavaScript required for the visual design or responsiveness of this footer.
    // All dynamic effects (link hovers, social icon hovers) are handled with CSS.
});