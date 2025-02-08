document.addEventListener('DOMContentLoaded', () => {
  // Your master array of projects
  const projects = [
    {
      id: "2025.B",
      year: 2025,
      title: "Personal Website",
      embedURL: "https://www.youtube.com/embed/XXXXXX",
      description: "It's what you see right now! It's a combination of a few weeks of brainstorming, raw HTML, CSS, and Javascript. I hope you like it!<br><br>Completed in February 2025."
    },
    {
      id: "2025.A",
      year: 2025,
      title: "Adrenadash Part",
      embedURL: "https://www.youtube.com/embed/FsaEghQ2lzg?si=3tGeJb_gtgygrba0&amp;start=326",
      description: "I helped build a part in a large Geometry Dash collaboration called \"Adrenadash\"! The decoration and gameplay is heavily inspired by the platformer game \"Celeste\". The part I made is timestamped in the video embed.<br><br>Released in February 2025."
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
      year: "2024",
      title: "Project C",
      embedURL: "https://www.youtube.com/embed/ZZZZZZ",
      description: "Details about Project C..."
    }
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
  const projectYearElem = document.getElementById('projectYear');
  const projectEmbedElem = document.getElementById('projectEmbed');
  const projectDescElem  = document.getElementById('projectDescription');

  // Make sure they're visible
  projectTitleElem.style.display = 'block';
  projectYearElem.style.display = 'block';
  projectEmbedElem.style.display = 'block';
  projectDescElem.style.display  = 'block';

  // Set text/HTML from the project object
  projectTitleElem.textContent = project.title;
  projectYearElem.textContent  = project.year;
  projectEmbedElem.innerHTML   = `<iframe src="${project.embedURL}" allowfullscreen></iframe>`;
  projectDescElem.innerHTML  = project.description;
}