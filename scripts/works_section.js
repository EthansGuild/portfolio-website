let currentProject = "";

const collaborative_image_url = "../assets/tags/collaborative.png";
const academic_image_url = "../assets/tags/academic.png";
const interactive_image_url = "../assets/tags/interactive.png";
const cinematic_image_url = "../assets/tags/cinematic.png";

const projects = [
  {
    id: "2025.B",
    title: "Personal Website",
    embedURL: "https://ethanbattaglia.com/",
    description: `It's what you see right now! Built over the course of a few weeks, it's a combination of
    brainstorming, writing, Photoshop, raw HTML, CSS, Javascript, and searching for old project files. I hope
    you like it!<br><br>Completed in February 2025.`,
    tags: [
      { name: "Interactive", icon: interactive_image_url }
    ]
  },
  {
    id: "2025.A",
    title: "Adrenadash Part",
    embedURL: "https://www.youtube.com/embed/FsaEghQ2lzg?si=3tGeJb_gtgygrba0&amp;start=326",
    description: `I built a part in a large Geometry Dash collaboration called \"Adrenadash\"! 
    The decoration and gameplay is heavily inspired by the platformer game \"Celeste\". 
    The part I made is timestamped in the video embed.<br><br>Completed in February 2025.`,
    tags: [
      { name: "Collaborative", icon: collaborative_image_url },
      { name: "Interactive", icon: interactive_image_url }
    ]
  },
  {
    id: "2024.J",
    title: "Java Interpreter",
    imageURL: "../assets/plc_symbol_table.png",
    description: `As the semester-long project in my Programming Language Concepts class, we crafted an 
    interpreter in Java which interprets a made-up language called Jott (combination of our professor's first 
    and last names, lol). In the first phase, we had to understand the DFA representing the language to 
    implement a Tokenizer in Java and report any Syntax Errors. For the second phase we built a Parse Tree 
    out of all of the tokens, which required making <i><u>a lot (27)</u></i> of \"Node\" classes to represent 
    each node in the CFG. In phase three, we decorated the Parse Tree with semantic analysis, and in the last 
    phase we executed/interpreted the code in Java. The image above shows our Symbol Table for the project which 
    helped SO MUCH with scoping and type checking.<br><br>
    Completed in December 2024.`,
    tags: [
      { name: "Collaborative", icon: collaborative_image_url },
      { name: "Academic", icon: academic_image_url }
    ]
  },
  {
    id: "2024.I",
    title: "Feature Matching",
    imageURL: "../assets/cv_feature_matching.png",
    description: `In my Computer Vision class, we wrote custom color space transforms and ran edge detection 
    algorithms on the appropriate color spaces. We also talked about convolution kernels, popular filters, 
    and parameter space algorithms like the Hough Transform. Finally, we advanced to feature spaces and 
    feature matching, and applied algoirthms like SIFT and ORB to achieve some pretty neat results. The image 
    above shows the best feature matching results I could get after tweaking the parameters a bit!<br><br>
    Completed in December 2024.`,
    tags: [
      { name: "Academic", icon: academic_image_url }
    ]
  },
  {
    id: "2024.H",
    title: "Mini-Games",
    embedURL: "https://padlet.com/ebattaglia929/ethan-s-mini-games-w6q6pddeang4jac7",
    description: `Since 2022, I've worked a part-time job at a place called Code Ninjas. We teach kids how to 
    code there from the very basics, starting with sequence of code, conditionals, variables, etc. all in the 
    form of block coding. Later on, they get introduced to JavaScript and then C# in Unity. But for the kids who 
    are near the beginning, it's hard for them to get <i>INPIRED</i>. So, I decided that during any downtime at 
    work, I would work on these small games so that the kids have something to look to for inspiration! If you 
    want to try some of them out, I suggest DEFEND THE GOLD and blob.<br><br>
    Started in October 2024.`,
    tags: [
      { name: "Interactive", icon: interactive_image_url }
    ]
  },
  {
    id: "2024.G",
    title: "Graph Traversal",
    imageURL: "../assets/map.png",
    description: `Albeit a short and sweet project, I implemented A*, DFS, and BFS to traverse the graph 
    from some given start and end points. The graph was constructed by connecting major cities as nodes 
    in the US in some strange fashion. The most fun part about the project was actually NOT implementing the 
    search algorithms—instead it was recreating the Node, Edge, and Stack classes, along with making an 
    Adjacency Matrix that made this enjoyable for me. Pretty fun project! Strange that I did it for an AI 
    class though.<br><br>
    Completed in September 2024.`,
    tags: [
      { name: "Academic", icon: academic_image_url }
    ]
  },
  {
    id: "2024.F",
    title: "Library Application",
    embedURL: "https://www.youtube.com/embed/GtxW2Pa59JM?si=ycB1MUhMc06g5lDL",
    description: `This is a \"terminal use only\" database application which acts similarly to Goodreads. In 
    our PostgreSQL database (using DataGrip), we utilized relations to store records for users, books, 
    contributors, formats, genres, and the many relationships between these entities. Most notably, I worked 
    on the ENORMOUS \"foryou\" recommendation algorithm, but I also worked on the user's relationships with 
    books (reading & rating) and viewing collections made by users.<br><br>
    Completed in May 2024.`,
    tags: [
      { name: "Collaborative", icon: collaborative_image_url },
      { name: "Academic", icon: academic_image_url }
    ]
  },
  {
    id: "2024.E",
    title: "E-Store Website",
    imageURL: "../assets/SWEN261_Project_Architecture.png",
    description: `In a group, I helped build an almost full-stack product website called \"PARTY ROCKERS\" 
    where we sold rare and common rocks alike (not really). We built it using Angular Typescript for the 
    frontend and Java Spring Boot as the backend, with our database being simply JSON. We utilized an MVVM 
    architecture where Angular Services sent HTTP CRUD operations to the REST API controllers, then performed 
    business logic in the model classes. My role was to work on the shopping cart's functionality and the 
    customization of items when purchasing.<br><br>
    Completed in April 2024.`,
    tags: [
      { name: "Collaborative", icon: collaborative_image_url },
      { name: "Academic", icon: academic_image_url },
      { name: "Interactive", icon: interactive_image_url }
    ]
  },
  {
    id: "2024.D",
    title: "Steganography Study",
    embedURL: "https://www.youtube.com/embed/hU_J4XllEVw?si=coIv8eTnceEjNOCR",
    description: `Made as the second project for my Codes and Ciphers class, we were allowed to do free 
    study on any related topic to Cryptography and create a presentation on it. Since I've always had an 
    interest in Steganography, I decided to go for it, and this video is the result. I hope you find it 
    interesting too!<br><br>
    Completed in April 2024.`,
    tags: [
      { name: "Academic", icon: academic_image_url },
      { name: "Cinematic", icon: cinematic_image_url }
    ]
  },
  {
    id: "2024.C",
    title: "Manual Cipher",
    embedURL: "../assets/math367h_project1_1.pdf",
    description: `Made as the first project for my Codes and Ciphers class, we designed a cipher that could 
    be manually encrypted and decrypted, i.e. no computers. I say \"we\", but my groupmate did most of the 
    designing and I reviewed his designs. We eventually decided on a transposition cipher plus a modified 
    playfair cipher with many different moving parts. After designing the cipher, each group sent a few 
    plaintexts (some <i>including</i> their decryptions) to other groups to see if they could decrypt them. 
    In the end, though, it was worth it, as the opposing group was unable to figure out our secret keys 
    even WITH a known plaintext.<br><br>
    Completed in March 2024.`,
    tags: [
      { name: "Collaborative", icon: collaborative_image_url },
      { name: "Academic", icon: academic_image_url },
    ]
  },
  {
    id: "2024.B",
    title: "CV Pong",
    embedURL: "https://www.youtube.com/embed/Wxmrrak4a8s?si=jHOAj0Z77ORbtrcB",
    description: `Made in a group for Brickhack X, this is a simple recreation of the classic game Pong but 
    you control it with your pointer finger. We used OpenCV, Mediapipe, then PyGame to get it working. My
    contributions were building the hand detection with OpenCV and Mediapipe while my groupmates built Pong
    in PyGame controlled with the mouse. Then, I integrated my hand detection into the game. More details
    <a href=\"https://devpost.com/software/cv-pong\">here.</a><br><br>
    Completed in February 2024.`,
    tags: [
      { name: "Collaborative", icon: collaborative_image_url },
      { name: "Interactive", icon: interactive_image_url }
    ]
  },
  {
    id: "2024.A",
    title: "Celeste in GD",
    embedURL: "https://www.youtube.com/embed/gyzCcu4gf58?si=y_tVr_9a8lrbgIYS&amp;start=375",
    description: `When Geometry Dash 2.2 released in December, I was overwhelmed with ideas of what could be 
    made in it now. The platformer mode and camera controls were incredible tools. With the release of 2.2, 
    and my previous enjoyment of the artstyle and advanced movement mechanics in the game Celeste, I had a huge 
    inspiration to remake the first chapter from Celeste in Geometry Dash. And so I did it. I remade all of 
    the assets, placed them in their exact spots, and many energy drinks later, it was finished.<br><br>
    Completed in January 2024.`,
    tags: [
      { name: "Interactive", icon: interactive_image_url },
    ]
  }
];

