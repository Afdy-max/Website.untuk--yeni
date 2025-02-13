function toggleEnvelope() {
  let container = document.querySelector(".container");
  container.classList.toggle("open");
  createFlowers();
}
document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("myAudio");
  audio.muted = false; // Mengaktifkan suara setelah halaman dimuat
});
document.addEventListener("click", function playAudio() {
  let audio = document.getElementById("myAudio");
  audio.play().catch((error) => console.log("Autoplay gagal:", error));

  // Hapus event listener setelah audio diputar agar tidak dipanggil berulang kali
  document.removeEventListener("click", playAudio);
});
