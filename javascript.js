// Empty array to hold the movies the user types in
var movieList = ["the birds", "black christmas", "white christmas"];

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    // Write code to grab the text the user types into the input field
    var movie = $("#movie-input").val().trim();
    // Write code to add the new movie into the movieList array
    movieList.push(movie);
    console.log(movieList)
    });