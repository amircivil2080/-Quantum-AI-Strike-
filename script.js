document.addEventListener("keydown", function(event) {
    if (event.key === "M") { // فشار دادن کلید M برای فعال شدن نود مخفی
        window.open("https://your-hidden-node-link.com", "_blank");
    }
});

document.addEventListener("click", function() {
    document.getElementById("darkSound").play();
}, { once: true });
