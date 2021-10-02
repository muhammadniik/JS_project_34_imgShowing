const imagHolder = document.querySelector(".imgHolder");
const imag1 = imagHolder.children[0];
const imagInput = document.querySelector("#file");


imagInput.addEventListener("change", function() {

    let man = this.files[0];
    if (man) {
        const reader = new FileReader();
        reader.readAsDataURL(man);
        reader.addEventListener("load", function() {
            imag1.src = this.result;
            imagHolder.classList.add("active");
        })
    } else {
        imag1.src = "";
        imagHolder.classList.remove("active");
    }
})