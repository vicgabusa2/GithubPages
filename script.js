let clics = 0;

document.getElementById("boton").addEventListener("click", () => {
  clics++;
  document.getElementById("contador").textContent = `Clics: ${clics}`;
});

document.getElementById("fecha").textContent = new Date(document.lastModified).toLocaleDateString("es");
