let pesel = document.getElementById("PESEL");
let zipCode = document.getElementById("zip");

pesel.addEventListener("focusout", validatePESEL);
zipCode.addEventListener("focusout", validateZip);


function validatePESEL() {
    if (pesel.value.length != 11) {
        pesel.classList.add("wrong-input");
    } else {
        pesel.classList.remove("wrong-input");
    }
}

function validateZip() {
    if (zipCode.value.length != 6) {
        zipCode.classList.add("wrong-input");
    } else {
        zipCode.classList.remove("wrong-input");
    }
}

function validateGlass(glass) {
    var regex = new RegExp("");
    var regex = new RegExp("e");
    var regex = new RegExp("e");
    var regex = new RegExp("e");
    var isValid = regex.test(glass);

}