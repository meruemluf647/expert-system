console.log("Bonjour tout le monde !");
alert("Bienvenue dans le projet by Lord Meruem !");

let protection = confirm("Voulez-vous activer la protection des données ?");
if (protection) {
  console.log("La protection des données est activée.");
} else {
  console.log("La protection des données n'est pas activée.");
}

let produit = "bot WhatsApp";
console.log("Le produit sélectionné est : " + produit);

let prix = 49.99;
console.log("Le prix du produit est de : " + prix + " euros.");

let enStock = true;
if (enStock) {
  console.log("Le produit est en stock.");
} else {
  console.log("Le produit est en rupture de stock.");
}

let reduction = 10;
let prixReduit = prix - (prix * reduction / 100);

if (reduction < 0) {
  console.log("La réduction ne peut pas être négative.");
} else {
  console.log("Le prix réduit est de : " + prixReduit + " euros.");
}

/* Mode clair / sombre */
let sombre = true;

function toggleMode() {
  const container = document.querySelector(".container");

  if (sombre) {
    document.body.style.color = "#020617";
    if (container) {
      container.style.background = "rgba(255,255,255,0.85)";
      container.style.color = "#020617";
    }
  } else {
    document.body.style.color = "#e5e7eb";
    if (container) {
      container.style.background = "rgba(2, 6, 23, 0.85)";
      container.style.color = "#e5e7eb";
    }
  }

  sombre = !sombre;
}

/* Musique + effet vidéo */
document.addEventListener("DOMContentLoaded", () => {
  const btnMusic = document.getElementById("play-music");
  const music = document.getElementById("bg-music");
  const container = document.querySelector(".container");
  const video = document.getElementById("bg-video");

  if (!btnMusic || !music) {
    console.error("Bouton ou musique introuvable");
    return;
  }

  btnMusic.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btnMusic.textContent = "⏸️ Pause musique";

      // Effet glow
      if (container) {
        container.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
        container.style.transform = "scale(1.03)";
        container.style.boxShadow = "0 0 40px rgba(59,130,246,0.7)";
      }

      // Vidéo plus claire
      if (video) {
        video.style.filter = "blur(0px) brightness(1.1)";
      }

    } else {
      music.pause();
      btnMusic.textContent = "▶️ Lancer la musique";

      if (container) {
        container.style.transform = "scale(1)";
        container.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
      }

      if (video) {
        video.style.filter = "blur(1px) brightness(0.85)";
      }
    }
  });
});
