export default class View {
    constructor(controller) {
        const self = this;
        const snSearchForm = document.getElementById("snSearchForm");
        const snField = document.getElementById("snField");
        const showAllGuitarsButton = document.getElementById("showAllGuitarsButton");
        const guitarDialogForm = document.getElementById("guitarDialogForm");
        const addGuitarButton = document.getElementById("addGuitarButton");
        const guitarDialog = document.getElementById("guitarDialog");
        const cancelButton = document.getElementById("cancelButton");
        


        self.controller = controller;

        showAllGuitarsButton.onclick = function() {
            self.controller.showAllGuitars();
        }

        snSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(snField.value);

        }
        // Dialog eventhandler//
        addGuitarButton.onclick = function () {
            guitarDialogForm.reset();
            guitarDialog.showModal();
        }

        cancelButton.onclick = function () {
            guitarDialog.close();

        }

        guitarDialogForm.onsubmit = function () {
            self.controller.newGuitar ({
                serialNumber: document.getElementById("snfield").value,
                builder: document.getElementById("builderfield").value,
                model: document.getElementById("modelfield").value,
                type: document.getElementById("typefield").value,
                backwood: document.getElementById("backwoodfield").value,
                topwood: document.getElementById("topwoodfield").value,
                price: parseFloat(document.getElementById("pricefield").value)
            })
        }

    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; // resets result output element
        element.insertAdjacentHTML("beforeend", template);

    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className=snackbar.className.replate("show", "");

        },3000);
        
    }

}