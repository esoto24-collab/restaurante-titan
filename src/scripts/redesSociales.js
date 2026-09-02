const redes = ['discord', 'youtube', 'instagran', 'github', 'facebook', 'twitter'];
const socialMedia = document.querySelector('#socialMedia');

const generarRedLink = (i)=> {
    const link = document.createElement("a")
    link.href="https://github.com/esoto24-collab/restaurante-titan/tree/rama-sensacion"
    link.target="_blank"
    const icon = document.createElement("div");
    icon.classList.add("icon")
    icon.classList.add(redes[i])
    link.appendChild(icon)
    return link
}

socialMedia.innerHTML=""
for(let i=0; i<redes.length; i++){
    socialMedia.appendChild(generarRedLink(i))
}



