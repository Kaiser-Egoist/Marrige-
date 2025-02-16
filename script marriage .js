document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    const message = document.getElementById("message");
    let clickCount = 0;

    const teasingMessages = [
        "Oh no, you can't escape! ",
        "Hey! Why are you running? ",
        "The 'Yes' button is right there! ",
        "Come on, say YES already! ",
        "You know you want to! ",
        "Don't make me chase you! ",
    ];

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // Show teasing messages
        const randomTease = teasingMessages[Math.floor(Math.random() * teasingMessages.length)];
        message.innerText = randomTease;
    });

    noBtn.addEventListener("click", () => {
        const messages = [
            "Are you sure? ",
            "But I love you so much! ",
            "I'll be the best husband ever! ",
            "Think again, love! ",
            "Okay, but... are you 100% sure? ",
        ];
        if (clickCount < messages.length) {
            message.innerText = messages[clickCount];
            clickCount++;
        } else {
            message.innerText = "You have no choice but to say YES! ";
            noBtn.style.display = "none";
        }
    });

    yesBtn.addEventListener("click", () => {
        document.body.innerHTML = `
            <div class="container">
                <h1>YAY!  I love you, Mora! </h1>
                <img src="https://i.imgur.com/Vd8uO7J.gif" alt="Hug Gif">
                <p>We are going to be so happy together! </p>
                <button id="back-btn">Back to Proposal</button>
            </div>
        `;

        document.getElementById("back-btn").addEventListener("click", () => {
            location.reload();
        });
    });

    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "";
        heart.classList.add("floating-heart");
        document.body.appendChild(heart);
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
});