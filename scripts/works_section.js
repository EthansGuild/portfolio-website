document.addEventListener('DOMContentLoaded', () => {
  // Your master array of projects
  const projects = [
    {
      id: "2025.A",
      year: 2025,
      title: "Project A",
      embedURL: "https://www.youtube.com/embed/XXXXXX",
      description: "Details about Project A..."
    },
    {
      id: "2024.B",
      year: 2024,
      title: "Project B",
      embedURL: "https://www.youtube.com/embed/YYYYYY",
      description: "Details about Project B..."
    },
    {
      id: "2024.A",
      year: 2024,
      title: "Project C",
      embedURL: "https://www.youtube.com/embed/ZZZZZZ",
      description: "Details about Project C..."
    }
    // add more as needed...
  ];

  // Select all the "year" containers
  const yearContainers = document.querySelectorAll('.timeline-year');

  yearContainers.forEach(container => {
    // Clicking the label toggles expanded="0" or "1"
    const label = container.querySelector('.year-label');
    label.addEventListener('click', () => {
      const currentVal = container.getAttribute('expanded');
      container.setAttribute('expanded', currentVal === '0' ? '1' : '0');
    });

    // For each project item inside this year...
    const projectItems = container.querySelectorAll('.project-list li');
    projectItems.forEach(item => {
      item.addEventListener('click', () => {
        // 1) Grab the "data-id" from the clicked <li>
        const projectId = item.getAttribute('data-id');
        
        // 2) Find that project in our array
        const projectData = projects.find(proj => proj.id === projectId);

        // 3) If found, populate the left side with details
        if (projectData) {
          populateProjectDetails(projectData);
        } else {
          // Optional: handle missing data (e.g., console.warn)
          console.warn("Project not found for ID:", projectId);
        }
      });
    });
  });
});

/**
 * Fill in the left side panel with the selected project's details.
 */
function populateProjectDetails(project) {
  // Get the left side elements
  const projectTitleElem = document.getElementById('projectTitle');
  const projectEmbedElem = document.getElementById('projectEmbed');
  const projectDescElem  = document.getElementById('projectDescription');

  // Make sure they're visible
  projectTitleElem.style.display = 'block';
  projectEmbedElem.style.display = 'block';
  projectDescElem.style.display  = 'block';

  // Set text/HTML from the project object
  projectTitleElem.textContent = project.title;
  projectDescElem.textContent  = project.description;
  projectEmbedElem.innerHTML   = `<iframe src="${project.embedURL}" allowfullscreen></iframe>`;
}