document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            window.scrollTo({
                top: section.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Project modal
    const projectButtons = document.querySelectorAll('.project-btn');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-project-content');
    const closeModal = document.querySelector('.close');

    projectButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const projectId = button.getAttribute('data-project-id');
            const projectContent = getProjectContent(projectId); // Replace with function to fetch project details

            modal.style.display = 'block';
            modalContent.innerHTML = projectContent;
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Replace 'submit-form.php' with your actual form submission endpoint
        fetch('submit-form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Handle response (e.g., show success message)
            console.log('Form submitted successfully');
            contactForm.reset(); // Reset form after submission
        })
        .catch(error => {
            // Handle errors (e.g.,
