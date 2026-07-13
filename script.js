const btn = document.getElementById("startBtn");
const player = document.getElementById("player");
const video = document.querySelector("video");
const message = document.querySelector(".message");

const messages = [

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Congratulations! You've officially been coupled up with the Love Island USA finale. Please proceed directly to the nearest comfy seat."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Your streaming service has arrived. (It's me. I'm the streaming service.)"`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Airport Wi-Fi has been dumped from the island. Enjoy your uninterrupted finale."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Emergency viewing material has been successfully delivered. Snacks are now required."`,

`📱 <strong>I GOT A TEXT!</strong><br><br>
"Tonight's recoupling is between you... and this episode."`

];

btn.addEventListener("click", () => {

    btn.textContent = "🏝️ Entering the villa...";

    setTimeout(() => {

        btn.style.display = "none";
        player.classList.remove("hidden");

        message.innerHTML =
            messages[Math.floor(Math.random() * messages.length)];

        video.play();

    }, 1200);

});
