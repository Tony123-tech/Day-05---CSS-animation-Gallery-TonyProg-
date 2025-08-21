document.addEventListener('DOMContentLoaded', function() {
    // Interactive card effect
    const interactiveCard = document.getElementById('interactiveCard');
    
    interactiveCard.addEventListener('mouseenter', function() {
        this.style.transform = 'rotateY(180deg) scale(1.1)';
        this.style.background = 'linear-gradient(45deg, #00bfff, #8a2be2)';
    });
    
    interactiveCard.addEventListener('mouseleave', function() {
        this.style.transform = 'rotateY(0deg) scale(1)';
        this.style.background = 'linear-gradient(45deg, #8a2be2, #00bfff)';
    });
    
    interactiveCard.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.style.boxShadow = '0 0 30px 10px rgba(138, 43, 226, 0.7)';
        } else {
            this.style.boxShadow = 'none';
        }
    });
    
    // Button effects
    const buttons = document.querySelectorAll('.animated-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Get position of click
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            // Set position of ripple
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add additional styles for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
        }
        
        @keyframes ripple {
            to {
                transform: scale(2.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
