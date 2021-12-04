const openModalBtn = document.querySelector("#open__modal-btn");
const closeModalBtn = document.querySelector("#close__modal-btn");
const korzinka = document.querySelector("#korzinka");
const buyBtns = document.querySelectorAll("#buy__btn");
const productCards = document.querySelectorAll(".product__card")
const korzinkaContent = document.querySelector(".korzinka__cards")

openModalBtn.addEventListener("click", () => {
    korzinka.classList.add("visible");
})
closeModalBtn.addEventListener("click", () => {
    korzinka.classList.remove("visible");
})
buyBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        const newCard = document.createElement("div");
        newCard.innerHTML = `
            <img src="${btn.previousElementSibling.children[0].getAttribute("src")}" />
        `
        newCard.classList.add("korzinka__card");

        korzinkaContent.append(newCard)

        productCards[index].remove()

    })
})