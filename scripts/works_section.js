

document.addEventListener('DOMContentLoaded', () => {
  let currentProject = "";

  const projects = [
    {
      id: "2025.B",
      title: "Personal Website",
      embedURL: "https://ethanbattaglia.com/",
      description: "It's what you see right now! It's a combination of a few weeks of brainstorming, raw HTML, CSS, and Javascript. I hope you like it!<br><br>Completed in February 2025.",
      tags: ["<span title=\"Interactive\">🕹️</span>"]
    },
    {
      id: "2025.A",
      title: "Adrenadash Part",
      embedURL: "https://www.youtube.com/embed/FsaEghQ2lzg?si=3tGeJb_gtgygrba0&amp;start=326",
      description: "I built a part in a large Geometry Dash collaboration called \"Adrenadash\"! The decoration and gameplay is heavily inspired by the platformer game \"Celeste\". The part I made is timestamped in the video embed.<br><br>Completed in February 2025.",
      tags: ["<span title=\"Collaborative\">👥</span>","<span title=\"Interactive\">🕹️</span>"]
    },
    {
      id: "2024.F",
      title: "Project B",
      embedURL: "https://www.youtube.com/embed/YYYYYY",
      description: "Details about Project B...",
      tags: ["<span title=\"Interactive\">🕹️</span>"]
    },
    {
      id: "2024.E",
      title: "Library Application",
      embedURL: "https://www.youtube.com/embed/GtxW2Pa59JM?si=ycB1MUhMc06g5lDL",
      description: "This is a \"terminal use only\" database application which acts similarly to Goodreads. In our PostgreSQL database (using DataGrip), we utilized relations to store records for users, books, contributors, formats, genres, and the many relationships between these entities. Most notably, I worked on the ENORMOUS \"foryou\" recommendation algorithm, but I also worked on the user's relationships with books (reading & rating) and viewing collections made by users.<br><br>Completed in April 2024.",
      tags: ["<span title=\"Collaborative\">👥</span>","<span title=\"Academic\">🎓</span>"]
    },
    {
      id: "2024.D",
      title: "Product Web-App",
      imageURL: "https://i.ibb.co/rDS4dVv/SWEN261-Project-Architecture.png",
      description: "In a group, I helped build an almost full-stack product website called \"PARTY ROCKERS\" where we sold rare and common rocks alike (not really). We built it using Angular Typescript for the frontend and Java Spring Boot as the backend, with our database being simply JSON. We utilized an MVVM architecture where Angular Services sent HTTP CRUD operations to the REST API controllers, then performed business logic in the model classes. My role was to work on the shopping cart's functionality and the customization of items when purchasing.<br><br>Completed in April 2024.",
      tags: ["<span title=\"Collaborative\">👥</span>","<span title=\"Academic\">🎓</span>", "<span title=\"Interactive\">🕹️</span>"]
    },
    {
      id: "2024.C",
      title: "Steganography Study",
      embedURL: "https://www.youtube.com/embed/hU_J4XllEVw?si=coIv8eTnceEjNOCR",
      description: "Made as the second project for my Codes and Ciphers class, we were allowed to do free study on any related topic to Cryptography and create a presentation on it. Since I've always had an interest in Steganography, I decided to go for it, and this video is the result.<br><br>Completed in April 2024.",
      tags: ["<span title=\"Academic\">🎓</span>","<span title=\"Cinematic\">📽️</span>"]
    },
    {
      id: "2024.B",
      title: "Manual Cipher",
      embedURL: "https://www.youtube.com/embed/YYYYYY",
      description: "Details about Project B...<br><br>Completed in March 2024.",
      tags: ["<span title=\"Collaborative\">👥</span>","<span title=\"Academic\">🎓</span>"]
    },
    {
      id: "2024.A",
      title: "CV Pong",
      embedURL: "https://www.youtube.com/embed/Wxmrrak4a8s?si=jHOAj0Z77ORbtrcB",
      description: "Made in a group for Brickhack X, this is a simple recreation of the classic game Pong but you control it with your pointer finger. We used OpenCV, Mediapipe, then PyGame to get it working. More details <a href=\"https://devpost.com/software/cv-pong\">here.</a><br><br>Completed in February 2024.",
      tags: ["<span title=\"Collaborative\">👥</span>","<span title=\"Interactive\">🕹️</span>"]
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
      // Click event
      item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-id');
        if (currentProject === projectId) return;
        currentProject = projectId;

        const worksLeftContent = document.querySelector('.works-left-content');
        worksLeftContent.style.transition = 'none';
        worksLeftContent.style.opacity = '0';
        setTimeout(() => {
          // 1) Find project with the "data-id" from the clicked <li>
          // 2) Populate the left side with details
          const projectData = projects.find(proj => proj.id === projectId);
          if (projectData) {
            populateProjectDetails(projectData);
          }
          worksLeftContent.style.transition = 'opacity 1s ease';
          worksLeftContent.style.opacity = '1';
        }, 50);
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
  const projectTagsElem = document.getElementById('projectTags');
  const projectYearElem = document.getElementById('projectYear');
  const projectEmbedElem = document.getElementById('projectEmbed');
  const projectDescElem  = document.getElementById('projectDescription');
  const worksLeftElem = document.querySelector('.works-left');

  // Make sure they're visible
  projectTitleElem.style.display = 'block';
  projectTagsElem.style.display = 'block';
  projectYearElem.style.display = 'block';
  projectEmbedElem.style.display = 'block';
  projectDescElem.style.display  = 'block';

  // Set text/HTML from the project object
  projectTitleElem.textContent = project.title;
  projectTagsElem.innerHTML = project.tags.join('');
  projectYearElem.textContent  = project.id;
  
  if (project.imageURL)
    projectEmbedElem.innerHTML = `<img src="${project.imageURL}" alt="${project.title}" style="width: 100%; border-radius: 10px;">`;
  else if (project.embedURL) {
    // add border to 2025.B only (website project)
    if (project.id === "2025.B")
      projectEmbedElem.innerHTML = `<iframe src="${project.embedURL}" style="border: 1px solid black;" allowfullscreen></iframe>`;    
    else
      projectEmbedElem.innerHTML = `<iframe src="${project.embedURL}" allowfullscreen></iframe>`;
   
  }

  projectDescElem.innerHTML  = project.description;
}