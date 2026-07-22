// Pesan romantis
const message = `
Happy 5 Months Sayangg 🤍

Terima kasih sudah hadir di hidupku.
Terima kasih sudah membuat hari-hariku menjadi lebih indah.

Aku berharap kita selalu bersama,
saling menjaga,
saling menguatkan,
dan terus menciptakan kenangan indah.

I Love You More,
Patricia Nimahh Pratiwi ❤️
`;

let i = 0;
const text = document.getElementById("typing");

function typeWriter() {
    if (text && i < message.length) {
        text.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

window.onload = () => {
    typeWriter();
    createHearts();
};

// Tombol Open My Heart
const btn = document.getElementById("openBtn");

if (btn) {
    btn.onclick = () => {
        alert("🤍 I Love You More Patricia Nimahh Pratiwi 🤍");
    };
}

// Efek hati beterbangan
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "🤍";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-30px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.opacity = "0.8";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 6s linear, opacity 6s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(${window.innerHeight + 100}px)`;
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 300);

}
