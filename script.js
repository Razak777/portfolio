const jsonURL = "https://raw.githubusercontent.com/Razak777/portfolio/main/data/portfolioData.json";

fetch(jsonURL)
  .then(response => response.json())
  .then(data => {
    // Skills
    const skillsList = document.getElementById("skills-list");
    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Certifications
    const certContainer = document.getElementById("certificates-container");
    data.certifications.forEach(cert => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${cert.image}" alt="${cert.title}">
        <h3>${cert.title}</h3>
        <p>Issuer: ${cert.issuer}</p>
        <p>Date: ${cert.date}</p>
      `;
      certContainer.appendChild(card);
    });

    // Projects
    const projectContainer = document.getElementById("projects-container");
    data.projects.forEach(proj => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <video controls src="${proj.video}"></video>
      `;
      projectContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
