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
        // Implement form submission logic (e.g., AJAX request)
        // Example:
        // const formData = new FormData(contactForm);
        // fetch('submit-form.php', {
        //   method: 'POST',
        //   body: formData
        // }).then(response => {
        //   // Handle response
        // }).catch(error => {
        //   console.error('Error:', error);
        // });
    });

    // Function to fetch project details (mock example)
    function getProjectContent(projectId) {
        // Mock example - replace with actual project data fetching logic
        if (projectId === '1') {
            return `
                <h3>Project Title</h3>
                <p>Detailed description of the project.</p>
                <p>Technologies used: HTML, CSS, JavaScript, etc.</p>
                <img src="project-details.jpg" alt="Project Details">
            `;
        } else {
            return ''; // Handle other project IDs
        }
    }
});
