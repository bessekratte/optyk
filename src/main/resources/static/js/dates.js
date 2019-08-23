let dataPrzyjecia = document.getElementById("data-przyjecia");
let terminWykonania = document.getElementById("termin-wykonania");
let dataWystawieniaZlecenia = document.getElementById("data-wystawienia-zlecenia");

dataPrzyjecia.addEventListener("focusout", validateDataPrzyjecia)

let now = moment();

function validateDataPrzyjecia() {
    let date = moment(this.value);
    if (!date.isValid()){
        dataPrzyjecia.classList.add("wrong-input");
    } else {
        dataPrzyjecia.classList.remove("wrong-input");
        fillDates(date);
    }
}

function fillDates(date) {
    terminWykonania.value = date.format('YYYY-MM-');
    dataWystawieniaZlecenia.value = date.format('YYYY-MM-');
}