function comenzar() {
    const modal_btn1 = document.getElementById("modal-btn1");
    const modal_btn2 = document.getElementById("modal-btn2");
    const modal_container = document.getElementById("modal-container");
    modal_btn1.addEventListener("click", () => createModal(modal_container, '<h3>Abrir modal</h3><img src="compuBrain.jpg" alt="">', "modal-desdeArriba"), false);
    modal_btn2.addEventListener("click", () => createModal(modal_container, '<h3>Abrir modal 2</h3><a href="https://tianguis-de-plata-la-terminal.negocio.site/" target="_blank">Visita mi pagina</a>', "modal-desdeAbajo"), false);
}



function createModal(container, content = "contenido diverso", style = "") {
    container.innerHTML = `
        <div class="modal" id="modal">
            <div class="modal-content ${style}">${content}
                <button class="modal-btn-closed" id="modal_btn_closed">X</button>
            </div>
        </div>
    `;

    function closeModal() {
        container.innerHTML = "";
    }

    const modalElement = document.getElementById("modal");
    modalElement.addEventListener("click", (e) => {
        if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
            closeModal();
        }
    });
}

window.addEventListener("load", () => {
    const modalContainer = document.getElementById("modal-container");
    createModal(modalContainer, '<div><h3 class="modal-title">Modal de ventana emergente</h3><img src="compuBrain.jpg" alt=""><p class="modal-descripcion">Esta es la descripcion del modal<p><button class="modal-btn">BOTON NO click</button><a href="https://tianguis-de-plata-la-terminal.negocio.site/" target="_blank">Visita mi pagina</a></div>', "modal-aparecer");
});

window.addEventListener("load", comenzar, false);