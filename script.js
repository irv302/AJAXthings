// alert("im working");
//How to erequest data from an API using JavaScript and jQuery
// 1. jQuery $.ajax() function
//2. The Browser's fetch() functiomn
//3. Using the Azios http clinet library

// Variavles
const URL = "http://www.omdbapi.com/?apikey=a71b148a&t=";

// Element References jQuery variables

const $title = $('#tittle');
const $year = $('#year');
const $rating = $('#rated');
const $form = $('form');
const $ratings = $('#ratings')
const $input = $('input[type="text"]');

//Event Listners
$form.on('submit',handleGetData)



// Functions
//save


function handleGetData(event){

event.preventDefault();
const userInput = $input.val();//target user input

$.ajax(URL + userInput).then(function(data) {
    console.log('movie data is ready')
    console.log(data)
    $title.text(data.Title)
    $year.text(data.Year)
    $rating.text(data.Rated)
    $ratings.text(data.Ratings[1].Value)
    $('main').append(`<img src="${data.Poster}"/>`)
}, function(error) {
    console.log('smethingis wrong')
    console.log(error)

})

}

