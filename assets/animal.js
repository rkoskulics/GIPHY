// Empty array to hold the animal the user types in
var animalList = ["sparrows", "fox", "bulldog"];

function renderButtons() {
        // Delete the content inside the animal-view div prior to adding new animal
        $("#animal-view").html("<h1></h1>");
        // Loop through the array of animals, then generate buttons for each animals in the array
        for(var i = 0; i < animalList.length; i++ ) {
          var animalButton= $('<input type="button" value="' + animalList[i] + '"/>');
          animalButton.addClass("animal");
          animalButton.attr("data-name", animalList[i])
        $("#animal-view").append(animalButton);
        }

      };

// This function handles events where the add animal button is clicked
$("#add-animal").on("click", function(event) {
    event.preventDefault();
    // Write code to grab the text the user types into the input field
    var animal = $("#animal-input").val().trim();
    // Write code to add the new movie into the animalList array
    animalList.push(animal);
    renderButtons();
    });

function displayAnimalGif() {
	$("#gifs").empty();
	var animalName = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=lzcGYta9bfMdDiwu3ZImzoJH3rgRatgC&q=" + animalName + "&limit=10&offset=0&&lang=en";
	$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	for (var i = 0; i < response.data.length - 1; i++) {
    		// Saves the URL for both still and moving GIFs into variables to use later
    		var stillGif = response.data[i].images.fixed_height_still.url;
    		var movingGif = response.data[i].images.fixed_height.url;
    		// Saves the rating into a variable for later
    		var rating = response.data[i].rating;
    		// creates an image tag to put into the HTML
    		var animalImage = $("<img>");
    		//Adds the src attribute and url to the image tag, and alt text, and still state
    		animalImage.attr("data-state", "still")
    		animalImage.attr("data-still", stillGif)
    		animalImage.attr("data-animate", movingGif)
        	animalImage.attr("src", stillGif);
        	animalImage.attr("alt", "animal image");
        	animalImage.addClass("gifType");
        	// Puts the GIF on the HTML
        	$("#gifs").prepend(animalImage, "rated: " + rating);

        }
    	
    });
};
// Add an on click event to change from still to moving and back
function animate(){
    var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate")                    
        }else{
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still")
        }
    };
// Adding click event listeners to all elements with a class of "animal"
$(document).on("click", ".animal", displayAnimalGif);
// Add on click even to animate gifs
$(document).on("click", ".gifType", animate)
// Starts the website with a few buttons
renderButtons();