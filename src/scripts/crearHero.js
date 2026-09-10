import crearMenu from "./crearMenu.js";

const crearHero = ()=>{
     const hero = document.querySelector('#hero');
     hero.textContent="SIN COMIDA NO HAY GLORIA";
     const button = document.createElement("button");
     button.id = "btn_menu";
     button.addEventListener("click",crearMenu);
     button.textContent="VER MENU";
     hero.appendChild(button);
}



export default crearHero;