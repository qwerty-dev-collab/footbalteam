// Example: Smooth scroll when clicking nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: Button clicks in Fan Zone
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('This feature is coming soon!');
  });
});
