const baseURL = 'https://razak777.github.io/portfolio/';

// Function to reveal elements on scroll
function revealOnScroll() {
    const fades = document.querySelectorAll('.fade');
    fades.forEach(fade => {
        const top = fade.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 50) {
            fade.classList.add('show');
        }
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    revealOnScroll();

    // Load Skills
    fetch(baseURL + 'skills.json')
    .then(res => res.json())
    .then(skills => {
        const container = document.getElementById('skills-container');
        skills.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'card';
            div.textContent = skill.name;
            container.appendChild(div);
        });
    });

    // Load Projects
    fetch(baseURL + 'projects/projects.json')
    .then(res => res.json())
    .then(projects => {
        const container = document.getElementById('projects-container');
        projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `
                <img src="${baseURL}projects/${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            container.appendChild(div);
        });
    });

    // Load Certificates
    fetch(baseURL + 'certificates/certificates.json')
    .then(res => res.json())
    .then(certs => {
        const container = document.getElementById('certificates-container');
        certs.forEach(cert => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `
                <img src="${baseURL}certificates/${cert.image}" alt="${cert.title}">
                <h3>${cert.title}</h3>
            `;
            container.appendChild(div);
        });
    });
});
