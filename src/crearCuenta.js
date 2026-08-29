const btnCrearCuenta = document.querySelector("#crear-cuenta");
const main = document.querySelector("#main");

export const usuarios = []

const crearUsuario = (nombre,apellido,fecha_nacimiento,correo)=>{
    const getNombre = () => nombre
    const getApellido = () => apellido
    const getfecha_nacimiento = () => fecha_nacimiento
    const getCorreo = () => correo

    return{getNombre,getApellido,getfecha_nacimiento,getCorreo}

}

const generarTabla = ()=>{
    const tabla = document.createElement("table");
    tabla.style.border = "3px 3px solid black"
    const titulos = document.createElement("tr");

    const titulo1 = document.createElement("th");
    titulo1.textContent="Nombre"

    const titulo2 = document.createElement("th");
    titulo2.textContent="Apellido"

    const titulo3 = document.createElement("th");
    titulo3.textContent="Fecha de nacimiento"

    const titulo4 = document.createElement("th");
    titulo4.textContent="Correo"

    titulos.appendChild(titulo1)
    titulos.appendChild(titulo2)
    titulos.appendChild(titulo3)
    titulos.appendChild(titulo4)

    tabla.appendChild(titulos)

    for(let i=0; i<usuarios.length; i++){
        const fila = document.createElement("tr")
        const tdNombre = document.createElement("th")
        tdNombre.textContent=usuarios[i].getNombre()

        const tdApellido = document.createElement("th")
        tdApellido.textContent=usuarios[i].getApellido()

        const tdFecha_nacimiento = document.createElement("th")
        tdFecha_nacimiento.textContent=usuarios[i].getfecha_nacimiento()

        const tdCorreo = document.createElement("th")
        tdCorreo.textContent=usuarios[i].getCorreo()

        fila.appendChild(tdNombre)
        fila.appendChild(tdApellido)
        fila.appendChild(tdFecha_nacimiento)
        fila.appendChild(tdCorreo)

        tabla.appendChild(fila)
    }


     return tabla
}

const inputs = {
    nombre: {
        titulo: 'Nombre',
        type: 'text',
        id: 'name',
        placeholder: 'Ingresa tu nombre...'
    },

    apellido: {
        titulo: 'Apellido',
        type: 'text',
        id: 'apellido',
        placeholder: 'Ingresa tu apellido...'
    },

    fecha_nacimiento: {
        titulo: 'Fecha de nacimiento',
        type: 'date',
        id: 'date'
    },

    email:{
        titulo: 'Correo',
        type: 'email',
        id: 'email',
        placeholder: 'ejemplo@email.com'
    }
}


const cajita = (dato) => {
    console.log(dato);
    const label = document.createElement("label");
    label.textContent= dato.titulo

    const input = document.createElement("input")
    input.type = dato.type
    input.required = false
    input.name= dato.id
    input.id= dato.id
    dato.placeholder != undefined ? input.placeholder = dato.placeholder : input.placeholder = ''

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
    btnSubmit.id = 'subir'



    for(const clave in inputs){
        form.appendChild(cajita(inputs[clave]))
    }

    form.appendChild(btnSubmit)

    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        const nombre = document.querySelector("#name")
        const apellido = document.querySelector("#apellido")
        const date = document.querySelector("#date")
        const email = document.querySelector("#email")

        const usuario = crearUsuario(nombre.value,apellido.value,date.value,email.value);
        usuarios.push(usuario)

        nombre.value=""
        apellido.value=""
        date.value=""
        email.value=""

        main.innerHTML=""
        main.classList.remove("main-formulario");
        main.classList.add("main-tabla")
        main.appendChild(generarTabla())

    })
    
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


