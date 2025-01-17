const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function (e){

    const postX = e.clientX;
    const postY = e.clientY;

    cursorDot.style.left = `${postX}px`;
    cursorDot.style.top = `${postY}px`;

    cursorOutline.style.left = `${postX}px`;
    cursorOutline.style.top = `${postY}px`;

    cursorOutline.animate({
        left: `${postX}px`,
        top: `${postY}px`
        }, {duration: 500, fill: "forwards"}

    );
})