/* tags: [
  { name: "Collaborative", icon: collaborative_image_url },
  { name: "Academic", icon: academic_image_url },
  { name: "Interactive", icon: interactive_image_url },
  { name: "Cinematic", icon: cinematic_image_url }
] */

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

  // Make sure they're visible
  projectTitleElem.style.display = 'block';
  projectTagsElem.style.display = 'block';
  projectYearElem.style.display = 'block';
  projectEmbedElem.style.display = 'block';
  projectDescElem.style.display  = 'block';

  // Set text/HTML from the project object
  projectTitleElem.textContent = project.title;
  projectTagsElem.innerHTML = "";
  project.tags.forEach(tag => {
    const img = document.createElement("img");
    img.src = tag.icon;
    img.alt = tag.name;
    img.title = tag.name;
    img.classList.add("tag-icon"); // For styling
    projectTagsElem.appendChild(img);
  });
  projectYearElem.textContent  = project.id;
  
  if (project.imageURL)
    projectEmbedElem.innerHTML = `<img src="${project.imageURL}" alt="${project.title}" style="width: 100%; border-radius: 10px;">`;
  else if (project.embedURL) {
    // add border to certain embeds only
    if (project.id === "2024.C" || project.id === "2024.G" || project.id === "2024.H" || project.id === "2025.B")
      projectEmbedElem.innerHTML = `<iframe src="${project.embedURL}" style="border: 1px solid var(--curModeTextSelected);" allowfullscreen></iframe>`;    
    else
      projectEmbedElem.innerHTML = `<iframe src="${project.embedURL}" allowfullscreen></iframe>`;
   
  }

  projectDescElem.innerHTML  = project.description;
}