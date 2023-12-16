// Get all sidebar items
const sidebarItems = document.querySelectorAll('.item');

// Add click event listener to each sidebar item
sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the target section id from the clicked item
    const targetSectionId = item.getAttribute('target');

    // Get the target section element
    const targetSection = document.getElementById(targetSectionId);

    item.classList.add('active');
    targetSection.classList.add('active');

    // Remove active class from all other sidebar items
    sidebarItems.forEach(sidebarItem => {
      if (sidebarItem !== item) {
        sidebarItem.classList.remove('active');
      }
    });

    // Remove active class from all other sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section !== targetSection) {
        section.classList.remove('active');
      }
    });

  });
});