// Dummy project data
const projects = {
    "web-engineering": [
        {
            title: "Portfolio Website",
            description: "A responsive portfolio showcasing web development skills.",
            links: { github: "https://github.com/example/portfolio" }
        },
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce app built with React and Node.js.",
            links: { website: "https://example.com" }
        }
    ],
    "software-engineering": [
        {
            title: "AI Chatbot",
            description: "An AI-powered chatbot using Python and TensorFlow.",
            links: { github: "https://github.com/example/chatbot" }
        }
    ]
};

// Open modal and load projects
function openModal(section) {
    const modal = document.getElementById("projectModal");
    const modalProjects = document.getElementById("modal-projects");
    const modalTitle = document.getElementById("modal-title");
    const spinner = document.getElementById("loading-spinner");

    modalTitle.textContent = `${section.replace("-", " ")} Projects`;
    modalProjects.innerHTML = "";
    spinner.style.display = "block"; // Show loading spinner
    modal.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none"; // Hide spinner after loading

        projects[section].forEach(project => {
            modalProjects.innerHTML += `
        <div class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="links">
            ${
                project.links.github
                    ? `<a href="${project.links.github}" target="_blank">GitHub</a>`
                    : ""
            }
            ${
                project.links.website
                    ? `<a href="${project.links.website}" target="_blank">Website</a>`
                    : ""
            }
          </div>
        </div>
      `;
        });
    }, 1000); // Simulate loading delay
}

// Close modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Toggle theme (light/dark)
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}