async function cargarHtml(pagina){
    try {
        const response = await fetch(pagina);
        if (!response.ok) throw new Error("No se ha podido cargar el contenido");
        const contenido = await response.text();
        document.getElementById("contenido-html").innerHTML = contenido;
    } catch (error) {
        document.getElementById("contenido-html").innerHTML = `<p>Error al cargar la página: ${error.message}</p>`;
    }
}

window.onload = cargarHtml("principal.html");