const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const contactForm = document.getElementById('contactForm');
const successMessage = document.querySelector('.form-success');

if (contactForm && successMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameField = contactForm.querySelector('input[name="name"]');
    const name = nameField ? nameField.value.trim() : 'Parent';
    successMessage.textContent = `Thank you, ${name}! We will contact you soon.`;
    contactForm.reset();
  });
}
