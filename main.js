var year = document.getElementById("year");
var month = document.getElementById("month");
var date = document.getElementById("date");
var Gender = document.getElementById("gender")
var error = document.getElementById("error")

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let messeges = []
    if (Gender.value === 'male' || Gender.value === 'female') {
        messeges.push(alert("Invalid entry"))
    }
    if (month.value === '11' && date.value === '31') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === '04' && date.value === '31') {
        messeges.push(alert("invalid entry"))
    }

    if (month.value === '06' && date.value === '31') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === '09' && date.value === '31') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'january' || month.value === "January") {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'february' || month.value === 'February') {
        messeges.push(alert("invalid entry"))
    }

    if (month.value === 'march' || month.value === 'March') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'april' || date.value === 'April') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'may' || month.value === "May") {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'june' || month.value === 'June') {
        messeges.push(alert("invalid entry"))
    }

    if (month.value === 'july' || month.value === 'July') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'august' || date.value === 'August') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'september' || month.value === "September") {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'october' || month.value === 'October') {
        messeges.push(alert("invalid entry"))
    }

    if (month.value === 'november' || month.value === 'November') {
        messeges.push(alert("invalid entry"))
    }
    if (month.value === 'december' || date.value === 'December') {
        messeges.push(alert("invalid entry"))
    }


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

    console.log(Gender)
    if (Gender.value == "Male") {
        maleNames()
    } else if (Gender.value == "Female") {
        femaleNames()
    }

}

function validate() {
    var Gender = document.getElementById("gender").value
    console.log(Gender)

    if (Gender == "Male") {
        maleNames()
    } else if (Gender == "Female") {
        femaleNames()
    }

}

function maleNames() {
    if (Checker() == '7') {
        return alert("Conratulations your name Kwasi!!")
    } else if (Checker() == '1') {
        return alert("Congratulations your name is Kwado!!")
    } else if (Checker() == '2') {
        return alert("Congratulations your name is Kwabena!!")
    } else if (Checker() == '3') {
        return alert("Congratulatios your name is Kwaku!!")
    } else if (Checker() == '4') {
        return alert("Congratulations your namr is Yaw!!")
    } else if (Checker() == '5') {
        return alert("Congratulations your name is Kofi!!")
    } else if (Checker() == '6') {
        return alert("Congratulations your name is Kwame!!")
    }
}

function femaleNames() {
    if (Checker() == '7') {
        return alert("Congratulations your name is Akosua!!")
    } else if (Checker() == '1') {
        return alert("Congratulations your name is Adwoa!!")
    } else if (Checker() == '2') {
        return alert("Congratulations your name is Abeena!!")
    } else if (Checker() == '3') {
        return alert("Congratulations your name is Akua!!")
    } else if (Checker() == '4') {
        return alert("Congratulations your name is Yaa !!")
    } else if (Checker() == '5') {
        return alert("Congratulations your name is Afua!!")
    } else if (Checker() == '6') {
        return alert("Congratulations your name is Ama!!")
    }
}
