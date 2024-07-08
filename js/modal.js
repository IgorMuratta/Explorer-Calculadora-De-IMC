export const Modal = {
    wrapper:  document.querySelector(".container-result"),
    btnClose:  document.querySelector(".button-close"),
    modalMsg: document.querySelector("h3"),
    messageAlert: document.querySelector(".alert"),

    open: () => {
        Modal.wrapper.classList.remove("open");
    },
    close: () => {
        Modal.wrapper.classList.add("open");
    },
   
};


Modal.btnClose.onclick = () =>{
    Modal.close();
}

window.addEventListener("keydown", (event) =>{
    if(event.key === 'Escape'){
        Modal.close();
    }
})