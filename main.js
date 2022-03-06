var year = document.getElementById("year");
var month = document.getElementById("month");
var date = document.getElementById("date");

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    Checker();
    validate();
});

function Checker() {
    var yy = year.value.substring(2);
    var cc = year.value.substring(0, 2);
    var mm = month.value;
    var dd = date.value;
    d = parseInt(
        (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
    ).toFixed();
    console.log(d);
    return d;
}

function validate() {
    var Gender = document.getElementById("gender")

    console.log(Gender)
    if (Gender.value == "Male") {
        maleNames()
    } else if (Gender.value == "Female") {
        femaleNames()
    }

}

function validate() {
    var Gender = document.getElementById("gender")

    console.log(Gender)
    if (Gender.value == "Male") {
        maleNames()
    } else if (Gender.value == "Female") {
        femaleNames()
    }

}

function maleNames() {
    if (Checker() == '7') {
        return alert("Kwasi")
    } else if (Checker() == '1') {
        return alert("Kwado")
    } else if (Checker() == '2') {
        return alert("Kwabena")
    } else if (Checker() == '3') {
        return alert("Kwaku")
    } else if (Checker() == '4') {
        return alert("Yaw")
    } else if (Checker() == '5') {
        return alert("Kofi")
    } else if (Checker() == '6') {
        return alert("Kwame")
    }
}

function femaleNames() {
    if (Checker() == '7') {
        return alert("Akosua")
    } else if (Checker() == '1') {
        return alert("Adwoa")
    } else if (Checker() == '2') {
        return alert("Abeena")
    } else if (Checker() == '3') {
        return alert("Akua")
    } else if (Checker() == '4') {
        return alert("Yaa")
    } else if (Checker() == '5') {
        return alert("Afua")
    } else if (Checker() == '6') {
        return alert("Ama")
    }
}
