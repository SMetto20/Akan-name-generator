var year= document.getElementById('year')
var month= document.getElementById('month')
var date = document.getElementById("date")

var form = document.getElementById('form')
form.addEventListener('submit',function(event){event.preventDefault() 
Checker()
validate()
})
