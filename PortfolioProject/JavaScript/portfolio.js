// portfolio.js

// Project data
const projects = {
    "AI": [
        {
            title: "Artificial Neural Network",
            description: "Developed a simple Artificial Neural Network using Python and TensorFlow to classify handwritten digits from the MNIST dataset.",
            links: { github: "https://github.com/example/ann", projectPage: "ai/ann.html" }
        }
    ],

    "web-engineering": [
        {
            title: "Portfolio Website",
            description: "A responsive portfolio showcasing web development skills.",
            links: { github: "https://github.com/example/portfolio" }
        }
    ],
    "software-engineering": [
        {
            title: "Digital Parking lot System",
            description: "A digital Parking lot system.",
            links: { github: "https://github.com/example/parkinglot" }
        },
        {
            title: "Coll@H-BRS",
            description: "A job offer collaborating platform for Job-seeking Students of H-BRS and Companies",
            links: { github: "https://github.com/example/coll@H-BRS" }
        }
    ]
};

// Open modal and load projects
function openModal(section) {
    const modal = document.getElementById("projectModal");
    const modalProjects = document.getElementById("modal-projects");
    const modalTitle = document.getElementById("modal-title");
    const spinner = document.getElementById("loading-spinner"); // Assuming you have a loading spinner element with this ID

    modalTitle.textContent = `${section.replace("-", " ")} Projects`;
    modalProjects.innerHTML = "";
    spinner.style.display = "block"; // Show loading spinner
    modal.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none"; // Hide spinner after loading

        projects[section].forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
        <h3><span class="math-inline">\{project\.title\}</h3\>
<p\></span>{project.description}</p>
        <div class="links">
          ${project.links.github ? `<a href="${project.links.github}" target="_blank">GitHub</a>` : ""}
          ${project.links.website ? `<a href="${project.links.website}" target="_blank">Website</a>` : ""}
          ${project.links.projectPage ? `<a href="${project.links.projectPage}">Project Page</a>` : ""} 
        </div>
      `;

            modalProjects.appendChild(projectCard);
        });
    }, 1000); // Simulate loading delay (adjust as needed)
}

// Close modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Toggle theme (light/dark)
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}