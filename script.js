const music = document.getElementById("bgMusic");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* 🎵 Music starts on first tap */
function startMusic() {
  music.volume = 0.7;
  music.play().catch(() => {});
  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

/* 😈 Move NO button */
function moveNo() {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 220 - 110;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* 💖 YES → loading → SPECIAL MESSAGE */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:#fff0f5;
      font-family:Arial;
      text-align:center;
    ">
      <h2 style="color:#ff5fa2;">Processing your YES 💖</h2>
      <p>Please wait… 🥹</p>

      <div style="
        width:220px;
        height:14px;
        border-radius:10px;
        background:#ffd6e8;
        overflow:hidden;
      ">
        <div id="loader" style="
          width:0%;
          height:100%;
          background:#ff5fa2;
          transition:width 3s;
        "></div>
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById("loader").style.width = "100%";
  }, 100);

  setTimeout(() => {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:#fff0f5;
        font-family:Arial;
        text-align:center;
        padding:20px;
      ">
        <img src="photo.jpg" style="
          width:170px;
          height:170px;
          border-radius:50%;
          border:5px solid #ff5fa2;
          margin-bottom:15px;
        ">

        <h1 style="color:#ff5fa2;">💖 YAYYYYY 💖</h1>

        <div class="special-message">
          From the moment you came into my life, everything felt brighter.<br>
          Your smile, your kindness, the way you make ordinary moments special —<br>
          it all means more to me than words can say.<br><br>
          I don’t just want today… I want all my days with you 💕
        </div>

        <p style="margin-top:10px;color:#ff5fa2;font-weight:bold;">
          Always yours ❤️
        </p>
      </div>
    `;
  }, 3500);
});

/* 💕 Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 350);
