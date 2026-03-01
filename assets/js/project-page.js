let galleryBig = document.getElementById("gallery-big");
let galleryList = document.getElementById("gallery-list");

function selectElement(element) {
    if (element.classList.contains("selected")) return;
    try {
        galleryList.querySelector(".selected").classList.remove("selected");
    }
    catch (TypeError) {};
    element.classList.add("selected");

    try {
        galleryBig.querySelector(".selected").classList.remove("selected");
    }
    catch (TypeError) {};

    galleryBig.querySelectorAll(".gallery-big-element").forEach((el) => {
        if (el.dataset.id == element.dataset.id) {
            el.classList.add("selected");
        }
    })
}

galleryList.querySelectorAll(".gallery-asset").forEach((el, index) => {
    el.dataset.id = index;
    el.addEventListener("click",() => {selectElement(el)});
    if (el.classList.contains("gallery-image")) {
        el.src = el.dataset.src;
    }
    else if (el.classList.contains("gallery-video")) {
        if (el.dataset.src.includes("youtube")) {
            videoID = el.dataset.src.slice(el.dataset.src.indexOf("/embed/") + 7);
            el.src = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
        }
    }
    if (el.classList.contains("gallery-image")) {
        imgBig = document.createElement("img");
        imgBig.src = el.dataset.src;
        imgBig.classList.add("gallery-big-element");
        imgBig.dataset.id = index;
        galleryBig.appendChild(imgBig);
    }
    else if (el.classList.contains("gallery-video")) {
        videoBig = document.createElement("iframe");
        videoBig.src = el.dataset.src;
        videoBig.frameBorder = "0";
        videoBig.allowFullscreen = true;
        videoBig.classList.add("gallery-big-element");
        videoBig.dataset.id = index;
        galleryBig.appendChild(videoBig);
    }

    if (index == 0) selectElement(el);
})