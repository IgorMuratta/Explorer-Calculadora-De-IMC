
export const Alert = {
    alertCard: document.querySelector(".alert"),
    open: () => {
        Alert.alertCard.classList.remove("open");
    },
    close: () =>{
        Alert.alertCard.classList.add("open");
    }
}

