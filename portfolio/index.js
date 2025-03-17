// Basic interactivity for the portfolio site

// Handle "Explore My Work" button click
document.getElementById('cta-button').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
  
    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for your message! (This is a demo)');
    
    // Reset form
    e.target.reset();
  });