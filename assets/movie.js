// Empty array to hold the movies the user types in
var movieList = ["the birds", "black christmas", "white christmas"];

function renderButtons() {
        // Delete the content inside the movies-view div prior to adding new movies
        $("#movies-view").html("<h1></h1>");
        // Loop through the array of movies, then generate buttons for each movie in the array
        for(var i = 0; i < movieList.length; i++ ) {
          var movieButton= $('<input type="button" value="' + movieList[i] + '"/>');
        $("#movies-view").append(movieButton);
        }

      };

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    // Write code to grab the text the user types into the input field
    var movie = $("#movie-input").val().trim();
    // Write code to add the new movie into the movieList array
    movieList.push(movie);
    console.log(movieList)
    renderButtons();
    });

// Starts the website with a few buttons
renderButtons();