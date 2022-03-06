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