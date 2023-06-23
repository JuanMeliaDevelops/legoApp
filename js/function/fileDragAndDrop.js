

const dropArea = document.getElementById("dropZone");
const dropBoton = dropArea.querySelector("button");
const dropText = dropArea.querySelector("span");
const inputImg = document.getElementById("img");
const imagenInput = document.getElementById("imagenInputFile");


dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();

    imagenInput.src = "imgs/icons/fileCloud.png";
    dropText.innerText = "Suelta la imagen dentro";
    dropBoton.style.display = "none";

});

dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault();

    imagenInput.src = "imgs/icons/fileUpload.png";
    dropText.innerHTML = `Arrastrar imagen <br> o`;
    dropBoton.style.display = "inline-block";

});


dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    imagenInput.src = "imgs/icons/fileConfirmed.png";
    dropText.innerHTML = `Imagen cargada. <br> Arrastrar otra imagen o `;
    dropBoton.style.display = "inline-block";

});







