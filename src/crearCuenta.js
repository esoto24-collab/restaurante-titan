const btnCrearCuenta = document.querySelector("#crear-cuenta");
const main = document.querySelector("#main");

const inputs = {
    nombre: {
        type: 'text',
        id: 'name'
    },

    edad: {
        type: 'number',
        id: 'age'
    },

    email:{
        type: 'email',
        id: 'email'
    }
}


const cajita = (dato) => {
    console.log(dato);
    const label = document.createElement("label");
    label.textContent= dato.id


    const input = document.createElement("input")
    input.type = dato.type
    input.required = true
    input.name= dato.id
    input.id= dato.id

    label.appendChild(input)
    return label
}

const formulario = () => {
    const div = document.createElement("div");

    const titulo = document.createElement("h2");
    titulo.textContent="Crear Cuenta";

    const form = document.createElement("form")
    const btnSubmit = document.createElement("button")
    btnSubmit.type="submit"
    btnSubmit.textContent="Guardar"


    for(const clave in inputs){
        form.appendChild(cajita(inputs[clave]))
    }

    form.appendChild(btnSubmit)
    div.appendChild(titulo)
    div.appendChild(form)

    return div

}

btnCrearCuenta.addEventListener("click",()=>{
    main.innerHTML=""
    main.classList.remove("main-inicio");
    main.classList.add("main-formulario");
    main.appendChild(formulario())


})