document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // PIXEL LOADING SCREEN TERMINATION
    // ==========================================================================
    const loader = document.getElementById('pixel-loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 600); // Guarantees components mount natively
    });


    // ==========================================================================
    // BRUTALIST DRAWER NAVIGATION SYSTEM
    // ==========================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        const expandedState = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expandedState);
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('open');
        });
    });


    // ==========================================================================
    // TOP NAVIGATION READ COMPLIANCE BAR
    // ==========================================================================
    const scrollBar = document.getElementById('scroll-bar');
    window.addEventListener('scroll', () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const widthPercentage = (scrollPosition / totalHeight) * 100;
        scrollBar.style.width = widthPercentage + '%';
    });


    // ==========================================================================
    // NATIVE INTERSECTION OBSERVER CORE (2D MOTION SPECS)
    // ==========================================================================
    const revealTargets = document.querySelectorAll('.scroll-reveal-up, .scroll-reveal-left, .scroll-reveal-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-triggered');
                revealObserver.unobserve(entry.target); // Execution economy design pattern
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    revealTargets.forEach(target => revealObserver.observe(target));


    // ==========================================================================
    // NUMERICAL STAT COUNTER ENGINE WITH STEP INTERPOLATION
    // ==========================================================================
    const counterElements = document.querySelectorAll('.number-count');

    const initializeCounter = (el) => {
        const targetValue = +el.getAttribute('data-target');
        const frameDuration = 1500; // Linear interpolation ms limit
        const frameStepTime = 20;
        const totalFrames = frameDuration / frameStepTime;
        const countIncrement = Math.ceil(targetValue / totalFrames);
        let currentProgressValue = 0;

        const loop = setInterval(() => {
            currentProgressValue += countIncrement;
            if (currentProgressValue >= targetValue) {
                el.innerText = targetValue.toLocaleString();
                clearInterval(loop);
            } else {
                el.innerText = currentProgressValue.toLocaleString();
            }
        }, frameStepTime);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(counter => counterObserver.observe(counter));


    // ==========================================================================
    // RIGID PORTFOLIO MULTI-TRACK SELECTION SYSTEM
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.pf-btn');
    const gridItems = document.querySelectorAll('.portfolio-card-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetedTrack = btn.getAttribute('data-filter');

            gridItems.forEach(item => {
                const structuralCategory = item.getAttribute('data-cat');
                item.classList.remove('reveal-triggered');

                if (targetedTrack === 'all' || structuralCategory === targetedTrack) {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.classList.add('reveal-triggered');
                    }, 40);
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });


    // ==========================================================================
    // INTAKE LAYER SUBMISSION COMPLIANCE & VALIDATION
    // ==========================================================================
    const intakeForm = document.getElementById('safin-intake-form');
    const alertBox = document.getElementById('pipeline-status-box');

    const runValidationChecks = (input, validationRule) => {
        const targetParent = input.closest('.input-block');
        if (validationRule) {
            targetParent.classList.remove('invalid');
            return true;
        } else {
            targetParent.classList.add('invalid');
            return false;
        }
    };

    intakeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameField = document.getElementById('client-name');
        const emailField = document.getElementById('client-email');
        const selectField = document.getElementById('build-type');
        const payloadField = document.getElementById('build-payload');

        const isNamePassed = runValidationChecks(nameField, nameField.value.trim() !== '');
        
        const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailPassed = runValidationChecks(emailField, emailRegexPattern.test(emailField.value.trim()));
        
        const isSelectPassed = runValidationChecks(selectField, selectField.value !== '');
        const isPayloadPassed = runValidationChecks(payloadField, payloadField.value.trim().length > 8);

        if (isNamePassed && isEmailPassed && isSelectPassed && isPayloadPassed) {
            alertBox.style.display = 'block';
            intakeForm.reset();
            
            document.querySelectorAll('.input-block').forEach(b => b.classList.remove('invalid'));
            
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 10000);
        }
    });


    // ==========================================================================
    // RETICLE CURSOR INTERACTION TRAILING ENGINE
    // ==========================================================================
    const blockReticle = document.getElementById('block-cursor');

    window.addEventListener('mousemove', (coordinates) => {
        blockReticle.style.left = coordinates.clientX + 'px';
        blockReticle.style.top = coordinates.clientY + 'px';
    });


    // ==========================================================================
    // MAGNETIC HUD NODE SHIFTS (FACTOR MATRICES)
    // ==========================================================================
    const magneticNodes = document.querySelectorAll('.magnetic-node');

    magneticNodes.forEach(node => {
        node.addEventListener('mousemove', (mouseEvent) => {
            const structuralBounds = node.getBoundingClientRect();
            
            // Derive tracking differences between mouse coordinates and node centroid paths
            const centerDistanceX = mouseEvent.clientX - (structuralBounds.left + structuralBounds.width / 2);
            const centerDistanceY = mouseEvent.clientY - (structuralBounds.top + structuralBounds.height / 2);

            // Brutalist shift factor: 0.25 scaling offset pull
            node.style.transform = `translate(${centerDistanceX * 0.25}px, ${centerDistanceY * 0.25}px)`;
            blockReticle.style.transform = 'translate(-50%, -50%) scale(1.8) rotate(45deg)';
            blockReticle.style.borderColor = 'var(--black)';
        });

        node.addEventListener('mouseleave', () => {
            node.style.transform = 'translate(0px, 0px)';
            blockReticle.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
            blockReticle.style.borderColor = 'var(--electric-blue)';
        });
    });
});