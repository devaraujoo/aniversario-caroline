/* 📝 TEXTO DA CARTA */
const letterText = `Prezado(a) Bruxo(a),

É com grande honra que informamos
que você foi convocado(a)
para celebrar mais um ano de vida.

Sua mente curiosa, criativa e sábia
ecoou pelos corredores de Hogwarts.

Prepare-se para uma nova jornada.

Atenciosamente,
Escola de Magia e Bruxaria de Hogwarts`;

let index = 0;
const textBox = document.getElementById("text");

(function typeWriter() {
  if (index < letterText.length) {
    textBox.innerHTML += letterText.charAt(index++);
    setTimeout(typeWriter, 35);
  }
})();

/* 📜 Abrir carta */
function openLetter() {
  const letter = document.getElementById("letter");
  letter.classList.add("opening");

  setTimeout(() => {
    letter.style.display = "none";
    document.getElementById("story").classList.remove("hidden");
    document.body.classList.add("corvinal");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1800);
}

/* 🎵 Música */
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

btn.onclick = () => {
  music.paused ? (music.play(), btn.textContent="⏸️") 
               : (music.pause(), btn.textContent="🎵");
};

/* 🪄 Penas mágicas */
const canvas = document.getElementById("magic");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const feathers = Array.from({ length: 35 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 20 + 10,
  speed: Math.random() * 0.6 + 0.3,
  drift: (Math.random() - 0.5) * 0.4,
  rot: Math.random() * 360
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  feathers.forEach(f => {
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.rot * Math.PI / 180);
    ctx.fillStyle = "rgba(127,183,255,0.7)";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.quadraticCurveTo(5,-f.size,0,-f.size*2);
    ctx.quadraticCurveTo(-5,-f.size,0,0);
    ctx.fill();
    ctx.restore();

    f.y += f.speed;
    f.x += f.drift;
    f.rot += 0.2;

    if (f.y > canvas.height + 50) {
      f.y = -50;
      f.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}
animate();

/* 🎇 Explosão final */
function magicExplosion() {
  for (let i = 0; i < 140; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = "50%";
    spark.style.top = "50%";
    spark.style.setProperty("--x", `${(Math.random()-0.5)*700}px`);
    spark.style.setProperty("--y", `${(Math.random()-0.5)*700}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 2000);
  }
}
