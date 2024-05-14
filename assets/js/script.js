document.addEventListener("DOMContentLoaded", function () {
  const usuario = localStorage.getItem("usuario");

  if (!usuario && window.location.pathname !== "/index.html") {
    window.location.href = "index.html";
  } else {
    let form = document.querySelector("form");

    if (form) {
      let inputEmail = document.querySelector('input[type="text"]');
      let inputPassword = document.querySelector('input[type="password"]');

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = inputEmail.value;
        let password = inputPassword.value;

        if (email === "invitado@test.com" && password === "invitado") {
          localStorage.setItem("usuario", email);
          localStorage.setItem("username", "Jhon Doe");
          window.location.href = "./src/app/views/home.html";
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      });
    }

    const user = getUser(this.usuario);
  }
});

function getUser() {
  const usuario = localStorage.getItem("username");
  const userElement = document.getElementById("user");

  if (userElement) {
    userElement.textContent = usuario;
  }
}

function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "../../index.html";
}

let videos = [
  {
    thumbnail: "../../.../../../assets/img/thumnails.png",
    description: "1. Video - Beneficios del reciclaje",
    observation: "Video ya visto",
    progress: 100,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "2. Video - Importancia del reciclaje",
    observation: "Video ya visto",
    progress: 100,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "3. Video - Separación de residuos",
    observation: "Ultimo video visto",
    progress: 25,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "4. Video - Reciclaje de papel",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "5. Video - Reciclaje de plástico",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "6. Video - Reciclaje de vidrio",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "7. Video - Reciclaje de metal",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "8. Video - Compostaje",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "9. Video - Eco-empaquetado",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "10 Video - Energía renovable",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "11. Video - Gestión de residuos peligrosos",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "12. Video - Reciclaje electrónico",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "13. Video - Programas de reciclaje locales",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "14. Video - Educación ambiental",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "15. Video - Normativas y regulaciones",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "16. Video - Impacto ambiental de los residuos",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "17. Video - Responsabilidad individual",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "18. Video - Iniciativas de reciclaje en el trabajo",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "19. Video - Innovaciones en reciclaje",
    observation: "Video no visto",
    progress: 0,
  },
  {
    thumbnail: "../../../assets/img/thumnails.png",
    description: "20. Video - Impacto ambiental de los residuos",
    observation: "Video no visto",
    progress: 0,
  },
];

let html = "";

var container = document.querySelector(".video-container");

// Bucle a través de los datos de los videos
for (let i = 0; i < videos.length; i++) {
  // Generar el código HTML para la descripción del video
  let html = `
      <div class="video-description">
          <div class="icon">
          <img src="${videos[i].thumbnail}" alt="Thumbnail del video" width="80px">
              <span class="material-symbols-outlined">
                  play_circle
              </span>
          </div>
          <div class="description">
            <span class="progress">
                ${videos[i].progress}%
                <div class="progress-bar" role="progressbar" style="width: ${videos[i].progress}%;" aria-valuenow="${videos[i].progress}"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </span>
              <div class="text-description">${videos[i].description}</div>
              <div class="text-observation">${videos[i].observation}</div>
              <button type="button" class="btn btn-secoundary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ver video
              </button>
          </div>
      </div>
      <hr>
  `;

  container.insertAdjacentHTML("beforeend", html);
}
