// Load Skills
fetch('skills.json')
.then(response => response.json())
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
fetch('projects/projects.json')
.then(response => response.json())
.then(projects => {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="projects/${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        container.appendChild(div);
    });
});

// Load Certificates
fetch('certificates/certificates.json')
.then(response => response.json())
.then(certificates => {
    const container = document.getElementById('certificates-container');
    certificates.forEach(cert => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<img src="certificates/${cert.image}" alt="${cert.title}">`;
        container.appendChild(div);
    });
});
