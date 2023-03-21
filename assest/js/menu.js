

const menuHTML = document.querySelector(".fa-ellipsis-vertical")
const clostHTML = document.querySelector(".fa-circle-xmark")
const addMenu = document.querySelector("header")


menuHTML.addEventListener("click", function () {
    addMenu.classList.toggle("header-menu")
})

clostHTML.addEventListener("click", function () {
    addMenu.classList.toggle("header-menu")
})
