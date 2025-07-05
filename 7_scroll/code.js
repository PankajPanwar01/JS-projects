document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.progress-bar');
  
  function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.width = scrollProgress + '%';
    
    // Change color based on scroll position (optional)
    if (scrollProgress > 90) {
      progressBar.style.backgroundColor = '#ff4081'; // Change to pink when near bottom
    } else {
      progressBar.style.backgroundColor = '#0070f3'; // Default Next.js blue
    }
  }
  
  // Update on scroll
  window.addEventListener('scroll', updateProgressBar);
  
  // Initial update
  updateProgressBar();
});