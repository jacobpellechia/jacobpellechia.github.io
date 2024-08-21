document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Handle click event on the dropdown button
    dropdownButton.addEventListener('click', function (event) {
        // Toggle the display of dropdown content
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        // Prevent the click event from propagating to the window click handler
        event.stopPropagation();
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    };

    // Scroll fade-in and fade-out effect
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const handleScroll = () => {
        fadeInSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call in case sections are already in view

    // Add adjustable fade duration for each section
    document.documentElement.style.setProperty('--fade-duration', '2s');  // Example of setting fade duration to 2 seconds
});
