document.addEventListener("DOMContentLoaded", () => {

    const logo = document.querySelector(".logo");

    let glow = 0;

    setInterval(() => {
        glow += 0.05;
        const intensity = Math.sin(glow) * 10 + 25;
        logo.style.textShadow = `0 0 ${intensity}px rgba(255,255,255,0.5)`;
    }, 50);

});
