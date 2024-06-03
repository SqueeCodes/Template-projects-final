function openMenu() {
    document.body.classList.add('menu--open');
    }
    
    function closeMenu() {
    document.body.classList.remove('menu--open')
    }


    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.fade-in-section');
      
        const config = {
          rootMargin: '0px 0px -10% 0px',
          threshold: 0
        };
      
        const observer = new IntersectionObserver(function(entries, self) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              self.unobserve(entry.target);
            }
          });
        }, config);
      
        sections.forEach(section => {
          observer.observe(section);
        });
      });