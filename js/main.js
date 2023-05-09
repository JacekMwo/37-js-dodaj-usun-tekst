const paragraf = document.getElementById("tekst");
const buttonDodaj = document.getElementById("dodaj");
const buttonUsun = document.getElementById("usun");

buttonDodaj.addEventListener("click", () => {
    paragraf.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis velit aut iure suscipit expedita repellat voluptatum, repellendus earum facilis! Voluptatibus!";
});

buttonUsun.addEventListener("click", () => {
    paragraf.innerText = "";
});
