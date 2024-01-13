function comenzar() {
    const modal_btn1 = document.getElementById("modal-btn1");
    const modal_btn2 = document.getElementById("modal-btn2");
    const modal_container = document.getElementById("modal-container");
    modal_btn1.addEventListener("click", () => createModal(modal_container, '<h3>Abrir modal</h3>'), false);
    modal_btn2.addEventListener("click", () => createModal(modal_container, '<h3>Abrir modal 2</h3>'), false);

}

function createModal(container, content = "contenido diverso") {
    container.innerHTML = `
        <div class="modal" id="modal">
            <div class="modal-content">${content}
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

window.addEventListener("load", comenzar, false);