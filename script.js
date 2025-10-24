// Load About Info
fetch('data/about.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.description;
  });

// Load Skills
fetch('data/skills.json')
  .then(response => response.json())
  .then(skills => {
    const skillsContainer = document.getElementById('skills');
    skills.forEach(skill => {
      const div = document.createElement('div');
      div.classList.add('skill-card');
      div.innerHTML = `
        <img src="${skill.image}" alt="${skill.name}">
        <p>${skill.name}</p>
      `;
      skillsContainer.appendChild(div);
    });
  });

// Load Certifications
fetch('data/certifications.json')
  .then(response => response.json())
  .then(certifications => {
    const certContainer = document.getElementById('certifications');
    certifications.forEach(cert => {
      const div = document.createElement('div');
      div.classList.add('cert-card');
      div.innerHTML = `
        <img src="${cert.image}" alt="${cert.title}">
        <p>${cert.title}</p>
      `;
      certContainer.appendChild(div);
    });
  });
