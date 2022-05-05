// alert("im working");
//How to erequest data from an API using JavaScript and jQuery
// 1. jQuery $.ajax() function
//2. The Browser's fetch() functiomn
//3. Using the Azios http clinet library

// Variavles
const URL = "http://www.omdbapi.com/?apikey=a71b148a&t=Die+Hard"

// Element References

const $title = $('#tittle');
const $year = $('#year');
const $rating = $('rated');

//Event Listners




// Functions



function handleGetData(){

$.ajax(URL).then(function(data) {
console.log('movie data is ready')
console.log(data)
}, function(error) {
    console.log('smethingis wrong')
    console.log(error)
})
}
